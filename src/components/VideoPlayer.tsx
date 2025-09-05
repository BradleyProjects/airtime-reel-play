import { useRef, useEffect, useState } from "react";
import { Video } from "@/types/video";
import { Heart, MessageCircle, Share2, Music, CheckCircle, Play, Pause, Volume2, VolumeX, Zap } from "lucide-react";
import { cn } from "@/lib/utils";
import { toast } from "sonner";

interface VideoPlayerProps {
  video: Video;
  isActive: boolean;
  onLike: (id: string) => void;
  onComment: (video: Video) => void;
}

export const VideoPlayer = ({ video, isActive, onLike, onComment }: VideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [showHeart, setShowHeart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [playbackRate, setPlaybackRate] = useState(1);

  useEffect(() => {
    if (videoRef.current) {
      if (isActive) {
        videoRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(error => {
          console.log("Autoplay was prevented:", error);
        });
      } else {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    }
  }, [isActive]);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const updateTime = () => {
      setCurrentTime(video.currentTime);
      setDuration(video.duration);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    video.addEventListener('timeupdate', updateTime);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);

    return () => {
      video.removeEventListener('timeupdate', updateTime);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
    };
  }, [video]);

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

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleSpeed = () => {
    if (videoRef.current) {
      const newRate = playbackRate === 1 ? 2 : 1;
      videoRef.current.playbackRate = newRate;
      setPlaybackRate(newRate);
      toast.success(`Playback speed: ${newRate}x`);
    }
  };

  const handleProgressClick = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = progressRef.current?.getBoundingClientRect();
    if (!rect || !videoRef.current) return;
    
    const x = e.clientX - rect.left;
    const percentage = x / rect.width;
    const newTime = percentage * duration;
    
    videoRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleProgressDrag = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    handleProgressClick(e);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleLike = () => {
    onLike(video.id);
    setShowHeart(true);
    setTimeout(() => setShowHeart(false), 1000);
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
        src={video.url}
        className="h-full w-full object-cover cursor-pointer"
        loop
        muted={isMuted}
        playsInline
        onClick={togglePlayPause}
        onDoubleClick={handleDoubleClick}
      />

      {/* Play/Pause Overlay */}
      {!isPlaying && (
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
              style={{ left: `${(currentTime / duration) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
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
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            "bg-white/10 backdrop-blur-md",
            video.isLiked && "bg-primary/20"
          )}>
            <Heart className={cn(
              "w-6 h-6",
              video.isLiked ? "text-primary fill-primary" : "text-white"
            )} />
          </div>
          <span className="text-xs text-white">{formatNumber(video.likes)}</span>
        </button>

        <button 
          onClick={() => onComment(video)}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <MessageCircle className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-white">{formatNumber(video.comments)}</span>
        </button>

        <button 
          onClick={handleShare}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center">
            <Share2 className="w-6 h-6 text-white" />
          </div>
          <span className="text-xs text-white">{formatNumber(video.shares)}</span>
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
          <span className="text-xs text-white">{isMuted ? "Unmute" : "Mute"}</span>
        </button>

        <button 
          onClick={toggleSpeed}
          className="flex flex-col items-center gap-1 transition-transform hover:scale-110"
        >
          <div className={cn(
            "w-12 h-12 rounded-full flex items-center justify-center",
            "bg-white/10 backdrop-blur-md",
            playbackRate === 2 && "bg-primary/20"
          )}>
            <Zap className={cn(
              "w-6 h-6",
              playbackRate === 2 ? "text-primary fill-primary" : "text-white"
            )} />
          </div>
          <span className="text-xs text-white">{playbackRate}x</span>
        </button>
      </div>
    </div>
  );
};