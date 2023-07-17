import { IContent } from "@/components/create-post";
import { createContext } from "react";
import { IUser } from "./auth.context";

export interface IPost {
  posts: Post[];
  createPost: (content: IContent) => void;
}

export interface Post {
  id: number;
  text: string;
  likes: number;
  reply_count: number;
  time_posted: string;
  user: IUser | null;
  media?: string;
}

const initialState: IPost = {
  posts: [],
  createPost: (content) => void 0,
};

export const PostContext = createContext<IPost>(initialState);
