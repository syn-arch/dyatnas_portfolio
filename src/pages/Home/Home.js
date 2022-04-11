import React from "react";
import { Link } from "react-router-dom";
import Me from "../../img/me.jpg";

function Home(props) {
  return (
    <>
      <div className="flex flex-col-reverse md:flex-row justify-around">
        <div className="mt-10 md:mt-32 text-center md:text-left">
          <p className="text-xl md:text-2xl">Hello World, My Name Is</p>
          <h1 className="font-bold text-3xl md:text-5xl mt-2 text-gray-800">
            ADIATNA SUKMANA
          </h1>
          <p className="mt-2">
            I am a <span className="text-red-400 font-bold">WEB DEVELOPER</span>
          </p>
          <div className="mt-10">
            <Link
              to="/about"
              className="py-2 px-16 bg-red-500 rounded-full text-white hover:bg-red-400 transition-all duration-300 ease-in-out"
            >
              About Me
            </Link>
          </div>
          <div className="mt-10">
            <a
              href="/files/AdiatnaSukmana.pdf"
              target="_blank"
              download
              className="py-2 px-16 border-2 border-red-400 rounded-full text-gray-800 hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-300 ease-in-out"
            >
              Resume
            </a>
          </div>
        </div>
        <div className="mt-10 md:mt-32">
          <div className="rounded-full w-64 h-64 border-8 border-gray-200 mx-auto">
            <img
              src={Me}
              alt="me"
              className="rounded-full w-60 h-60 border-8 border-gray-300"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
