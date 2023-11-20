import Post from "@/components/post";
import CreatePost from "@/components/create-post";
import { useEffect, useState } from "react";
import { getAllPosts } from "../posts/api";
import { ICredentials } from "@/context/auth.context";

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

const LandingPage = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  const updatePosts = (newPost: Post) => {
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
    <>
      <CreatePost updatePosts={updatePosts} />
      <div className="bg-slate-100">
        {posts.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
