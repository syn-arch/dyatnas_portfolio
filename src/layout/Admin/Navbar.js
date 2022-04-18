import React, { useContext } from "react";
import Cookies from "js-cookie";
import { GlobalContext } from "../../context/GlobalContext";

function Navbar(props) {
  const { URL_IMAGE } = useContext(GlobalContext);
  const user = JSON.parse(Cookies.get("user"));
  return (
    <nav className="h-16 flex justify-end bg-white rounded p-2 shadow ml-4 items-center">
      <span className="text-md mr-4">{user.name}</span>
      <img
        src={URL_IMAGE + "/uploads/" + user.picture}
        alt={user.name}
        className="w-12 h-12 rounded-full"
      />
    </nav>
  );
}

export default Navbar;
