import App from "@/components/app";
import LandingPage from "@/modules/landing-page";
import { getAllPosts } from "@/modules/posts/api";
import { IPost } from "@/modules/posts/interface";
import { GetServerSidePropsContext } from "next";

const Home = ({ postsData = [] }: { postsData: IPost[] }) => {
  return (
    <App>
      <LandingPage postsData={postsData} />
    </App>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { data: postsData = [] } = await getAllPosts();
    return {
      props: {
        postsData,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default Home;
