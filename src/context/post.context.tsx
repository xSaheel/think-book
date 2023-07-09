import { IContent } from "@/components/create-post";
import { createContext } from "react";
import { IUser } from "./auth.context";

export interface IPost {
  post: Post | null;
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

export const PostContext = createContext<IPost>({
  post: {
    id: 0,
    text: "",
    likes: 0,
    reply_count: 0,
    time_posted: "",
    media: "",
    user: null,
  },
  createPost: (content) => void 0,
});
