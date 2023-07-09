import React from "react";
import Image from "next/image";
import AvatarIcon from "../../../public/avatar.svg";
import HeartIcon from "../../../public/heart.svg";
import CommentIcon from "../../../public/comment.svg";
import VerifiedIcon from "../../../public/verified.svg";
import { getDateDifference, getFormattedDate } from "@/modules/utils";

const Post = ({ text, user, likes, reply_count, time_posted }: any) => {
  const timePostedDate = getDateDifference(new Date(time_posted));
  return (
    <div className="px-3 py-5 border-b border-x-blue-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={AvatarIcon} alt="home" height={35} width={35} />
          <span className="text-lg font-medium">{user.name}</span>
          {user.is_verified && (
            <Image src={VerifiedIcon} alt="home" height={20} width={20} />
          )}
        </div>
        <span className="text-neutral-400">
          {getFormattedDate(timePostedDate)}
        </span>
      </div>
      <div className="pl-11 flex flex-col gap-2 pt-1">
        <p>{text}</p>
        <div className="flex items-center gap-2">
          <Image src={HeartIcon} alt="home" height={25} width={25} />
          <Image src={CommentIcon} alt="home" height={25} width={25} />
        </div>
        <div className="flex items-center">
          <span className="text-neutral-400">{`${reply_count} replies • ${likes} likes`}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
