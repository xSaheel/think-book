import { IContent } from "@/components/create-post";
import { Post, PostContext } from "@/context/post.context";
import { getAllPosts, publishPost } from "@/modules/posts/api";
import React, { ReactNode, useEffect, useState } from "react";

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const createPost = async (content: IContent) => {
    const accessToken = window && localStorage.getItem("accessToken");
    const { data: newPost } = await publishPost(content, accessToken as string);
    setPosts([newPost, ...posts]);
  };

  const fetchPosts = async () => {
    const { data: allPosts } = await getAllPosts();
    setPosts(allPosts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <PostContext.Provider value={{ posts, createPost }}>
      {children}
    </PostContext.Provider>
  );
};

export default PostProvider;
