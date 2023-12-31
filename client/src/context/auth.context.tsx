import { createContext } from "react";

export interface User {
  _id: string;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  profile_picture: string;
  is_verified: number;
  __v: number;
}

export type ICredentials = {
  first_name?: string;
  last_name?: string;
  email: string;
  password: string;
};

interface IAuth {
  user: User | null;
  login: () => void;
  logout: () => void;
  register: () => void;
  updateUserData: (name: string, value: string) => void;
  loading: boolean;
  error: string | null;
}

const initialState: IAuth = {
  user: null,
  login: () => void 0,
  logout: () => void 0,
  register: () => void 0,
  updateUserData: (name, value) => void 0,
  loading: false,
  error: null,
};

export const AuthContext = createContext<IAuth>(initialState);
