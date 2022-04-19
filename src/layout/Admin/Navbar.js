import React, { useContext } from "react";
import Cookies from "js-cookie";
import { GlobalContext } from "../../context/GlobalContext";
import { Link, useNavigate } from "react-router-dom";

function Navbar(props) {
  const { URL_IMAGE, collapse, setCollapse } = useContext(GlobalContext);
  const user = JSON.parse(Cookies.get("user"));

  const handleClick = (e) => {
    e.preventDefault();
    setCollapse(!collapse);
  };
  const navigate = useNavigate();

  return (
    <nav className="min-h-16 bg-white rounded p-2 shadow sm:ml-4 items-center px-4">
      <div className="flex justify-between sm:justify-end flex-row">
        <button className="block sm:hidden" onClick={handleClick}>
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
        <div className="user whitespace-nowrap flex items-center">
          <span className="text-md mr-4">{user.name}</span>
          <img
            src={URL_IMAGE + "/uploads/" + user.picture}
            alt={user.name}
            className="w-12 h-12 rounded-full"
          />
        </div>
      </div>
      {collapse && (
        <div>
          <div className="mt-3 divide-y divide-solid flex flex-col text-center">
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/about"
            >
              About
            </Link>
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/skills"
            >
              Skills
            </Link>
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/experiences"
            >
              Experiences
            </Link>
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/categories"
            >
              Categories
            </Link>
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/portfolios"
            >
              Portfolios
            </Link>
            <Link
              onClick={(e) => {
                setCollapse(false);
              }}
              className="py-3"
              to="/admin/profile"
            >
              My Profile
            </Link>
            <button
              onClick={(e) => {
                e.preventDefault();
                Cookies.remove("token");
                Cookies.remove("user");
                navigate("/login");
              }}
              className="py-3"
            >
              Logout
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
