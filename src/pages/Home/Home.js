import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Fb from "../../img/fb.svg";
import Github from "../../img/github.svg";
import Telegram from "../../img/telegram.svg";
import Email from "../../img/email.svg";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import Loading from "../../components/Loading";

function Home(props) {
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
        <div className="flex flex-col-reverse md:flex-row justify-around min-h-screen">
          <div className="mt-10 md:mt-40 text-center md:text-left">
            <p className="text-xl md:text-2xl">Hello World, My Name Is</p>
            <h1 className="font-bold text-3xl md:text-5xl mt-2 text-gray-800 uppercase">
              {profile.name}
            </h1>
            <p className="mt-2">
              I am a{" "}
              <span className="text-red-400 font-bold uppercase">
                {profile.profession}
              </span>
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
                href={`${URL_IMAGE}/uploads/${profile.cv}`}
                target="_blank"
                rel="noreferrer"
                download
                className="py-2 px-16 border-2 border-red-400 rounded-full text-gray-800 hover:bg-red-400 hover:text-white hover:border-red-400 transition-all duration-300 ease-in-out"
              >
                Resume
              </a>
            </div>
            <div className="my-12 w-3/4 mx-auto md:w-full flex justify-evenly md:justify-start md:items-end h-40">
              <a
                href={`https://fb.com/${profile.facebook}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Fb}
                  alt=""
                  className="w-8 h-8 object-cover mx-auto md:mx-2"
                />
              </a>
              <a
                href={`https://github.com/${profile.github}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Github}
                  alt=""
                  className="w-8 h-8 object-cover mx-auto md:mx-2"
                />
              </a>
              <a
                href={`https://t.me/${profile.telegram}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Telegram}
                  alt=""
                  className="w-8 h-8 object-cover mx-auto md:mx-2"
                />
              </a>
              <a
                href={`mailto:${profile.email}`}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  src={Email}
                  alt=""
                  className="w-12 h-8 object-cover mx-auto md:mx-2"
                />
              </a>
            </div>
          </div>
          <div className="mt-24 md:mt-40">
            <div className="rounded-full w-64 h-64 border-8 border-gray-200 mx-auto">
              <img
                src={`${URL_IMAGE}/uploads/${profile.picture || "default.jpg"}`}
                alt="me"
                className="rounded-full w-60 h-60 border-8 border-gray-300 object-cover"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Home;
