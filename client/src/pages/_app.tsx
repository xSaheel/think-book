import AuthProvider from "@/providers/auth.provider";
import NextNProgress from "nextjs-progressbar";
import "@/styles/globals.css";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AuthProvider>
      <NextNProgress />
      <Component {...pageProps} />
    </AuthProvider>
  );
}
