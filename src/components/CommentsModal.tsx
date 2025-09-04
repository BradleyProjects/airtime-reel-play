import { useState, useRef, useEffect } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Heart, Send, X } from "lucide-react";
import { cn } from "@/lib/utils";
import { Comment, mockComments } from "@/data/mockComments";
import { toast } from "sonner";

interface CommentsModalProps {
  open: boolean;
  onClose: () => void;
  videoId: string;
  videoDescription: string;
  username: string;
  avatar: string;
}

export const CommentsModal = ({ 
  open, 
  onClose, 
  videoId,
  videoDescription,
  username,
  avatar
}: CommentsModalProps) => {
  const [comments, setComments] = useState<Comment[]>([]);
  const [newComment, setNewComment] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    // Load comments for this video
    setComments(mockComments[videoId] || []);
  }, [videoId]);

  const handleLikeComment = (commentId: string) => {
    setComments(prev => 
      prev.map(comment => 
        comment.id === commentId
          ? { 
              ...comment, 
              isLiked: !comment.isLiked,
              likes: comment.isLiked ? comment.likes - 1 : comment.likes + 1
            }
          : comment
      )
    );
  };

  const handleSendComment = () => {
    if (!newComment.trim()) return;

    const newCommentObj: Comment = {
      id: `c${Date.now()}`,
      userId: "currentUser",
      username: "You",
      avatar: "https://i.pravatar.cc/150?img=30",
      text: newComment,
      likes: 0,
      timestamp: "Just now",
      isLiked: false
    };

    setComments(prev => [newCommentObj, ...prev]);
    setNewComment("");
    toast.success("Comment posted!");
  };

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md h-[70vh] flex flex-col p-0 bg-card border-border/50 backdrop-blur-xl">
        <DialogHeader className="p-4 border-b border-border/50">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-semibold">
              {comments.length} Comments
            </DialogTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8"
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
        </DialogHeader>

        {/* Original post */}
        <div className="p-4 border-b border-border/50">
          <div className="flex gap-3">
            <img
              src={avatar}
              alt={username}
              className="w-10 h-10 rounded-full"
            />
            <div className="flex-1">
              <p className="font-semibold text-sm">{username}</p>
              <p className="text-sm text-foreground/80 mt-1">{videoDescription}</p>
            </div>
          </div>
        </div>

        {/* Comments list */}
        <ScrollArea className="flex-1 px-4">
          <div className="space-y-4 py-4">
            {comments.length === 0 ? (
              <p className="text-center text-muted-foreground py-8">
                No comments yet. Be the first to comment!
              </p>
            ) : (
              comments.map((comment) => (
                <div key={comment.id} className="flex gap-3">
                  <img
                    src={comment.avatar}
                    alt={comment.username}
                    className="w-8 h-8 rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-sm">{comment.username}</span>
                          <span className="text-xs text-muted-foreground">{comment.timestamp}</span>
                        </div>
                        <p className="text-sm mt-1">{comment.text}</p>
                      </div>
                      <button
                        onClick={() => handleLikeComment(comment.id)}
                        className="flex flex-col items-center gap-1 ml-2"
                      >
                        <Heart 
                          className={cn(
                            "w-4 h-4 transition-colors",
                            comment.isLiked ? "text-primary fill-primary" : "text-muted-foreground"
                          )}
                        />
                        <span className="text-xs text-muted-foreground">{comment.likes}</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))
            )}
          </div>
        </ScrollArea>

        {/* Comment input */}
        <div className="p-4 border-t border-border/50">
          <div className="flex gap-2">
            <Input
              ref={inputRef}
              value={newComment}
              onChange={(e) => setNewComment(e.target.value)}
              placeholder="Add a comment..."
              className="flex-1 bg-background/50 border-border/50"
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  handleSendComment();
                }
              }}
            />
            <Button
              onClick={handleSendComment}
              size="icon"
              className="bg-gradient-to-r from-primary to-accent text-white hover:opacity-90"
              disabled={!newComment.trim()}
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};