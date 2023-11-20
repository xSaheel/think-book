import React, { useContext, useEffect, useState } from "react";
import Image from "next/image";
import AvatarIcon from "../../../public/avatar.svg";
import HeartIcon from "../../../public/heart.svg";
import FilledHeart from "../../../public/filled-heart.svg";
import CommentIcon from "../../../public/comment.svg";
import VerifiedIcon from "../../../public/verified.svg";
import { getDateDifference, getFormattedDate } from "@/modules/utils";
import { useRouter } from "next/router";
import { AuthContext } from "@/context/auth.context";
import { likePost } from "@/modules/posts/api";

const Post = ({
  text,
  user,
  likes = [],
  time_posted,
  media,
  replies,
  _id: postId,
}: any) => {
  const { user: currentUser } = useContext(AuthContext);
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likesCount, setLikesCount] = useState<number>(likes.length);
  const timePostedDate = getDateDifference(new Date(time_posted));
  const { first_name, last_name, is_verified } = user;
  const { push } = useRouter();

  useEffect(() => {
    if (currentUser?._id) {
      setIsLiked(likes.includes(currentUser?._id));
    }
  }, [currentUser?._id]);

  const handleLikePost = async (postId: string) => {
    const accessToken =
      typeof window !== "undefined" && localStorage.getItem("accessToken");
    if (!accessToken) {
      push("/auth");
      return;
    }
    await likePost(postId, accessToken as string);
    setLikesCount(isLiked ? likesCount - 1 : likesCount + 1);
    setIsLiked((liked: boolean) => !liked);
  };

  const handleReplyClick = () => {
    push(`/post/${postId}`);
  };

  return (
    <div className="px-3 py-5 border-b border-x-blue-300">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={AvatarIcon} alt="home" height={35} width={35} />
          <span className="text-lg font-medium">{`${first_name} ${last_name}`}</span>
          {is_verified && (
            <Image src={VerifiedIcon} alt="home" height={20} width={20} />
          )}
        </div>
        <span className="text-neutral-400">
          {getFormattedDate(timePostedDate)}
        </span>
      </div>
      <div className="pl-11 flex flex-col gap-2 pt-1">
        <p>{text}</p>
        {media && (
          <div className="h-[250px] w-full rounded-lg relative px-5 my-2">
            <Image
              src={media}
              alt="media"
              layout="fill"
              className="object-cover relative rounded-lg"
            />
          </div>
        )}
        <div className="flex items-center gap-2">
          <Image
            src={isLiked ? FilledHeart : HeartIcon}
            alt="like"
            height={25}
            width={25}
            onClick={() => handleLikePost(postId)}
          />
          <Image
            src={CommentIcon}
            alt="comment"
            height={25}
            width={25}
            onClick={handleReplyClick}
          />
        </div>
        <div className="flex items-center">
          <span className="text-neutral-400">{`${replies.length} replies • ${likesCount} likes`}</span>
        </div>
      </div>
    </div>
  );
};

export default Post;
