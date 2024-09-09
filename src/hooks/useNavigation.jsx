import { useNavigate } from "react-router-dom";

const useNavigation = () => {
  const navigate = useNavigate();

  const goToHome = () => navigate("/");
  const goToSignUp = () => navigate("/sign-up");
  const goToSignIn = () => navigate("/sign-in");

  return { goToHome, goToSignUp, goToSignIn };
};

export default useNavigation;
