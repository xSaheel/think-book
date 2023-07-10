import { AuthContext, IUser } from "@/context/auth.context";
import React, { ReactNode, useState } from "react";

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null);
  const login = () => console.log("logged in");
  const logout = () => console.log("logged out");
  const register = () => console.log("registered");

  return (
    <AuthContext.Provider value={{ user, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
