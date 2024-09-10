import { Fragment } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Root = () => {
  const location = useLocation();

  const hideFooter = location.pathname === "/forgot-password";

  return (
    <Fragment>
      <Header />
      <main className="max-w-7xl mx-auto font-montserrat">
        <Outlet />
      </main>
      {!hideFooter && <Footer />}
    </Fragment>
  );
};

export default Root;
