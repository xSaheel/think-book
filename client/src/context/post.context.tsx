import { IContent } from "@/components/create-post";
import { createContext } from "react";
import { IUser } from "./auth.context";

export interface IPost {
  posts: Post[];
  createPost: (content: IContent) => void;
  handleLikePost: (postId: string) => void;
}

export interface Post {
  _id: string;
  id: number;
  text: string;
  likes: string[];
  reply_count: number;
  time_posted: string;
  user: IUser | null;
  media?: string;
}

const initialState: IPost = {
  posts: [],
  createPost: (content) => void 0,
  handleLikePost: (postId) => void 0,
};

export const PostContext = createContext<IPost>(initialState);
