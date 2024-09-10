import { FaGoogle } from "react-icons/fa";
import CustomButton from "../components/UI/CustomButton";
import AuthHeader from "../components/auth/AuthHeader";
import { signUpInputFields } from "../constants";
import useNavigation from "../hooks/useNavigation";

const LogIn = () => {
  const { goToSignIn } = useNavigation();

  return (
    <section className="max-w-7xl mx-auto mt-10 px-4 flex flex-col items-center gap-20">
      <div className="text-center">
        <AuthHeader>
          Welcome. We're here to simplify your journey in entrepreneurship.
        </AuthHeader>
      </div>
      <div className="flex flex-col items-center w-full max-w-md gap-6 my-8">
        <CustomButton className="flex items-center justify-center bg-purple-600 text-white w-full py-3 px-4  hover:bg-purple-700">
          <FaGoogle className="mr-2" />
          Sign up with Google
        </CustomButton>
        <div className="relative w-full h-[1px] bg-neutral-800 my-8">
          <span className="absolute top-1/2 z-10 font-bold left-1/2 -translate-x-1/2 -translate-y-1/2 w-full text-center">
            Or, register with your email
          </span>
        </div>
        <form className="flex flex-col gap-4 w-full">
          {signUpInputFields.map((input) => (
            <div
              key={input.id}
              className="w-full flex flex-col items-start gap-1"
            >
              <label className="text-sm">
                {input.label} <span className="text-red-500 text-lg">*</span>
              </label>
              <input
                type={input.type}
                placeholder={input.placeholder}
                className="px-4 py-3 bg-gray-800 border border-gray-700  focus:outline-none focus:border-gray-400 text-white placeholder-gray-400 w-full"
              />
            </div>
          ))}
          <div className="my-2 text-sm text-neutral-500 text-center">
            I agree to be contacted by LOGO about this offer as per the LOGO
            <span className="cursor-pointer underline"> Privacy Policy</span>.
          </div>
          <CustomButton className="bg-purple-600 text-white w-full py-3 px-4  hover:bg-purple-700">
            Sign Up
          </CustomButton>
          <div className="text-center text-sm text-gray-500 mt-2">
            Already have an account?{" "}
            <span
              className="text-blue-500 cursor-pointer hover:text-blue-600"
              onClick={goToSignIn}
            >
              Sign in
            </span>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LogIn;
