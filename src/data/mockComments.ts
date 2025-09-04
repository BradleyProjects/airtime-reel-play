export interface Comment {
  id: string;
  userId: string;
  username: string;
  avatar: string;
  text: string;
  likes: number;
  timestamp: string;
  isLiked: boolean;
}

export const mockComments: Record<string, Comment[]> = {
  "1": [
    {
      id: "c1",
      userId: "user2",
      username: "dancequeen",
      avatar: "https://i.pravatar.cc/150?img=2",
      text: "This is so beautiful! 😍",
      likes: 45,
      timestamp: "2h ago",
      isLiked: false
    },
    {
      id: "c2",
      userId: "user3",
      username: "foodlover",
      avatar: "https://i.pravatar.cc/150?img=3",
      text: "Where is this place?",
      likes: 12,
      timestamp: "4h ago",
      isLiked: true
    }
  ],
  "2": [
    {
      id: "c3",
      userId: "user4",
      username: "travelbug",
      avatar: "https://i.pravatar.cc/150?img=4",
      text: "Love this dance! Teaching it to my friends",
      likes: 89,
      timestamp: "1h ago",
      isLiked: false
    }
  ],
  "3": [
    {
      id: "c4",
      userId: "user5",
      username: "techguru",
      avatar: "https://i.pravatar.cc/150?img=5",
      text: "Recipe please! 🍝",
      likes: 234,
      timestamp: "30m ago",
      isLiked: true
    },
    {
      id: "c5",
      userId: "user6",
      username: "fitnessguru",
      avatar: "https://i.pravatar.cc/150?img=6",
      text: "Looks delicious!",
      likes: 56,
      timestamp: "1h ago",
      isLiked: false
    }
  ]
};