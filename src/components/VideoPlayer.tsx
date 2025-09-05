import { useRef, useEffect, useState } from "react";
import { Video } from "@/types/video";
import { Heart, MessageCircle, Share2, Music, CheckCircle, Play, Pause, Volume2, VolumeX } from "lucide-react";
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
  const [showHeart, setShowHeart] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

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
      </div>
    </div>
  );
};