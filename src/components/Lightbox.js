import React, { useContext, useState } from "react";
import { GlobalContext } from "../context/GlobalContext";

function Lightbox({ picture }) {
  const { URL_IMAGE } = useContext(GlobalContext);
  const [isOpen, setIsOpen] = useState(false);
  const [image, setImage] = useState("");
  const handleClick = (e) => {
    setIsOpen(!isOpen);
    setImage(e.target.src);
  };

  return (
    <>
      {isOpen && (
        <div
          onClick={handleClick}
          className="fixed top-0 right-0 bottom-0 left-0 bg-[rgba(0,0,0,.8)] z-50 cursor-pointer flex justify-center items-center"
        >
          <img src={image} alt="" className="sm:h-[90%] mx-4 overflow-scroll" />
        </div>
      )}

      <div
        key={picture.id}
        className={`rounded p-2 mb-2 filter-item ${picture.category.name.replace(
          / /g,
          ""
        )} w-full md:w-1/2 lg:w-2/6`}
      >
        <div className="p-4 bg-white shadow-md">
          <img
            src={`${URL_IMAGE}/uploads/${picture.picture}`}
            alt={picture.name}
            className="w-full cursor-pointer"
            onClick={handleClick}
          />
          <h2 className="mt-2 font-semibold">{picture.name}</h2>
          <p>{picture.description}</p>
          <div className="flex mt-4 justify-start">
            {picture.tags.split(",").map((tag) => {
              return (
                <div
                  key={tag}
                  className="bg-red-400 p-2 text-white rounded-lg mx-1 text-xs"
                >
                  {tag}
                </div>
              );
            })}
          </div>
          <hr className="my-4" />
          <span>Link : </span>
          <a
            href={picture.link}
            rel="noreferrer"
            target="_blank"
            className="text-blue-500 hover:underline"
          >
            {picture.link}
          </a>
        </div>
      </div>
    </>
  );
}

export default Lightbox;
