import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import SignIn from "../pages/SignIn";
import SignUp from "../pages/SignUp";
import ForgotPassword from "../pages/ForgotPassword";
import NotFound from "../pages/NotFound";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <NotFound />,
    children: [
      { index: true, element: <Home /> },
      { path: "sign-in", element: <SignIn /> },
      {
        path: "sign-up",
        element: <SignUp />,
      },
      { path: "forgot-password", element: <ForgotPassword /> },
    ],
  },
]);

export default routes;
