import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToSignUp = () => navigate("/sign-up");
  const goToSignIn = () => navigate("/sign-in");
  const goToForgotPassword = () => navigate("/forgot-password");

  return { goToHome, goToSignUp, goToSignIn, goToForgotPassword };
};

export default useNavigation;
