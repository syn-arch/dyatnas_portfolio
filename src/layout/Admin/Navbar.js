import React from "react";
import Cookies from "js-cookie";

function Navbar(props) {
  return (
    <nav className="h-16 flex justify-end bg-white rounded p-2 shadow ml-4 items-center">
      <span className="text-md mr-4">
        {JSON.parse(Cookies.get("user")).name}
      </span>
      <img
        src={JSON.parse(Cookies.get("user")).picture}
        alt={JSON.parse(Cookies.get("user")).name}
        className="w-12 h-12 rounded-full"
      />
    </nav>
  );
}

export default Navbar;
