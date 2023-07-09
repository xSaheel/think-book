import React, { useContext, useState } from "react";
import Image from "next/image";
import AttachIcon from "../../../public/attach.svg";
import SendIcon from "../../../public/send.svg";
import { PostContext } from "@/context/post.context";

export interface IContent {
  text: string;
  media?: string;
}

const CreatePost = () => {
  const { createPost } = useContext(PostContext);
  const [content, setContent] = useState<IContent>({
    text: "",
    media: "",
  });
  const handleSendClick = () => {
    createPost(content);
  };
  return (
    <div className="w-full">
      <textarea
        placeholder="What's on your mind?"
        id="new-post"
        name="new-post"
        rows={4}
        className="box-border w-full focus:outline-none p-5 resize-none"
        onChange={(e) => setContent({ ...content, text: e.target.value })}
      />
      <div className="flex justify-between items-center px-5 py-3">
        <Image src={AttachIcon} alt="home" height={20} width={20} />
        <Image
          src={SendIcon}
          alt="home"
          height={25}
          width={25}
          onClick={handleSendClick}
        />
      </div>
    </div>
  );
};

export default CreatePost;
