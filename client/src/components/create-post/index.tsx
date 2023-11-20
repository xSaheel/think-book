import React, { useContext, useState } from "react";
import Image from "next/image";
import AttachIcon from "../../../public/attach.svg";
import SendIcon from "../../../public/send.svg";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import { convertFileToBase64 } from "@/modules/utils";
import { publishPost } from "@/modules/posts/api";
import { Post } from "@/modules/landing-page";

export interface IContent {
  text?: string;
  media?: string;
}

export interface ICreatePost {
  updatePosts: (post: Post) => void;
}

const initialValue = {
  text: "",
  media: "",
};

const CreatePost = ({ updatePosts }: ICreatePost) => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();
  const [content, setContent] = useState<IContent>(initialValue);

  const createPost = async (content: IContent) => {
    const accessToken =
      typeof window !== "undefined" && localStorage.getItem("accessToken");
    if (!accessToken) {
      push("/auth");
      return;
    }

    const { data: newPost } = await publishPost(content, accessToken as string);
    updatePosts(newPost);
  };

  const handleSendClick = () => {
    createPost(content);
    setContent(initialValue);
  };

  const handleMediaUpload = async (event: any) => {
    const file = event.target.files[0];
    const base64MediaUrl = await convertFileToBase64(file);
    setContent({ ...content, media: base64MediaUrl });
  };

  const handleOnFocus = () => {
    if (!user) {
      push("/auth");
    }
  };

  const isDisabled = !content.media && !content.text;

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
          id="media"
          onChange={handleMediaUpload}
          className="hidden"
        />
        <label htmlFor="media">
          <Image src={AttachIcon} alt="home" height={20} width={20} />
        </label>
        <Image
          src={SendIcon}
          alt="home"
          height={25}
          width={25}
          onClick={handleSendClick}
          className={`${isDisabled && "opacity-10 pointer-events-none"}`}
        />
      </div>
    </div>
  );
};

export default CreatePost;
