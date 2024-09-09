import { Link } from "react-router-dom";
import { IoCloseCircle, IoMenu } from "react-icons/io5";
import CustomButton from "../UI/CustomButton";
import { useState } from "react";
import useNavigation from "../../hooks/useNavigation";

const Header = () => {
  const [dropdown, setDropdown] = useState(false);

  const { goToSignIn, goToSignUp } = useNavigation();

  const toggleDropdown = () => {
    setDropdown((prevState) => !prevState);
  };

  return (
    <header className="animate-fadeIn font-montserrat sticky top-0 z-50 backdrop-blur-lg border-b border-neutral-600/80">
      <nav className="relative mx-auto px-8 py-4 flex items-center justify-between max-w-[1100px] xl:max-w-full">
        <Link to="/" className="font-bold tracking-wider uppercase text-3xl">
          Logo
        </Link>
        <div className="hidden md:flex items-center gap-4">
          <CustomButton
            onClick={goToSignIn}
            className="bg-transparent text-purple-500 py-2 px-6 hover:text-white text-lg"
          >
            Sign In
          </CustomButton>
          <CustomButton
            onClick={goToSignUp}
            className="text-white bg-gradient-to-r from-fuchsia-600 to-purple-500 py-2 px-6 text-lg"
          >
            Sign up
          </CustomButton>
        </div>
        <CustomButton
          className=" w-12 h-12 flex items-center justify-center text-3xl border md:hidden"
          onClick={toggleDropdown}
        >
          {dropdown ? <IoCloseCircle /> : <IoMenu />}
        </CustomButton>
      </nav>
      {dropdown && (
        <div className="absolute z-20 lg:hidden inset-x-0 top-full mt-4 bg-neutral-800 py-2 w-[90%] mx-auto">
          <div className="flex items-center flex-col gap-5 w-[90%] mx-auto">
            <CustomButton
              onClick={goToSignIn}
              className="bg-transparent text-purple-500 py-2 px-6 hover:text-white text-lg w-full"
            >
              Sign In
            </CustomButton>
            <CustomButton
              onClick={goToSignUp}
              className="text-white bg-gradient-to-r from-purple-800 to-fuchsia-900 py-2 px-6 text-lg w-full"
            >
              Sign up
            </CustomButton>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
