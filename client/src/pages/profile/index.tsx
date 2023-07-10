import App from "@/components/app";
import { AuthContext } from "@/context/auth.context";
import { useRouter } from "next/router";
import React, { useContext, useEffect } from "react";

const Profile = () => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();
  useEffect(() => {
    if (!user) {
      push("/auth");
    }
  }, [user, push]);
  return (
    <App>
      <div>Hello</div>
    </App>
  );
};

export default Profile;
