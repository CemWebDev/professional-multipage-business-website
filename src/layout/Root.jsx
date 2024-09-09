import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/common/Header";
import Footer from "../components/common/Footer";

const Root = () => {
  return (
    <Fragment>
      <Header />
      <main className="max-w-7xl mx-auto font-montserrat">
        <Outlet />
      </main>
      <Footer />
    </Fragment>
  );
};

export default Root;
