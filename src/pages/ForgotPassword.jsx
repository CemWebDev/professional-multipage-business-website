import AuthHeader from "../components/auth/AuthHeader";
import CustomButton from "../components/UI/CustomButton";
import useNavigation from "../hooks/useNavigation";

const ForgotPassword = () => {
  const { goToSignIn } = useNavigation();
  return (
    <section className="min-h-screen flex items-center justify-center flex-col -mt-[76.8px] max-w-7xl">
      <AuthHeader subtitle="We'll email you instructions on how to reset it.">
        Forgot your password?
      </AuthHeader>
      <form className="flex flex-col items-center w-11/12 sm:w-full mx-auto max-w-md gap-6 my-9">
        <div className="w-full flex flex-col items-start gap-1">
          <label className="text-sm">Email</label>
          <input
            type="email"
            placeholder="you@company.com"
            className="px-4 py-3 bg-gray-800 border border-gray-700  focus:outline-none focus:border-gray-400 text-white placeholder-gray-400 w-full"
          />
        </div>
        <CustomButton className="bg-purple-600 w-full py-3 hover:bg-purple-700">
          Reset Password
        </CustomButton>
        <span
          className="text-center text-blue-500 mt-2 cursor-pointer font-semibold hover:text-blue-600"
          onClick={goToSignIn}
        >
          Cancel
        </span>
      </form>
    </section>
  );
};

export default ForgotPassword;  
