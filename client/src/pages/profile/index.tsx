import App from "@/components/app";
import Image from "next/image";
import AvatarIcon from "../../../public/avatar.svg";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Profile = () => {
  const { user, logout, loading } = useContext(AuthContext);
  const { push } = useRouter();

  useEffect(() => {
    const accessToken =
      typeof window !== "undefined" && localStorage.getItem("accessToken");
    if (!accessToken) {
      push("/auth");
    }
  }, [user, push, loading]);

  if (!user)
    return (
      <div className="h-[calc(100vh-162px)] flex items-center justify-center">
        Loading...
      </div>
    );

  return (
    <App>
      <div className="h-[calc(100vh-162px)] flex items-center justify-center flex-col gap-3 relative">
        <Image src={AvatarIcon} alt="home" height={100} width={100} />
        <h4 className="text-xl capitalize">{`${user?.first_name} ${user?.last_name}`}</h4>
        <span>{user?.email}</span>
        <button
          className="text-teal-500 hover:text-teal-600 absolute bottom-10"
          onClick={logout}
        >
          Logout
        </button>
      </div>
    </App>
  );
};

export default Profile;
