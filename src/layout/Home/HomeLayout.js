import React from "react";
import { Navbar } from "./Index";

function HomeLayout(props) {
  return (
    <div className="font-poppins bg-center bg-cover h-screen bg-[url('./img/bg.jpg')] scroll-smooth">
      <div className="h-full bg-gradient-to-b from-transparent to-white flex flex-col">
        <Navbar />
        <div className="w-11/12 mx-auto">{props.children}</div>
      </div>
      <button
        aria-label="scroll back to top"
        onClick={() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        }}
        className="fixed bottom-0 right-0 mr-8 mb-8 bg-red-500 shadow p-2 rounded-full hover:bg-red-400"
      >
        <svg
          className="w-8 h-8 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 11l3-3m0 0l3 3m-3-3v8m0-13a9 9 0 110 18 9 9 0 010-18z"
          ></path>
        </svg>
      </button>
    </div>
  );
}

export default HomeLayout;
