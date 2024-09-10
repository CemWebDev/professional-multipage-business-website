import CustomButton from "../components/UI/CustomButton";
import useNavigation from "../hooks/useNavigation";

const NotFound = () => {
  const { goToHome } = useNavigation();

  return (
    <section className="min-h-screen flex items-center flex-col gap-4 justify-center">
      <h1 className="text-9xl font-bold">404</h1>
      <p className="text-neutral-50">Page Not Found</p>
      <CustomButton className="bg-pink-600 py-3 text-xl px-10 hover:bg-pink-700" onClick={goToHome}>
        Go To Home
      </CustomButton>
    </section>
  );
};

export default NotFound;
