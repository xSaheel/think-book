import { data } from "@/components/posts.mock.json";
import Post from "@/components/post";
import App from "@/components/app";

const LandingPage = () => {
  const { posts } = data;
  return (
    <App>
      <div className="bg-slate-100">
        {posts.map((post) => (
          <Post key={post.id} {...post} />
        ))}
      </div>
    </App>
  );
};

export default LandingPage;
