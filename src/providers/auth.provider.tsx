import { AuthContext, IUser } from "@/context/auth.context";
import React, { ReactNode, useState } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const login = () => console.log("logged in");
  const logout = () => console.log("logged out");
  const register = () => console.log("registered");

  const defaultState = {
    user,
    login,
    logout,
    register,
  };
  const [auth, setAuth] = useState(defaultState);

  return <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
