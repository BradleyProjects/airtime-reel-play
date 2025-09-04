export interface Video {
  id: string;
  url: string;
  thumbnail: string;
  user: {
    id: string;
    username: string;
    avatar: string;
    verified: boolean;
  };
  description: string;
  tags: string[];
  likes: number;
  comments: number;
  shares: number;
  isLiked: boolean;
  duration: number;
}

export interface AirtimePackage {
  id: string;
  amount: number;
  price: number;
  currency: string;
  popular?: boolean;
}