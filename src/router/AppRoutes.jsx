import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import Root from "../layout/Root";
import SignIn from "../pages/SignIn";
import LogIn from "../pages/LogIn";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Home /> },
      { path: "sign-in", element: <SignIn /> },
      {
        path: "login",
        element: <LogIn />,
      },
    ],
  },
]);

export default routes;
