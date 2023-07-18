import App from "@/components/app";
import { AuthContext } from "@/context/auth.context";
import Login from "@/modules/auth/login";
import Register from "@/modules/auth/register";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Auth = () => {
  const { user } = useContext(AuthContext);
  const { push } = useRouter();
  const [tabIndex, setTabIndex] = useState(0);
  // useEffect(() => {
  //   if (user) {
  //     push("/");
  //   }
  // }, [user, push]);
  return (
    <App>
      <div className="flex items-center relative top-10 w-4/5 m-auto">
        <div className="flex-grow border-t border-gray-300"></div>
        <span className="px-4 text-gray-500 text-lg">
          {tabIndex ? "Register" : "Login"}
        </span>
        <div className="flex-grow border-t border-gray-300"></div>
      </div>
      <div className="w-4/5 h-4/5 flex flex-col justify-center items-center m-auto">
        <div className="flex items-center justify-center w-full">
          <span
            className={`w-1/2 py-2 px-4 text-center font-semibold rounded-tl-lg border border-r-0 border-gray-300 cursor-pointer ${
              tabIndex === 0 ? "bg-gray-600" : "bg-gray-100"
            } ${tabIndex === 0 ? "text-gray-100" : "text-gray-700"}`}
            onClick={() => setTabIndex(0)}
          >
            Login
          </span>
          <span
            className={`w-1/2 py-2 px-4 text-center font-semibold rounded-tr-lg border border-gray-300 cursor-pointer ${
              tabIndex === 1 ? "bg-gray-600" : "bg-gray-100"
            } ${tabIndex === 1 ? "text-gray-100" : "text-gray-700"}`}
            onClick={() => setTabIndex(1)}
          >
            Register
          </span>
        </div>
        {tabIndex ? <Register /> : <Login />}
      </div>
    </App>
  );
};

export default Auth;
