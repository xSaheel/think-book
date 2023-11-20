import { IContent } from "@/components/create-post";
import { createContext } from "react";
import { ICredentials } from "./auth.context";

export interface IPost {
  posts: Post[];
  createPost: (content: IContent) => void;
}

export interface Post {
  _id: string;
  id: number;
  text: string;
  likes: string[];
  reply_count: number;
  time_posted: string;
  user: ICredentials | null;
  media?: string;
}

const initialState: IPost = {
  posts: [],
  createPost: (content) => void 0,
};

export const PostContext = createContext<IPost>(initialState);
