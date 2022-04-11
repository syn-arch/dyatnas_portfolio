import React from "react";
import { Navbar } from "./Index";

function HomeLayout(props) {
  return (
    <div className="font-poppins bg-center bg-cover h-screen bg-[url('./img/bg.jpg')]">
      <div className="h-full bg-gradient-to-b from-transparent to-white flex flex-col">
        <Navbar />
        <div className="w-11/12 mx-auto">{props.children}</div>
      </div>
    </div>
  );
}

export default HomeLayout;
