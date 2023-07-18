import { AuthContext } from "@/context/auth.context";
import { useContext } from "react";

const Login = () => {
  const { login, user, updateUserData, error } = useContext(AuthContext);

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
      className="h-2/3 w-full border-gray-100 border flex flex-col justify-center items-center gap-3 px-5 py-3 rounded-bl-lg rounded-br-lg shadow-sm relative"
    >
      {error && <span className="text-rose-400 absolute top-5">{error}</span>}
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

export default Login;
