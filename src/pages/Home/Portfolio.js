import React, { useEffect, useState } from "react";
import Isotope from "isotope-layout";
import OnImagesLoaded from "react-on-images-loaded";
import Port1 from "../../img/1.png";
import Port2 from "../../img/2.png";
import Port3 from "../../img/3.png";
import Port4 from "../../img/4.png";
import Port5 from "../../img/5.png";
import Port6 from "../../img/6.png";

function Portfolio(props) {
  const isotope = React.useRef();
  const [filterKey, setFilterKey] = useState("*");
  const [imagesLoaded, setImagesLoaded] = useState(false);

  useEffect(() => {
    if (imagesLoaded) {
      isotope.current = new Isotope(".filter-container", {
        itemSelector: ".filter-item",
        percentPosition: true,
        layoutMode: "masonry",
      });

      return () => isotope.current.destroy();
    }
  }, [imagesLoaded]);

  useEffect(() => {
    if (imagesLoaded) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey, imagesLoaded]);

  const handleFilterKeyChange = (key) => () => setFilterKey(key);

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
        <li
          className={`mr-2 ${filterKey === "*" && "border-b border-b-black"}`}
        >
          <button onClick={handleFilterKeyChange("*")}>All</button>
        </li>
        <li
          className={`mr-2 ${
            filterKey === "ui-ux" && "border-b border-b-black"
          }`}
        >
          <button onClick={handleFilterKeyChange("ui-ux")}>UI / UX</button>
        </li>
        <li
          className={`mr-2 ${
            filterKey === "laravel" && "border-b border-b-black"
          }`}
        >
          <button onClick={handleFilterKeyChange("laravel")}>Laravel</button>
        </li>
        <li
          className={`mr-2 ${
            filterKey === "mobile" && "border-b border-b-black"
          }`}
        >
          <button onClick={handleFilterKeyChange("mobile")}>Mobile</button>
        </li>
        <li
          className={`mr-2 ${
            filterKey === "java" && "border-b border-b-black"
          }`}
        >
          <button onClick={handleFilterKeyChange("java")}>Java</button>
        </li>
      </ul>

      {!imagesLoaded && (
        <div className="h-40 flex justify-center items-center">
          <svg
            role="status"
            className="mr-2 w-16 h-16 text-gray-200 animate-spin dark:text-gray-600 fill-red-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
        </div>
      )}

      <OnImagesLoaded onLoaded={() => setImagesLoaded(true)} timeout={1000}>
        <div
          className="mt-4 filter-container"
          style={{ opacity: imagesLoaded ? 1 : 0 }}
        >
          <div className="rounded p-2 mb-2 filter-item laravel w-full md:w-1/2 lg:w-2/6">
            <div className="p-4 bg-white shadow-md">
              <img src={Port1} alt="" className="w-full" />
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
          </div>
          <div className="rounded p-2 mb-2 filter-item break-inside mobile w-full md:w-1/2 lg:w-2/6">
            <div className="p-4 bg-white shadow-md">
              <img src={Port2} alt="" className="w-full" />
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
          </div>
          <div className="rounded p-2 mb-2 filter-item break-inside java w-full md:w-1/2 lg:w-2/6">
            <div className="p-4 bg-white shadow-md">
              <img src={Port3} alt="" className="w-full" />
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
          </div>
          <div className="rounded p-2 mb-2 filter-item break-inside java w-full md:w-1/2 lg:w-2/6">
            <div className="p-4 bg-white shadow-md">
              <img src={Port4} alt="" className="w-full" />
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
          </div>
          <div className="rounded p-2 mb-2 filter-item break-inside laravel w-full md:w-1/2 lg:w-2/6">
            <div className="p-4 bg-white shadow-md">
              <img src={Port5} alt="" className="w-full" />
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
          </div>
          <div className="rounded p-2 mb-2 filter-item break-inside ui-ux w-full md:w-1/2 lg:w-2/6">
            <div className="p-4 bg-white shadow-md">
              <img src={Port6} alt="" className="w-full" />
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
          </div>
        </div>
      </OnImagesLoaded>

      <div className="h-10"></div>
    </div>
  );
}

export default Portfolio;
