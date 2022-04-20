import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import parse from "html-react-parser";
import Loading from "../../components/Loading";

function About(props) {
  const { URL, URL_IMAGE } = useContext(GlobalContext);
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`${URL}/profile`)
      .then((res) => {
        setProfile(res.data.data);
      })
      .then(() => {
        setLoading(false);
      });
  }, [URL]);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col md:flex-row w-3/4 mx-auto">
          <div className="mt-24 md:mt-40">
            <div className="rounded-full w-64 h-64 border-8 border-gray-200 mx-auto">
              <img
                src={`${URL_IMAGE}/uploads/${profile.picture || "default.jpg"}`}
                alt="me"
                className="rounded-full w-60 h-60 border-8 border-gray-300 object-cover"
              />
            </div>
            <div className="text-center">
              <h1 className="font-bold text-gray-700 mt-4 uppercase">
                {profile.name}
              </h1>
              <span className="text-red-400">{profile.profession}</span>
            </div>
          </div>
          <div className="mt-10 md:mt-40 mx-auto relative">
            <div
              className="rounded-r-xl 
            rounded-b-xl
            rounded-tl-xl
            md:rounded-tl-none
            before:content-[''] 
            before:absolute 

            before:-mt-[84px]
            before:left-1/2
            before:-ml-[35px]
            before:border-t-[32px] 
            before:border-r-[32px] 
            before:border-l-[32px] 
            before:border-b-[32px]
            before:border-t-transparent
            before:border-r-transparent
            before:border-b-white
            before:border-l-transparent

            md:before:-ml-[75px] 
            md:before:left-[132px]
            md:before:-mt-5 
            md:before:border-t-[28px] 
            md:before:border-r-[28px] 
            md:before:border-l-[28px] 
            md:before:border-b-[28px]
            md:before:border-t-white
            md:before:border-r-white
            md:before:border-b-transparent
            md:before:border-l-transparent
            md:before:drop-shadow-[-8px_4px_5px_rgba(0,0,0,0.1)]
            bg-white shadow-lg p-5 md:ml-28 w-full md:w-10/12"
            >
              <p className="text-justify">{parse(profile.about || "")}</p>
            </div>
          </div>
          <div className="h-10"></div>
        </div>
      )}
    </>
  );
}

export default About;
