import React from "react";
import Port1 from "../../img/1.png";
import Port2 from "../../img/2.png";
import Port3 from "../../img/3.png";
import Port4 from "../../img/4.png";
import Port5 from "../../img/5.png";
import Port6 from "../../img/6.png";
import Port7 from "../../img/7.png";
import Port8 from "../../img/8.png";
import Port9 from "../../img/9.png";
import Port10 from "../../img/10.png";
import Port11 from "../../img/11.png";
import Port12 from "../../img/12.png";

function Portfolio(props) {
  return (
    <div className="w-11/12 mx-auto">
      <h1
        className="text-2xl font-bold mt-12 relative text-gray-800
        after:content-['']
        after:ml-4
        after:inline-block
        after:border-b-2
        after:border-b-black
        after:w-28
        after:absolute
        after:top-4
        "
      >
        Portfolios
      </h1>

      <ul className="flex my-4">
        <li className="border-b border-b-black mr-2">
          <a
            onClick={(e) => {
              e.preventDefault();
              console.log(e.target.value);
            }}
            value="all"
            href="#all"
          >
            All
          </a>
        </li>
        <li className="mr-2">
          <a href="#all">UI / UX</a>
        </li>
        <li className="mr-2">
          <a href="#all">Laravel</a>
        </li>
        <li className="mr-2">
          <a href="#all">Mobile</a>
        </li>
        <li className="mr-2">
          <a href="#all">Java</a>
        </li>
      </ul>

      <div className="masonry sm:masonry-sm md:masonry-md mt-4">
        {[
          Port1,
          Port2,
          Port3,
          Port4,
          Port5,
          Port6,
          Port7,
          Port8,
          Port9,
          Port10,
          Port11,
          Port12,
        ].map((port, index) => {
          return (
            <div
              className="rounded bg-white shadow-md break-inside p-4 mb-4"
              key={index}
            >
              <img src={port} alt="" className="w-full" />
              <h2 className="mt-2 font-semibold">Nama Aplikasi</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat,
                at.
              </p>
              <div className="flex mt-4 justify-start">
                <div className="bg-red-400 p-2 text-white rounded-lg mx-1 text-xs">
                  HTML
                </div>
                <div className="bg-red-400 p-2 text-white rounded-lg mx-1 text-xs">
                  CSS
                </div>
                <div className="bg-red-400 p-2 text-white rounded-lg mx-1 text-xs">
                  javascript
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default Portfolio;
