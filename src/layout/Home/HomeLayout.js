import React from "react";
import { Navbar } from "./Index";

function HomeLayout(props) {
  return (
    <div className="font-poppins">
      <Navbar />
      <div className="w-11/12 mx-auto">{props.children}</div>
    </div>
  );
}

export default HomeLayout;
