import { RouterProvider } from "react-router-dom";
import routes from "./router/AppRoutes";

const App = () => {
  return <RouterProvider router={routes} />;
};

export default App;
