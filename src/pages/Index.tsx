import { useState, useRef, useEffect } from "react";
import { VideoPlayer } from "@/components/VideoPlayer";
import { AirtimePayment } from "@/components/AirtimePayment";
import { CommentsModal } from "@/components/CommentsModal";
import { Header } from "@/components/Header";
import { mockVideos } from "@/data/mockVideos";
import { Video } from "@/types/video";

const Index = () => {
  const [videos, setVideos] = useState<Video[]>(mockVideos);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showPayment, setShowPayment] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<Video | null>(null);
  const [credits, setCredits] = useState(100);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleLike = (videoId: string) => {
    setVideos((prev) =>
      prev.map((video) =>
        video.id === videoId
          ? {
              ...video,
              isLiked: !video.isLiked,
              likes: video.isLiked ? video.likes - 1 : video.likes + 1,
            }
          : video
      )
    );
  };

  const handleComment = (video: Video) => {
    setSelectedVideo(video);
    setShowComments(true);
  };

  const handlePaymentSuccess = (purchasedCredits: number) => {
    setCredits((prev) => prev + purchasedCredits);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;

      const scrollPosition = containerRef.current.scrollTop;
      const videoHeight = window.innerHeight;
      const newIndex = Math.round(scrollPosition / videoHeight);

      if (newIndex !== currentIndex) {
        setCurrentIndex(newIndex);
      }
    };

    const container = containerRef.current;
    container?.addEventListener("scroll", handleScroll);

    return () => {
      container?.removeEventListener("scroll", handleScroll);
    };
  }, [currentIndex]);

  return (
    <div className="h-screen bg-background overflow-hidden relative flex flex-col">
      {/* Header */}
      <Header onOpenPayment={() => setShowPayment(true)} credits={credits} />

      {/* Video Feed */}
      <div
        ref={containerRef}
        className="flex-1 overflow-y-scroll snap-y snap-mandatory scrollbar-hide"
        style={{ scrollSnapType: "y mandatory" }}
      >
        {videos.map((video, index) => (
          <div key={video.id} className="h-screen snap-start snap-always">
            <VideoPlayer
              video={video}
              isActive={index === currentIndex}
              onLike={handleLike}
              onComment={handleComment}
            />
          </div>
        ))}
      </div>

      {/* Airtime Payment Modal */}
      <AirtimePayment
        open={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={handlePaymentSuccess}
      />

      {/* Comments Modal */}
      {selectedVideo && (
        <CommentsModal
          open={showComments}
          onClose={() => setShowComments(false)}
          videoId={selectedVideo.id}
          videoDescription={selectedVideo.description}
          username={selectedVideo.user.username}
          avatar={selectedVideo.user.avatar}
        />
      )}
    </div>
  );
};

export default Index;
