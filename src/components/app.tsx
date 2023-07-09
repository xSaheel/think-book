import Image from "next/image";
import HomeIcon from "../../public/home.svg";
import CreateIcon from "../../public/create.svg";
import UserIcon from "../../public/user.svg";
import { useRouter } from "next/router";
import { ReactNode } from "react";

const App = ({ children }: { children: ReactNode }) => {
  const { push } = useRouter();
  const handleHomeClick = () => {
    push("/");
  };
  const handleProfileClick = () => {
    push("/profile");
  };
  return (
    <div className="h-screen relative max-w-xl m-auto">
      <header className="px-0 py-8 text-center text-xl sticky top-0 bg-white shadow-sm">
        ThinkBook
      </header>
      {children}
      <div className="flex items-center justify-around p-5 sticky bottom-0 w-full bg-white shadow-lg">
        <Image
          src={HomeIcon}
          alt="home"
          height={30}
          width={30}
          onClick={handleHomeClick}
        />
        <Image src={CreateIcon} alt="home" height={30} width={30} />
        <Image
          src={UserIcon}
          alt="home"
          height={30}
          width={30}
          onClick={handleProfileClick}
        />
      </div>
    </div>
  );
};

export default App;
