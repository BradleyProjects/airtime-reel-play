import { useRef, useEffect, useState, useCallback } from "react";
import { Video } from "@/types/video";
import {
  Heart,
  MessageCircle,
  Share2,
  Music,
  CheckCircle,
  Play,
  Pause,
  Volume2,
  VolumeX,
  Zap,
  Loader2,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface VideoPlayerProps {
  video: Video;
  isActive: boolean;
  onLike: (id: string) => void;
  onComment: (video: Video) => void;
}

export const VideoPlayer = ({
  video,
  isActive,
  onLike,
  onComment,
}: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [showHeart, setShowHeart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true); // Start muted for autoplay
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [isBuffering, setIsBuffering] = useState(false);
  const [hasError, setHasError] = useState(false);

  // Simple play function
  const playVideo = useCallback(async () => {
    if (!videoRef.current) return;
    
    try {
      videoRef.current.muted = true; // Ensure muted for autoplay
      await videoRef.current.play();
      setIsPlaying(true);
      setHasError(false);
    } catch (error) {
      console.error("Video play error:", error);
      // Try once more with full reload
      try {
        videoRef.current.load();
        videoRef.current.muted = true;
        await videoRef.current.play();
        setIsPlaying(true);
        setHasError(false);
      } catch (retryError) {
        console.error("Video retry failed:", retryError);
        setHasError(true);
      }
    }
  }, []);

  // Handle active state changes
  useEffect(() => {
    if (!videoRef.current) return;
    
    if (isActive) {
      // Reset error state when becoming active
      setHasError(false);
      setIsBuffering(false);
      
      // Start from beginning
      videoRef.current.currentTime = 0;
      
      // Start playing with a small delay to ensure video is ready
      setTimeout(() => {
        playVideo();
      }, 100);
    } else {
      // Immediately stop playback when inactive
      videoRef.current.pause();
      setIsPlaying(false);
      setCurrentTime(0);
    }
  }, [isActive, playVideo]);

  // Reset state when video changes or component unmounts
  useEffect(() => {
    // Clean up the current video when switching
    const currentVideo = videoRef.current;
    
    return () => {
      if (currentVideo) {
        currentVideo.pause();
        currentVideo.currentTime = 0;
      }
    };
  }, [video.id]); // Reset when video ID changes
  
  // Load new video
  useEffect(() => {
    setCurrentTime(0);
    setDuration(0);
    setHasError(false);
    setIsBuffering(false);
    setIsPlaying(false);
    
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [video.url]);

  // Setup video event listeners
  useEffect(() => {
    const videoElement = videoRef.current;
    if (!videoElement) return;

    const handleTimeUpdate = () => {
      if (!isDragging) {
        setCurrentTime(videoElement.currentTime);
      }
    };

    const handleLoadedMetadata = () => {
      setDuration(videoElement.duration);
      setHasError(false);
    };

    const handleWaiting = () => {
      setIsBuffering(true);
    };

    const handleCanPlay = () => {
      setIsBuffering(false);
      setHasError(false);
    };

    const handleError = (e: Event) => {
      const video = e.target as HTMLVideoElement;
      console.error("Video error:", {
        error: video.error,
        src: video.src
      });
      
      // Simple error handling - just set the error state
      setHasError(true);
      setIsBuffering(false);
      setIsPlaying(false);
    };

    const handleStalled = () => {
      console.log("Video stalled");
      setIsBuffering(true);
    };

    const handleEnded = () => {
      // Loop is set, but ensure it restarts properly
      videoElement.currentTime = 0;
      if (isActive) {
        playVideo();
      }
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    videoElement.addEventListener("timeupdate", handleTimeUpdate);
    videoElement.addEventListener("loadedmetadata", handleLoadedMetadata);
    videoElement.addEventListener("waiting", handleWaiting);
    videoElement.addEventListener("canplay", handleCanPlay);
    videoElement.addEventListener("error", handleError);
    videoElement.addEventListener("stalled", handleStalled);
    videoElement.addEventListener("ended", handleEnded);
    videoElement.addEventListener("play", handlePlay);
    videoElement.addEventListener("pause", handlePause);

    return () => {
      videoElement.removeEventListener("timeupdate", handleTimeUpdate);
      videoElement.removeEventListener("loadedmetadata", handleLoadedMetadata);
      videoElement.removeEventListener("waiting", handleWaiting);
      videoElement.removeEventListener("canplay", handleCanPlay);
      videoElement.removeEventListener("error", handleError);
      videoElement.removeEventListener("stalled", handleStalled);
      videoElement.removeEventListener("ended", handleEnded);
      videoElement.removeEventListener("play", handlePlay);
      videoElement.removeEventListener("pause", handlePause);
    };
  }, [isDragging, isActive, playVideo]);

  const togglePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Missing handler stubs
  const handleLike = () => {
    onLike(video.id);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!progressRef.current || !videoRef.current || !duration) return;
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * duration;
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleProgressDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !progressRef.current || !videoRef.current || !duration)
      return;
    const rect = progressRef.current.getBoundingClientRect();
    const percent = (e.clientX - rect.left) / rect.width;
    videoRef.current.currentTime = percent * duration;
    setCurrentTime(videoRef.current.currentTime);
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
    }
  };

  const toggleSpeed = () => {
    const newRate = playbackRate === 1 ? 2 : 1;
    setPlaybackRate(newRate);
    if (videoRef.current) {
      videoRef.current.playbackRate = newRate;
    }
  };

  const formatTime = (time: number) => {
    if (!time || isNaN(time)) return "0:00";
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60)
      .toString()
      .padStart(2, "0");
    return `${minutes}:${seconds}`;
  };

  const handleDoubleClick = () => {
    if (!video.isLiked) {
      handleLike();
    }
  };

  const handleShare = async () => {
    const shareUrl = `${window.location.origin}/?video=${video.id}`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Check out @${video.user.username}'s video`,
          text: video.description,
          url: shareUrl,
        });
      } catch (err) {
        // User cancelled share or browser doesn't support
        copyToClipboard(shareUrl);
      }
    } else {
      copyToClipboard(shareUrl);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    toast.success("Link copied to clipboard!");
  };

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  return (
    <div className="relative h-full w-full bg-black snap-start snap-always">
      {/* Video */}
      <video
        ref={videoRef}
        className="h-full w-full object-cover cursor-pointer"
        loop
        muted={true}
        playsInline
        autoPlay={false}
        preload="metadata"
        onClick={togglePlayPause}
        onDoubleClick={handleDoubleClick}
      >
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Loading/Buffering Overlay */}
      {isBuffering && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/20">
          <Loader2 className="w-12 h-12 text-primary animate-spin" />
        </div>
      )}

      {/* Error Overlay */}
      {hasError && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/50">
          <p className="text-white mb-4">Unable to load video</p>
          <button
            onClick={() => {
              setHasError(false);
              if (videoRef.current) {
                videoRef.current.load();
                playVideo();
              }
            }}
            className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-primary/80"
          >
            Retry
          </button>
        </div>
      )}

      {/* Play/Pause Overlay */}
      {!isPlaying && !isBuffering && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center">
            <Play className="w-10 h-10 text-white fill-white ml-1" />
          </div>
        </div>
      )}

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/50 pointer-events-none" />

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 right-0 px-4 pb-2">
        <div className="flex items-center gap-2 text-white text-xs">
          <span>{formatTime(currentTime)}</span>
          <div
            ref={progressRef}
            className="flex-1 h-1 bg-white/20 rounded-full cursor-pointer relative"
            onClick={handleProgressClick}
            onMouseDown={() => setIsDragging(true)}
            onMouseUp={() => setIsDragging(false)}
            onMouseLeave={() => setIsDragging(false)}
            onMouseMove={handleProgressDrag}
          >
            <div
              className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            />
            <div
              className="absolute h-3 w-3 bg-primary rounded-full -translate-y-1/2 top-1/2 transition-all"
              style={{
                left: `${(currentTime / duration) * 100}%`,
                transform: "translateX(-50%) translateY(-50%)",
              }}
            />
          </div>
          <span>{formatTime(duration)}</span>
        </div>
      </div>

      {/* Heart Animation */}
      {showHeart && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <Heart className="w-32 h-32 text-primary fill-primary heart-animation" />
        </div>
      )}

      {/* Video Info */}
      <div className="absolute bottom-20 left-4 right-20 text-foreground">
        <div className="flex items-center gap-3 mb-3">
          <img
            src={video.user.avatar}
            alt={video.user.username}
            className="w-10 h-10 rounded-full border-2 border-primary"
          />
          <div className="flex items-center gap-2">
            <span className="font-semibold">{video.user.username}</span>
            {video.user.verified && (
              <CheckCircle className="w-4 h-4 text-primary fill-primary" />
            )}
          </div>
        </div>
        <p className="text-sm mb-2">{video.description}</p>
        <div className="flex items-center gap-2">
          <Music className="w-4 h-4" />
          <span className="text-xs">Original Sound</span>
        </div>
      </div>

      {/* Actions Sidebar */}
      <div className="absolute right-4 bottom-20 flex flex-col items-center gap-5">
        <button
          onClick={handleLike}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-white/10 backdrop-blur-md",
              video.isLiked && "bg-primary/20"
            )}
          >
            <Heart
              className={cn(
                "w-6 h-6",
                video.isLiked ? "text-primary fill-primary" : "text-white"
              )}
            />
          </div>
          <span className="text-xs text-white">
            {formatNumber(video.likes)}
          </span>
        </button>

        <button
          onClick={() => onComment(video)}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-white">
            {formatNumber(video.comments)}
          </span>
        </button>

        <button
          onClick={handleShare}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-white">
            {formatNumber(video.shares)}
          </span>
        </button>

        <button
          onClick={toggleMute}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            {isMuted ? (
              <VolumeX className="w-6 h-6 text-white" />
            ) : (
              <Volume2 className="w-6 h-6 text-white" />
            )}
          </div>
          <span className="text-xs text-white">
            {isMuted ? "Unmute" : "Mute"}
          </span>
        </button>

        <button
          onClick={toggleSpeed}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div
            className={cn(
              "w-12 h-12 rounded-full flex items-center justify-center",
              "bg-white/10 backdrop-blur-md",
              playbackRate === 2 && "bg-primary/20"
            )}
          >
            <Zap
              className={cn(
                "w-6 h-6",
                playbackRate === 2 ? "text-primary fill-primary" : "text-white"
              )}
            />
          </div>
          <span className="text-xs text-white">{playbackRate}x</span>
        </button>
      </div>
    </div>
  );
};