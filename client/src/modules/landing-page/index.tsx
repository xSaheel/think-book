import Post from "@/components/post";
import CreatePost from "@/components/create-post";
import { useState } from "react";
import { IPost } from "../posts/interface";

const LandingPage = ({ postsData = [] }: { postsData: IPost[] }) => {
  const [posts, setPosts] = useState<IPost[]>(postsData);
  const updatePosts = (newPost: IPost) => {
    setPosts([newPost, ...posts]);
  };

  return (
    <>
      <CreatePost updatePosts={updatePosts} />
      <div className="bg-slate-100">
        {posts.map((post: IPost) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
