import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";
import ReCAPTCHA from "react-google-recaptcha";
import swal from "sweetalert";

import Fb from "../../img/fb.svg";
import Whatsapp from "../../img/whatsapp.svg";
import Instagram from "../../img/instagram.svg";
import Github from "../../img/github.svg";
import Telegram from "../../img/telegram.svg";
import Email from "../../img/email.svg";

function Contact(props) {
  const { URL } = useContext(GlobalContext);
  const [loading, setLoading] = useState(true);

  const [input, setInput] = useState({
    name: "",
    email: "",
    body: "",
    verified: false,
  });
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
    setInput({ ...input, verified: true });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (captcha.verified) {
      setLoading(false);
      axios
        .post(`${URL}/mail/send`, input)
        .then(() => {
          swal("Success", "Message succesfully sended", "success");
          setInput({
            name: "",
            email: "",
            body: "",
            verified: false,
          });
          setLoading(true);
        })
        .catch((e) => {
          swal("Failed", e.response.data.message, "error");
        });
    } else {
      swal("Failed", "Verify the captcha", "error");
    }
  };

  const [contact, setContact] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/profile`).then((result) => {
      setContact(result.data.data);
    });
  }, [URL]);

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
                href={`https://fb.com/${contact.facebook}`}
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2 text-sm md:text-base"
              >
                www.facebook.com/
                <span className="text-red-500">{contact.facebook}</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Instagram}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href={`https://instagram.com/${contact.instagram}`}
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.instagram.com/
                <span className="text-red-500">{contact.instagram}</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Whatsapp}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href={`https://wa.me/${contact.phone}`}
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.wa.me/
                <span className="text-red-500">{contact.phone}</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Github}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href={`https://github.com/${contact.github}`}
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.github.com/
                <span className="text-red-500">{contact.github}</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Telegram}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href={`https://t.me/${contact.telegram}`}
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                www.t.me/
                <span className="text-red-500">{contact.telegram}</span>
              </a>
            </li>
            <li className="mt-3 whitespace-nowrap">
              <img
                src={Email}
                alt="facebook"
                className="w-6 h-6 inline-block"
              />
              <a
                href={`mailto:${contact.email}`}
                rel="noreferrer"
                target="_blank"
                className="inline-block ml-2  text-sm md:text-base"
              >
                mailto:
                <span className="text-red-500">{contact.email}</span>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h2 className="font-semibold mt-4 md:mt-0">Contact Me</h2>
          {!loading && (
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
          <form onSubmit={handleSubmit} className="mt-3">
            <div className="flex justify-between flex-col md:flex-row">
              <input
                type="text"
                className="w-full md:w-1/2 bg-gray-100 p-1 rounded-lg placeholder:text-sm md:mr-2"
                placeholder="Your name"
                name="name"
                value={input.name}
                onChange={(e) => {
                  setInput({ ...input, name: e.target.value });
                }}
              />
              <input
                name="email"
                type="text"
                value={input.email}
                onChange={(e) => {
                  setInput({ ...input, email: e.target.value });
                }}
                className="w-full md:w-1/2 bg-gray-100 p-1 mt-4 md:mt-0 rounded-lg placeholder:text-sm md:ml-2"
                placeholder="yourmail@mail.com"
              />
            </div>
            <textarea
              name="body"
              id=""
              cols="30"
              rows="6"
              value={input.body}
              onChange={(e) => {
                setInput({ ...input, body: e.target.value });
              }}
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
