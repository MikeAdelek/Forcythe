import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
const Layout = () => {
  return (
    <div>
      <Header />
      <main className="w-full mt-[6.3rem] md:mt-[6.8rem]">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;
