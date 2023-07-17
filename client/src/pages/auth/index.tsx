import App from "@/components/app";
import { AuthContext } from "@/context/auth.context";
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
            className={`w-1/2 py-2 px-4 text-center text-gray-700 font-semibold rounded-tl-lg border border-r-0 border-gray-300 cursor-pointer ${
              tabIndex === 0 ? "bg-gray-100" : "bg-gray-300"
            }`}
            onClick={() => setTabIndex(0)}
          >
            Login
          </span>
          <span
            className={`w-1/2 py-2 px-4 text-center bg-gray-200 text-gray-700 font-semibold rounded-tr-lg border border-gray-300 cursor-pointer ${
              tabIndex === 1 ? "bg-gray-100" : "bg-gray-300"
            }`}
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

const Login = () => {
  const { login, user, updateUserData } = useContext(AuthContext);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    updateUserData(name, value);
  };

  const handleLogin = (e: any) => {
    e.preventDefault();
    login();
  };

  return (
    <form
      onSubmit={handleLogin}
      className="h-2/3 w-full border-gray-100 border flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-bl-lg rounded-br-lg shadow-sm"
    >
      <input
        type="email"
        name="email"
        placeholder="email"
        value={user?.email}
        onChange={handleChange}
        className="border-gray-200 border px-3 py-2 rounded-md w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user?.password}
        onChange={handleChange}
        className="border-gray-200 border px-3 py-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-slate-700 text-white w-full rounded-md py-2 hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
      >
        Login
      </button>
    </form>
  );
};

const Register = () => {
  const { register, user, updateUserData } = useContext(AuthContext);

  const handleChange = (e: any) => {
    e.preventDefault();
    const { name, value } = e.target;
    updateUserData(name, value);
  };

  const handleRegister = (e: any) => {
    e.preventDefault();
    register();
  };

  return (
    <form
      onSubmit={handleRegister}
      className="h-2/3 w-full border-gray-100 border flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-bl-lg rounded-br-lg"
    >
      <input
        type="text"
        name="first_name"
        placeholder="first name"
        value={user?.first_name}
        onChange={handleChange}
        className="border-gray-200 border px-3 py-2 rounded-md w-full"
      />
      <input
        type="text"
        name="last_name"
        placeholder="last name"
        value={user?.last_name}
        onChange={handleChange}
        className="border-gray-200 border px-3 py-2 rounded-md w-full"
      />
      <input
        type="email"
        name="email"
        placeholder="email"
        value={user?.email}
        onChange={handleChange}
        className="border-gray-200 border px-3 py-2 rounded-md w-full"
      />
      <input
        type="password"
        name="password"
        placeholder="password"
        value={user?.password}
        onChange={handleChange}
        className="border-gray-200 border px-3 py-2 rounded-md w-full"
      />
      <button
        type="submit"
        className="bg-slate-700 text-white w-full rounded-md py-2 hover:bg-slate-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-600"
      >
        Register
      </button>
    </form>
  );
};

export default Auth;
