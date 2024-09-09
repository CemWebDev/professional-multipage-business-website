import { Fragment } from "react";
import Header from "../components/sections/Header";
import { Outlet } from "react-router-dom";

const Root = () => {
  return (
    <Fragment>
      <Header />
      <main className="max-w-7xl mx-auto font-montserrat">
        <Outlet />
      </main>
    </Fragment>
  );
};

export default Root;
