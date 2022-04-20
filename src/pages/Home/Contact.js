import React, { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

import Fb from "../../img/fb.svg";
import Whatsapp from "../../img/whatsapp.svg";
import Instagram from "../../img/instagram.svg";
import Github from "../../img/github.svg";
import Telegram from "../../img/telegram.svg";
import Email from "../../img/email.svg";

function Contact(props) {
  const [captcha, setCaptcha] = useState({
    verified: false,
    value: "",
  });

  const site_key = "6Lf8LogfAAAAADK8d6RdkvBq9nHK0w4Xo45cSalJ";

  const onChangeCaptcha = (value) => {
    setCaptcha({
      verified: true,
      value: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha.verified) {
      console.log(captcha);
    }
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1
        className="text-2xl font-bold mt-24 relative text-gray-800
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
        Contact
      </h1>
      <div className="bg-white mt-4 p-4 md:p-12 shadow rounded grid grid-cols-1 md:grid-cols-2">
        <div className="mr-12">
          <h2 className="font-semibold">Connect With Me</h2>
          <ul className="mt-4">
            <li className="mt-3 whitespace-nowrap">
              <img src={Fb} alt="facebook" className="w-6 h-6 inline-block" />
              <a
                href="www.facebook.com/dy.vect"
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2 text-sm md:text-base"
              >
                www.facebook.com/
                <span className="text-red-500">dy.vect</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Instagram}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href="www.facebook.com/dy.vect"
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.instagram.com/
                <span className="text-red-500">dyatnas</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Whatsapp}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href="www.facebook.com/dy.vect"
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.wa.me/
                <span className="text-red-500">6283822623170</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Github}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href="www.facebook.com/dy.vect"
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.github.com/
                <span className="text-red-500">syn-arch</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Telegram}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href="www.facebook.com/dy.vect"
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.t.me/
                <span className="text-red-500">dyatnas</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Email}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href="mailto:dyatna.id@gmail.com"
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                mailto:
                <span className="text-red-500">dyatna.id@gmail.com</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mt-4 md:mt-0">Contact Me</h2>
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="flex justify-between flex-col md:flex-row">
              <input
                type="text"
                className="w-full md:w-1/2 bg-gray-100 p-1 rounded-lg placeholder:text-sm md:mr-2"
                placeholder="Your name"
              />
              <input
                type="text"
                className="w-full md:w-1/2 bg-gray-100 p-1 mt-4 md:mt-0 rounded-lg placeholder:text-sm md:ml-2"
                placeholder="yourmail@mail.com"
              />
            </div>
            <textarea
              name=""
              id=""
              cols="30"
              rows="6"
              className="bg-gray-100  p-2 rounded-lg placeholder:text-sm w-full mt-4"
              placeholder="Your message"
            ></textarea>
            <ReCAPTCHA sitekey={site_key} onChange={onChangeCaptcha} />
            <button
              type="submit"
              className="bg-gray-700 hover:bg-gray-600 text-white block w-full rounded mt-3 py-1"
            >
              Send
            </button>
          </form>
        </div>
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default Contact;
