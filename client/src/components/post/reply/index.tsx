import Image from "next/image";
import AvatarIcon from "../../../../public/avatar.svg";
import VerifiedIcon from "../../../../public/verified.svg";
import { getDateDifference, getFormattedDate } from "@/modules/utils";

const Reply = ({ text, user, time_posted, media }: any) => {
  const timePostedDate = getDateDifference(new Date(time_posted));
  const { first_name, last_name, is_verified } = user;

  return (
    <div className="p-3 border-b border-x-blue-300 border-l-blue-300 border-l-8 bg-slate-100">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image src={AvatarIcon} alt="home" height={25} width={25} />
          <span className="text-md font-medium">{`${first_name} ${last_name}`}</span>
          {is_verified && (
            <Image src={VerifiedIcon} alt="home" height={20} width={20} />
          )}
        </div>
        <span className="text-neutral-400 text-xs">
          {getFormattedDate(timePostedDate)}
        </span>
      </div>
      <div className="pl-9 flex flex-col gap-2 pt-1">
        <p className="text-sm">{text}</p>
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
      </div>
    </div>
  );
};

export default Reply;
