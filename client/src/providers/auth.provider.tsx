import { AuthContext, IUser } from "@/context/auth.context";
import { getUserData, loginUser, registerUser } from "@/modules/auth/api";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  const { push } = useRouter();

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      const handleGetUserData = async () => {
        const { data } = await getUserData(accessToken);
        setUser(data);
        setLoading(false);
      };
      handleGetUserData();
    }
  }, []);

  const updateUserData = (name: string, value: string) => {
    setUser(
      (prevUser) =>
        ({
          ...prevUser,
          [name]: value,
        } as IUser)
    );
  };

  const login = async () => {
    const data = await loginUser(user);
    if (data?.accessToken) {
      localStorage.setItem("accessToken", data?.accessToken);
      alert(data?.message);
      const handleGetUserData = async () => {
        const res = await getUserData(data?.accessToken);
        setUser(res.data);
      };
      handleGetUserData();
      push("/");
    }
    setUser(null);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    push("/");
    alert("Logged out successfully!");
  };

  const register = async () => {
    const data = await registerUser(user);
    if (data) {
      alert(data?.message);
    }
    setUser(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateUserData, loading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
