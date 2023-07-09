import { IContent } from "@/components/create-post";
import { IPost, Post, PostContext } from "@/context/post.context";
import React, { ReactNode, useState } from "react";

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [newPost, setNewPost] = useState<Post | null>(null);
  const createPost = (content: IContent) => {
    // setNewPost({ ...newPost, post: { ...post, text, media } });
    console.log("post: ", content);
  };

  return (
    <PostContext.Provider value={{ post: newPost, createPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
