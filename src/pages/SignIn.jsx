import AuthHeader from "../components/auth/AuthHeader";
import CustomButton from "../components/UI/CustomButton";
import { signInInputFields } from "../constants";
import { FaGoogle } from "react-icons/fa";
import useNavigation from "../hooks/useNavigation";

const SignIn = () => {
  const { goToSignUp } = useNavigation();

  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 flex flex-col items-center gap-20">
      <div className="text-center">
        <AuthHeader>
          Welcome Back. We're here to simplify your journey in entrepreneurship.
        </AuthHeader>
      </div>
      <div className="flex flex-col items-center w-full max-w-md gap-6 my-8">
        <CustomButton className="flex items-center justify-center bg-purple-600 text-white w-full py-3 px-4  hover:bg-purple-700">
          <FaGoogle className="mr-2" />
          Sign in with Google
        </CustomButton>
        <div className="relative w-full h-[1px] bg-neutral-800 my-8">
          <span className="absolute top-1/2 z-10 font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            Or, sign in with email
          </span>
        </div>
        <form className="flex flex-col gap-4 w-full">
          {signInInputFields.map((input) => (
            <input
              key={input.id}
              type={input.type}
              placeholder={input.placeholder}
              className="px-4 py-3 bg-gray-800 border border-gray-700  focus:outline-none focus:border-gray-400 text-white placeholder-gray-400"
            />
          ))}
          <div className="flex items-center justify-between my-2 text-sm">
            <div className="flex items-center gap-1">
              <input type="checkbox" />
              <span className="text-neutral-300">Keep me signed in</span>
            </div>
            <div className="text-blue-500 cursor-pointer hover:text-blue-600">
              Forgot password?
            </div>
          </div>
          <CustomButton className="bg-purple-600 text-white w-full py-3 px-4  hover:bg-purple-700">
            Sign In
          </CustomButton>
          <div className="text-sm text-center">
            Don't you have an account?{" "}
            <span
              onClick={goToSignUp}
              className="text-blue-500 cursor-pointer hover:text-blue-600"
            >
              Sign up
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignIn;
