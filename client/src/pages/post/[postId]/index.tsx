import App from "@/components/app";
import { GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import { getPostById, getRepliesByPostId } from "@/modules/posts/api";
import Post from "@/components/post";
import Reply from "@/components/post/reply";
import CreateReply from "@/components/create-reply";
import { IPost, IReply } from "@/modules/posts/interface";

export interface IPostPage {
  post: IPost;
  repliesData: IReply[];
}

const PostPage = ({ post, repliesData = [] }: IPostPage) => {
  const [replies, setReplies] = useState<IReply[]>(repliesData);
  const updateAllReplies = async (newReply: IReply) => {
    setReplies([newReply, ...replies]);
  };

  return (
    <App>
      <Post {...post} />
      {replies.map((reply: IReply) => (
        <Reply key={reply._id} {...reply} />
      ))}
      <CreateReply updateAllReplies={updateAllReplies} />
      <div className="w-full h-[65px]" />
    </App>
  );
};

export const getServerSideProps = async (
  context: GetServerSidePropsContext
) => {
  try {
    const { postId } = context.query;
    const { data: post = {} } = await getPostById(postId as string);
    const { data: repliesData = [] } = await getRepliesByPostId(
      postId as string
    );
    return {
      props: {
        post,
        repliesData,
      },
    };
  } catch (err) {
    return {
      notFound: true,
    };
  }
};

export default PostPage;
