import { User } from "@/context/auth.context";

export interface IPost {
    _id: string;
    text: string;
    likes: string[];
    reply_count: number;
    replies: string[];
    time_posted: string;
    user: User;
    media?: string;
    __v: number;
}

export interface IReply {
    _id: string;
    text: string;
    time_posted: string;
    user: User;
    media?: string;
    __v: number;
}