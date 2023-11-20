import App from "@/components/app";
import { GetServerSidePropsContext } from "next";
import React, { useState } from "react";
import { getPostById, getRepliesByPostId } from "@/modules/posts/api";
import Post from "@/components/post";
import Reply from "@/components/post/reply";
import CreateReply from "@/components/create-reply";

const PostPage = ({ post, replies = [] }: { post: any; replies: any }) => {
  const [allReplies, setAllReplies] = useState<any[]>(replies);

  const updateAllReplies = async (newReply: any) => {
    setAllReplies([newReply, ...allReplies]);
  };

  return (
    <App>
      <Post {...post} />
      {allReplies.map((reply: any) => (
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
  const { postId } = context.query;
  const { data: post = {} } = await getPostById(postId as string);
  const { data: replies = [] } = await getRepliesByPostId(postId as string);
  return {
    props: {
      post,
      replies,
    },
  };
};

export default PostPage;
