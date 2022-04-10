import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="flex justify-between px-16 py-5">
        <Link to="/" className="font-bold text-2xl text-red-400">
          Dias
        </Link>
        <button
          onClick={() => setIsOpen(true)}
          className="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md md:hidden"
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            className="h-8 w-8"
            viewBox="0 0 1792 1792"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M1664 1344v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45zm0-512v128q0 26-19 45t-45 19h-1408q-26 0-45-19t-19-45v-128q0-26 19-45t45-19h1408q26 0 45 19t19 45z"></path>
          </svg>
        </button>
        <ul className="list-none md:flex hidden">
          <li className="px-4 transition-all hover:border-b-4 hover:border-b-red-300">
            <Link to="/" className="text-gray-800">
              Home
            </Link>
          </li>
          <li className="px-4 transition-all hover:border-b-4 hover:border-b-red-300">
            <Link to="/about" className="text-gray-800">
              About
            </Link>
          </li>
          <li className="px-4 transition-all hover:border-b-4 hover:border-b-red-300">
            <Link to="/skills" className="text-gray-800">
              Skills
            </Link>
          </li>
          <li className="px-4 transition-all hover:border-b-4 hover:border-b-red-300">
            <Link to="/experiences" className="text-gray-800">
              Experiences
            </Link>
          </li>
          <li className="px-4 transition-all hover:border-b-4 hover:border-b-red-300">
            <Link to="/portfolios" className="text-gray-800">
              Portfolios
            </Link>
          </li>
          <li className="px-4 transition-all hover:border-b-4 hover:border-b-red-300">
            <Link to="/contact" className="text-gray-800">
              Contact
            </Link>
          </li>
        </ul>
        {isOpen && (
          <div className="w-full h-screen fixed top-0 bottom-0 left-0 right-0 bg-white">
            <button
              onClick={() => setIsOpen(false)}
              className="text-gray-800 hover:text-gray-300 inline-flex items-center justify-center p-2 rounded-md float-right mr-16 mt-5"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="40"
                height="40"
                viewBox="0 0 30 30"
              >
                <path d="M 7 4 C 6.744125 4 6.4879687 4.0974687 6.2929688 4.2929688 L 4.2929688 6.2929688 C 3.9019687 6.6839688 3.9019687 7.3170313 4.2929688 7.7070312 L 11.585938 15 L 4.2929688 22.292969 C 3.9019687 22.683969 3.9019687 23.317031 4.2929688 23.707031 L 6.2929688 25.707031 C 6.6839688 26.098031 7.3170313 26.098031 7.7070312 25.707031 L 15 18.414062 L 22.292969 25.707031 C 22.682969 26.098031 23.317031 26.098031 23.707031 25.707031 L 25.707031 23.707031 C 26.098031 23.316031 26.098031 22.682969 25.707031 22.292969 L 18.414062 15 L 25.707031 7.7070312 C 26.098031 7.3170312 26.098031 6.6829688 25.707031 6.2929688 L 23.707031 4.2929688 C 23.316031 3.9019687 22.682969 3.9019687 22.292969 4.2929688 L 15 11.585938 L 7.7070312 4.2929688 C 7.5115312 4.0974687 7.255875 4 7 4 z"></path>
              </svg>
            </button>
            <div className="clear-both"></div>
            <ul className="flex flex-col justify-center items-center">
              <li className="border-b-2 border-b-red-300 w-1/2 text-center pb-5">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/"
                  className="text-center font-medium text-2xl text-gray-700"
                >
                  Home
                </Link>
              </li>
              <li className="border-b-2 border-b-red-300 w-1/2 text-center pb-5 mt-5">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/about"
                  className="text-center font-medium text-2xl text-gray-700"
                >
                  About
                </Link>
              </li>
              <li className="border-b-2 border-b-red-300 w-1/2 text-center pb-5 mt-5">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/skills"
                  className="text-center font-medium text-2xl text-gray-700"
                >
                  Skills
                </Link>
              </li>
              <li className="border-b-2 border-b-red-300 w-1/2 text-center pb-5 mt-5">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/experiences"
                  className="text-center font-medium text-2xl text-gray-700"
                >
                  Experiences
                </Link>
              </li>
              <li className="border-b-2 border-b-red-300 w-1/2 text-center pb-5 mt-5">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/protfolios"
                  className="text-center font-medium text-2xl text-gray-700"
                >
                  Portfolios
                </Link>
              </li>
              <li className="border-b-2 border-b-red-300 w-1/2 text-center pb-5 mt-5">
                <Link
                  onClick={() => setIsOpen(false)}
                  to="/contact"
                  className="text-center font-medium text-2xl text-gray-700"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </>
  );
}

export default Navbar;
