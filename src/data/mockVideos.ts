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
  },
  {
    id: "6",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1200&fit=crop",
    user: {
      id: "user6",
      username: "fitnessguru",
      avatar: "https://i.pravatar.cc/150?img=6",
      verified: true
    },
    description: "5 minute morning workout routine 💪 #fitness #workout #healthy",
    tags: ["fitness", "workout", "healthy"],
    likes: 34567,
    comments: 234,
    shares: 123,
    isLiked: false,
    duration: 18
  },
  {
    id: "7",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1200&fit=crop",
    user: {
      id: "user7",
      username: "makeupqueen",
      avatar: "https://i.pravatar.cc/150?img=7",
      verified: false
    },
    description: "Get ready with me for date night 💄✨ #makeup #beauty #grwm",
    tags: ["makeup", "beauty", "grwm"],
    likes: 56789,
    comments: 678,
    shares: 234,
    isLiked: true,
    duration: 22
  },
  {
    id: "8",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop",
    user: {
      id: "user8",
      username: "comedian",
      avatar: "https://i.pravatar.cc/150?img=8",
      verified: true
    },
    description: "When you realize it's Monday tomorrow 😂 #comedy #funny #relatable",
    tags: ["comedy", "funny", "relatable"],
    likes: 89012,
    comments: 1234,
    shares: 567,
    isLiked: false,
    duration: 12
  },
  {
    id: "9",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop",
    user: {
      id: "user9",
      username: "musician",
      avatar: "https://i.pravatar.cc/150?img=9",
      verified: true
    },
    description: "New song preview! Drop a ❤️ if you vibe with it #music #newmusic #artist",
    tags: ["music", "newmusic", "artist"],
    likes: 45678,
    comments: 567,
    shares: 234,
    isLiked: true,
    duration: 28
  },
  {
    id: "10",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_5MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1200&fit=crop",
    user: {
      id: "user10",
      username: "petlover",
      avatar: "https://i.pravatar.cc/150?img=10",
      verified: false
    },
    description: "My cat's reaction to cucumber 🥒😹 #pets #cats #funny",
    tags: ["pets", "cats", "funny"],
    likes: 78901,
    comments: 890,
    shares: 345,
    isLiked: false,
    duration: 16
  },
  {
    id: "11",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1200&fit=crop",
    user: {
      id: "user11",
      username: "fashionista",
      avatar: "https://i.pravatar.cc/150?img=11",
      verified: true
    },
    description: "Spring outfit ideas you need to try 🌸 #fashion #ootd #style",
    tags: ["fashion", "ootd", "style"],
    likes: 34567,
    comments: 234,
    shares: 123,
    isLiked: true,
    duration: 24
  },
  {
    id: "12",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1200&fit=crop",
    user: {
      id: "user12",
      username: "gamer",
      avatar: "https://i.pravatar.cc/150?img=12",
      verified: false
    },
    description: "Epic gaming moment! Can't believe this happened 🎮 #gaming #epic #win",
    tags: ["gaming", "epic", "win"],
    likes: 56789,
    comments: 456,
    shares: 234,
    isLiked: false,
    duration: 19
  },
  {
    id: "13",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop",
    user: {
      id: "user13",
      username: "diymaster",
      avatar: "https://i.pravatar.cc/150?img=13",
      verified: true
    },
    description: "Transform your room with this DIY hack! 🔨 #diy #homedecor #creative",
    tags: ["diy", "homedecor", "creative"],
    likes: 23456,
    comments: 123,
    shares: 89,
    isLiked: true,
    duration: 35
  },
  {
    id: "14",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop",
    user: {
      id: "user14",
      username: "artist",
      avatar: "https://i.pravatar.cc/150?img=14",
      verified: false
    },
    description: "Time-lapse of my latest artwork 🎨 #art #painting #creative",
    tags: ["art", "painting", "creative"],
    likes: 45678,
    comments: 345,
    shares: 167,
    isLiked: false,
    duration: 27
  },
  {
    id: "15",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_5MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&h=1200&fit=crop",
    user: {
      id: "user15",
      username: "motivator",
      avatar: "https://i.pravatar.cc/150?img=15",
      verified: true
    },
    description: "You got this! Monday motivation 💯 #motivation #inspiration #mindset",
    tags: ["motivation", "inspiration", "mindset"],
    likes: 89012,
    comments: 678,
    shares: 456,
    isLiked: true,
    duration: 14
  },
  {
    id: "16",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_5MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1200&fit=crop",
    user: {
      id: "user16",
      username: "chef",
      avatar: "https://i.pravatar.cc/150?img=16",
      verified: true
    },
    description: "30-second dessert recipe that will blow your mind 🍰 #cooking #dessert #recipe",
    tags: ["cooking", "dessert", "recipe"],
    likes: 67890,
    comments: 890,
    shares: 345,
    isLiked: false,
    duration: 30
  },
  {
    id: "17",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&h=1200&fit=crop",
    user: {
      id: "user17",
      username: "dancer",
      avatar: "https://i.pravatar.cc/150?img=17",
      verified: false
    },
    description: "Learn this dance in 30 seconds! Tutorial 💃 #dance #tutorial #trending",
    tags: ["dance", "tutorial", "trending"],
    likes: 45678,
    comments: 234,
    shares: 123,
    isLiked: true,
    duration: 21
  },
  {
    id: "18",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_1MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop",
    user: {
      id: "user18",
      username: "photographer",
      avatar: "https://i.pravatar.cc/150?img=18",
      verified: true
    },
    description: "Golden hour photography tips 📸 #photography #tips #goldenhour",
    tags: ["photography", "tips", "goldenhour"],
    likes: 34567,
    comments: 345,
    shares: 89,
    isLiked: false,
    duration: 17
  },
  {
    id: "19",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&h=1200&fit=crop",
    user: {
      id: "user19",
      username: "lifehacker",
      avatar: "https://i.pravatar.cc/150?img=19",
      verified: false
    },
    description: "Phone tricks you didn't know existed! 📱 #lifehack #tech #tips",
    tags: ["lifehack", "tech", "tips"],
    likes: 78901,
    comments: 567,
    shares: 234,
    isLiked: true,
    duration: 26
  },
  {
    id: "20",
    url: "https://test-videos.co.uk/vids/bigbuckbunny/mp4/h264/360/Big_Buck_Bunny_360_10s_2MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1200&fit=crop",
    user: {
      id: "user20",
      username: "yogi",
      avatar: "https://i.pravatar.cc/150?img=20",
      verified: true
    },
    description: "Morning yoga routine for beginners 🧘‍♀️ #yoga #wellness #health",
    tags: ["yoga", "wellness", "health"],
    likes: 56789,
    comments: 456,
    shares: 178,
    isLiked: false,
    duration: 32
  },
  {
    id: "21",
    url: "https://test-videos.co.uk/vids/jellyfish/mp4/h264/360/Jellyfish_360_10s_5MB.mp4",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop",
    user: {
      id: "user21",
      username: "naturelover",
      avatar: "https://i.pravatar.cc/150?img=21",
      verified: false
    },
    description: "Most beautiful sunset I've ever seen 🌅 #nature #sunset #beautiful",
    tags: ["nature", "sunset", "beautiful"],
    likes: 89012,
    comments: 789,
    shares: 456,
    isLiked: true,
    duration: 23
  }
];