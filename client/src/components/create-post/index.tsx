import React, { useContext, useState } from "react";
import Image from "next/image";
import AttachIcon from "../../../public/attach.svg";
import SendIcon from "../../../public/send.svg";
import { PostContext } from "@/context/post.context";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";

export interface IContent {
  text: string;
  media?: string;
}

const initialValue = {
  text: "",
  media: "",
};

const CreatePost = () => {
  const { createPost } = useContext(PostContext);
  const { user } = useContext(AuthContext);
  const { push } = useRouter();
  const [content, setContent] = useState<IContent>(initialValue);
  const handleSendClick = () => {
    createPost(content);
    setContent(initialValue);
  };

  const handleMediaUpload = (event: any) => {
    const mediaUrl = URL.createObjectURL(event.target.files[0]);
    setContent({ ...content, media: mediaUrl });
  };

  const handleOnFocus = () => {
    if (!user) {
      push("/auth");
    }
  };

  return (
    <div className="w-full relative">
      <textarea
        placeholder="What's on your mind?"
        id="new-post"
        name="new-post"
        rows={4}
        className="box-border w-full focus:outline-none p-5 resize-none"
        value={content.text}
        onChange={(e) => setContent({ ...content, text: e.target.value })}
        onFocus={handleOnFocus}
      />
      {content.media && (
        <div className="h-[250px] w-4/5 rounded-lg relative px-5 mx-auto my-2">
          <Image
            src={content.media}
            alt="media"
            layout="fill"
            className="object-cover relative rounded-lg"
          />
        </div>
      )}
      <div className="flex justify-between items-center px-5 py-3">
        <input
          type="file"
          id="media-attach"
          onChange={handleMediaUpload}
          className="hidden"
        />
        <label htmlFor="media-attach">
          <Image src={AttachIcon} alt="home" height={20} width={20} />
        </label>
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
