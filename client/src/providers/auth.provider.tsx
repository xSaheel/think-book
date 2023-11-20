import { AuthContext, ICredentials, User } from "@/context/auth.context";
import { getUserData, loginUser, registerUser } from "@/modules/auth/api";
import { useRouter } from "next/router";
import React, { ReactNode, useEffect, useState } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [credentials, setCredentials] = useState<ICredentials | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const { push } = useRouter();

  const handleGetUserData = async (accessToken: string) => {
    const { data } = await getUserData(accessToken);
    setUser(data);
  };

  useEffect(() => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      handleGetUserData(accessToken);
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>;
    if (error) {
      timer = setTimeout(() => {
        setError(null);
      }, 5000);
    }
    return () => {
      clearTimeout(timer);
    };
  }, [error]);

  const updateUserData = (name: string, value: string) => {
    setCredentials(
      (prevUser) =>
        ({
          ...prevUser,
          [name]: value,
        } as ICredentials)
    );
  };

  const login = async () => {
    const data = await loginUser(credentials);
    if (data?.accessToken) {
      localStorage.setItem("accessToken", data?.accessToken);
      alert(data?.message);
      handleGetUserData(data?.accessToken as string);
      push("/");
    } else {
      setError(data?.message);
    }
    setCredentials(null);
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    setUser(null);
    push("/");
    alert("Logged out successfully!");
  };

  const register = async () => {
    const data = await registerUser(credentials);
    if (data.success === true) {
      alert(data?.message);
    } else {
      setError(data?.message);
    }
    setCredentials(null);
  };

  return (
    <AuthContext.Provider
      value={{ user, login, logout, register, updateUserData, loading, error }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
