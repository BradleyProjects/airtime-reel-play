import { Video } from "@/types/video";

export const mockVideos: Video[] = [
  {
    id: "1",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=1200&fit=crop",
    user: {
      id: "user1",
      username: "swiprcreator",
      avatar: "https://i.pravatar.cc/150?img=1",
      verified: true
    },
    description: "Big Buck Bunny animation 🐰 Check out this amazing short film! #animation #bunny #cartoon",
    tags: ["animation", "bunny", "cartoon"],
    likes: 12543,
    comments: 234,
    shares: 89,
    isLiked: false,
    duration: 15
  },
  {
    id: "2",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1509909756405-be0199881695?w=800&h=1200&fit=crop",
    user: {
      id: "user2",
      username: "dancequeen",
      avatar: "https://i.pravatar.cc/150?img=2",
      verified: false
    },
    description: "Elephants Dream - Open source movie magic! 🐘 #animation #opensource #art",
    tags: ["animation", "opensource", "art"],
    likes: 45678,
    comments: 892,
    shares: 234,
    isLiked: true,
    duration: 30
  },
  {
    id: "3",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1547032175-7fc8c7bd15b3?w=800&h=1200&fit=crop",
    user: {
      id: "user3",
      username: "foodlover",
      avatar: "https://i.pravatar.cc/150?img=3",
      verified: true
    },
    description: "Watch this grilling masterpiece! 🔥🍖 Perfect BBQ vibes #food #grilling #bbq",
    tags: ["food", "grilling", "bbq"],
    likes: 8901,
    comments: 123,
    shares: 45,
    isLiked: false,
    duration: 45
  },
  {
    id: "4",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1513829596324-4bb2800c5efb?w=800&h=1200&fit=crop",
    user: {
      id: "user4",
      username: "travelbug",
      avatar: "https://i.pravatar.cc/150?img=4",
      verified: false
    },
    description: "Escape to paradise! 🏝️ Beautiful beaches and crystal waters #travel #beach #paradise",
    tags: ["travel", "beach", "paradise"],
    likes: 23456,
    comments: 456,
    shares: 178,
    isLiked: false,
    duration: 20
  },
  {
    id: "5",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=800&h=1200&fit=crop",
    user: {
      id: "user5",
      username: "techguru",
      avatar: "https://i.pravatar.cc/150?img=5",
      verified: true
    },
    description: "Having fun with Chromecast! 📺 Stream everything easily #tech #chromecast #streaming",
    tags: ["tech", "chromecast", "streaming"],
    likes: 67890,
    comments: 901,
    shares: 456,
    isLiked: true,
    duration: 25
  },
  {
    id: "6",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    thumbnail: "https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&h=1200&fit=crop",
    user: {
      id: "user6",
      username: "fitnessguru",
      avatar: "https://i.pravatar.cc/150?img=6",
      verified: true
    },
    description: "Joyride with the best view! 🚗 Amazing road trip vibes #travel #roadtrip #adventure",
    tags: ["travel", "roadtrip", "adventure"],
    likes: 34567,
    comments: 234,
    shares: 123,
    isLiked: false,
    duration: 18
  },
  {
    id: "7",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerMeltdowns.mp4",
    thumbnail: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=800&h=1200&fit=crop",
    user: {
      id: "user7",
      username: "makeupqueen",
      avatar: "https://i.pravatar.cc/150?img=7",
      verified: false
    },
    description: "When the ice cream melts! 🍦 Summer vibes only #summer #icecream #fun",
    tags: ["summer", "icecream", "fun"],
    likes: 56789,
    comments: 678,
    shares: 234,
    isLiked: true,
    duration: 22
  },
  {
    id: "8",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&h=1200&fit=crop",
    user: {
      id: "user8",
      username: "comedian",
      avatar: "https://i.pravatar.cc/150?img=8",
      verified: true
    },
    description: "Sintel - Epic animated short film! 🐉 Must watch #animation #shortfilm #epic",
    tags: ["animation", "shortfilm", "epic"],
    likes: 89012,
    comments: 1234,
    shares: 567,
    isLiked: false,
    duration: 12
  },
  {
    id: "9",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/SubaruOutbackOnStreetAndDirt.mp4",
    thumbnail: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=800&h=1200&fit=crop",
    user: {
      id: "user9",
      username: "musician",
      avatar: "https://i.pravatar.cc/150?img=9",
      verified: true
    },
    description: "Subaru adventure on and off road! 🚙 #cars #offroad #subaru",
    tags: ["cars", "offroad", "subaru"],
    likes: 45678,
    comments: 567,
    shares: 234,
    isLiked: true,
    duration: 28
  },
  {
    id: "10",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4",
    thumbnail: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=800&h=1200&fit=crop",
    user: {
      id: "user10",
      username: "petlover",
      avatar: "https://i.pravatar.cc/150?img=10",
      verified: false
    },
    description: "Tears of Steel - Mind-blowing sci-fi short! 🤖 #scifi #film #future",
    tags: ["scifi", "film", "future"],
    likes: 78901,
    comments: 890,
    shares: 345,
    isLiked: false,
    duration: 16
  },
  {
    id: "11",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/VolkswagenGTIReview.mp4",
    thumbnail: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=800&h=1200&fit=crop",
    user: {
      id: "user11",
      username: "fashionista",
      avatar: "https://i.pravatar.cc/150?img=11",
      verified: true
    },
    description: "Volkswagen GTI review - Pure driving pleasure! 🏎️ #cars #volkswagen #review",
    tags: ["cars", "volkswagen", "review"],
    likes: 34567,
    comments: 234,
    shares: 123,
    isLiked: true,
    duration: 24
  },
  {
    id: "12",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WeAreGoingOnBullrun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=800&h=1200&fit=crop",
    user: {
      id: "user12",
      username: "gamer",
      avatar: "https://i.pravatar.cc/150?img=12",
      verified: false
    },
    description: "Bullrun rally excitement! 🏁 Fast cars everywhere #rally #racing #cars",
    tags: ["rally", "racing", "cars"],
    likes: 56789,
    comments: 456,
    shares: 234,
    isLiked: false,
    duration: 19
  },
  {
    id: "13",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/WhatCarCanYouGetForAGrand.mp4",
    thumbnail: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=1200&fit=crop",
    user: {
      id: "user13",
      username: "diymaster",
      avatar: "https://i.pravatar.cc/150?img=13",
      verified: true
    },
    description: "Best car for $1000? Let's find out! 💰 #cars #budget #review",
    tags: ["cars", "budget", "review"],
    likes: 23456,
    comments: 123,
    shares: 89,
    isLiked: true,
    duration: 35
  },
  {
    id: "14",
    url: "https://storage.googleapis.com/exoplayer-test-media-0/play.mp3",
    thumbnail: "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=800&h=1200&fit=crop",
    user: {
      id: "user14",
      username: "artist",
      avatar: "https://i.pravatar.cc/150?img=14",
      verified: false
    },
    description: "Listen to this amazing beat! 🎵 Turn up the volume #music #beats #audio",
    tags: ["music", "beats", "audio"],
    likes: 45678,
    comments: 345,
    shares: 167,
    isLiked: false,
    duration: 27
  },
  {
    id: "15",
    url: "https://www.w3schools.com/html/mov_bbb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=800&h=1200&fit=crop",
    user: {
      id: "user15",
      username: "motivator",
      avatar: "https://i.pravatar.cc/150?img=15",
      verified: true
    },
    description: "Big Buck Bunny strikes again! 🐰 Animated fun #animation #bunny #fun",
    tags: ["animation", "bunny", "fun"],
    likes: 89012,
    comments: 678,
    shares: 456,
    isLiked: true,
    duration: 14
  },
  {
    id: "16",
    url: "https://sample-videos.com/video321/mp4/720/big_buck_bunny_720p_1mb.mp4",
    thumbnail: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=800&h=1200&fit=crop",
    user: {
      id: "user16",
      username: "chef",
      avatar: "https://i.pravatar.cc/150?img=16",
      verified: true
    },
    description: "High quality animation test! 🎬 Crystal clear video #hd #video #quality",
    tags: ["hd", "video", "quality"],
    likes: 67890,
    comments: 890,
    shares: 345,
    isLiked: false,
    duration: 30
  },
  {
    id: "17",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",
    thumbnail: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=800&h=1200&fit=crop",
    user: {
      id: "user17",
      username: "dancer",
      avatar: "https://i.pravatar.cc/150?img=17",
      verified: false
    },
    description: "Classic Big Buck Bunny full version! 🎥 #classic #animation #movie",
    tags: ["classic", "animation", "movie"],
    likes: 45678,
    comments: 234,
    shares: 123,
    isLiked: true,
    duration: 21
  },
  {
    id: "18",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4",
    thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1200&fit=crop",
    user: {
      id: "user18",
      username: "photographer",
      avatar: "https://i.pravatar.cc/150?img=18",
      verified: true
    },
    description: "Elephants Dream masterpiece! 🐘 Open movie project #opensource #animation #art",
    tags: ["opensource", "animation", "art"],
    likes: 34567,
    comments: 345,
    shares: 89,
    isLiked: false,
    duration: 17
  },
  {
    id: "19",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1499952127939-9bbf5af6c51c?w=800&h=1200&fit=crop",
    user: {
      id: "user19",
      username: "lifehacker",
      avatar: "https://i.pravatar.cc/150?img=19",
      verified: false
    },
    description: "Blazing hot BBQ action! 🔥 Grilling perfection #bbq #food #grilling",
    tags: ["bbq", "food", "grilling"],
    likes: 78901,
    comments: 567,
    shares: 234,
    isLiked: true,
    duration: 26
  },
  {
    id: "20",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
    thumbnail: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=800&h=1200&fit=crop",
    user: {
      id: "user20",
      username: "yogi",
      avatar: "https://i.pravatar.cc/150?img=20",
      verified: true
    },
    description: "Escape to paradise beaches! 🏖️ Dream vacation spots #travel #beach #vacation",
    tags: ["travel", "beach", "vacation"],
    likes: 56789,
    comments: 456,
    shares: 178,
    isLiked: false,
    duration: 32
  },
  {
    id: "21",
    url: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerFun.mp4",
    thumbnail: "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=800&h=1200&fit=crop",
    user: {
      id: "user21",
      username: "naturelover",
      avatar: "https://i.pravatar.cc/150?img=21",
      verified: false
    },
    description: "Fun with Chromecast demo! 📱 Cast everything #chromecast #tech #streaming",
    tags: ["chromecast", "tech", "streaming"],
    likes: 89012,
    comments: 789,
    shares: 456,
    isLiked: true,
    duration: 23
  }
];