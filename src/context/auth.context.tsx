import { createContext } from "react";

export interface IUser {
  user_id: string;
  name: string;
  profile_picture?: string;
  is_verified: boolean;
  email: string;
  //   password: string;
}

interface IAuth {
  user: IUser | null;
  login: () => void;
  logout: () => void;
  register: () => void;
}

export const AuthContext = createContext<IAuth>({
  user: {
    user_id: "",
    name: "",
    profile_picture: "",
    is_verified: false,
    email: "",
    // password: "",
  },
  login: () => void 0,
  logout: () => void 0,
  register: () => void 0,
});
