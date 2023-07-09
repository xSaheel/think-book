import { data } from "@/components/posts.mock.json";
import Post from "@/components/post";
import App from "@/components/app";
import { useContext } from "react";
import { AuthContext } from "@/context/auth.context";
import CreatePost from "@/components/create-post";

const LandingPage = () => {
  const { user } = useContext(AuthContext);
  console.log("user: ", user);
  const { posts } = data;
  return (
    <App>
      <CreatePost />
      <div className="bg-slate-100">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </App>
  );
};

export default LandingPage;
