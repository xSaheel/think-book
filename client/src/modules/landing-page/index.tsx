import Post from "@/components/post";
import CreatePost from "@/components/create-post";
import { useContext } from "react";
import { PostContext } from "@/context/post.context";

const LandingPage = () => {
  const { posts } = useContext(PostContext);
  return (
    <>
      <CreatePost />
      <div className="bg-slate-100">
        {posts.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
