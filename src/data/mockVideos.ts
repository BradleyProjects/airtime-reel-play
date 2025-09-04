import { Video } from "@/types/video";

export const mockVideos: Video[] = [
  {
    id: "1",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1200&fit=crop",
    user: {
      id: "user1",
      username: "creativemind",
      avatar: "https://i.pravatar.cc/150?img=1",
      verified: true
    },
    description: "Amazing sunset vibes 🌅 Living my best life! #sunset #nature #vibes",
    tags: ["sunset", "nature", "vibes"],
    likes: 12543,
    comments: 234,
    shares: 89,
    isLiked: false,
    duration: 15
  },
  {
    id: "2",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&h=1200&fit=crop",
    user: {
      id: "user2",
      username: "dancequeen",
      avatar: "https://i.pravatar.cc/150?img=2",
      verified: false
    },
    description: "New dance challenge! Who's joining? 💃 #dance #challenge #viral",
    tags: ["dance", "challenge", "viral"],
    likes: 45678,
    comments: 892,
    shares: 234,
    isLiked: true,
    duration: 30
  },
  {
    id: "3",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?w=800&h=1200&fit=crop",
    user: {
      id: "user3",
      username: "foodlover",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    description: "Making the perfect pasta 🍝 Recipe in comments! #food #cooking #recipe",
    tags: ["food", "cooking", "recipe"],
    likes: 8901,
    comments: 123,
    shares: 45,
    isLiked: false,
    duration: 45
  },
  {
    id: "4",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=800&h=1200&fit=crop",
    user: {
      id: "user4",
      username: "travelbug",
      avatar: "https://i.pravatar.cc/150?img=4",
      verified: false
    },
    description: "Hidden gems in Tokyo 🇯🇵 Save this for later! #travel #tokyo #explore",
    tags: ["travel", "tokyo", "explore"],
    likes: 23456,
    comments: 456,
    shares: 178,
    isLiked: false,
    duration: 20
  },
  {
    id: "5",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_5MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=1200&fit=crop",
    user: {
      id: "user5",
      username: "techguru",
      avatar: "https://i.pravatar.cc/150?img=5",
      verified: true
    },
    description: "Mind-blowing tech hack you need to know! 🚀 #tech #lifehack #innovation",
    tags: ["tech", "lifehack", "innovation"],
    likes: 67890,
    comments: 901,
    shares: 456,
    isLiked: true,
    duration: 25
  }
];