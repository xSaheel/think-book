import React, { useContext, useState } from "react";
import Image from "next/image";
import SendIcon from "../../../public/send.svg";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import { IContent } from "../create-post";
import { publishReply } from "@/modules/posts/api";

const initialValue = {
  text: "",
  media: "",
};

export interface ICreateReply {
  updateAllReplies: (newReply: any) => void;
}

const CreateReply = ({ updateAllReplies }: ICreateReply) => {
  const { user } = useContext(AuthContext);
  const { push, query } = useRouter();
  const { postId } = query;
  const [content, setContent] = useState<IContent>(initialValue);

  const handleSendClick = async () => {
    const accessToken =
      typeof window !== "undefined" && localStorage.getItem("accessToken");
    const { data: newReply } = await publishReply(
      postId as string,
      content,
      accessToken as string
    );
    updateAllReplies(newReply);
    setContent(initialValue);
  };

  const handleOnFocus = () => {
    if (!user) {
      push("/auth");
    }
  };

  const isDisabled = !content.media && !content.text;

  return (
    <div className="w-full fixed bottom-[78px] flex justify-center items-center border-y border-x-blue-300 border-l-blue-300">
      <textarea
        placeholder="Post your reply"
        id="new-reply"
        name="new-reply"
        rows={1}
        className="box-border flex-1 focus:outline-none p-5 pr-0 resize-none"
        value={content.text}
        onChange={(e) => setContent({ ...content, text: e.target.value })}
        onFocus={handleOnFocus}
        autoFocus
      />
      <div className="flex gap-3 justify-end p-5 bg-white">
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

export default CreateReply;
