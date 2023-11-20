import { IContent } from "@/components/create-post";
import { Post, PostContext } from "@/context/post.context";
import { getAllPosts, likePost, publishPost } from "@/modules/posts/api";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const PostProvider = ({ children }: { children: ReactNode }) => {
  const [posts, setPosts] = useState<Post[]>([]);
  const { push } = useRouter();

  const createPost = async (content: IContent) => {
    const accessToken =
      typeof window !== "undefined" && localStorage.getItem("accessToken");
    if (!accessToken) {
      push("/auth");
      return;
    }

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
