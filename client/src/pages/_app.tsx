import AuthProvider from "@/providers/auth.provider";
import PostProvider from "@/providers/post.provider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <PostProvider>
        <Component {...pageProps} />
      </PostProvider>
    </AuthProvider>
  );
}
