import Image from "next/image";
import HomeIcon from "../../public/home.svg";
import CreateIcon from "../../public/create.svg";
import UserIcon from "../../public/user.svg";
import { useRouter } from "next/router";
import { ReactNode, useContext } from "react";
import { AuthContext } from "@/context/auth.context";

const App = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const handleHeaderClick = () => {
    push("/");
  };
  return (
    <div className="h-screen relative max-w-xl m-auto flex flex-col min-h-screen">
      <header className="px-0 py-6 text-center text-xl sticky top-0 bg-white shadow-sm z-10 h-20">
        <p onClick={handleHeaderClick} className="w-min m-auto">
          ThinkBook
        </p>
      </header>
      <div className="flex-1 relative overflow-y-scroll">{children}</div>
      <BottomDrawer />
    </div>
  );
};

const BottomDrawer = () => {
  const { push } = useRouter();
  const { user } = useContext(AuthContext);
  const handleHomeClick = () => {
    push("/");
  };
  const handleProfileClick = () => {
    if (user) {
      push("/profile");
    } else {
      push("/auth");
    }
  };
  const handleCreatePost = () => {
    if (!user) {
      push("/auth");
    } else {
      push("/");
      if (typeof window !== "undefined") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };
  return (
    <div className="flex items-center justify-around p-5 sticky bottom-0 w-full bg-white shadow-inner h-20">
      <Image
        src={HomeIcon}
        alt="home"
        height={30}
        width={30}
        onClick={handleHomeClick}
        className="cursor-pointer"
      />
      <Image
        src={CreateIcon}
        alt="home"
        height={30}
        width={30}
        onClick={handleCreatePost}
        className="cursor-pointer"
      />
      <Image
        src={UserIcon}
        alt="home"
        height={30}
        width={30}
        onClick={handleProfileClick}
        className="cursor-pointer"
      />
    </div>
  );
};

export default App;
