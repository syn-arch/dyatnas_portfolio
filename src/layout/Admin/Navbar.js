import React from "react";

function Navbar(props) {
  return (
    <nav className="h-16 flex justify-end bg-white rounded p-2 shadow ml-4 items-center">
      <span className="text-md mr-4">Adiatna Sukmana</span>
      <img
        src="https://placekitten.com/300/300"
        alt=""
        className="w-12 h-12 rounded-full"
      />
    </nav>
  );
}

export default Navbar;
