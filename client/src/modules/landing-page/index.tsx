import Post from "@/components/post";
import CreatePost from "@/components/create-post";
import { useContext } from "react";
import { PostContext } from "@/context/post.context";
import { AuthContext } from "@/context/auth.context";

const LandingPage = () => {
  const { posts } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  return (
    <>
      {user && <CreatePost />}
      <div className="bg-slate-100">
        {posts.map((post: any) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </>
  );
};

export default LandingPage;
