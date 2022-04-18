import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import Cookies from "js-cookie";
import swal from "sweetalert";

function About(props) {
  const { URL, URL_IMAGE } = useContext(GlobalContext);
  const [previewImage, setPreviewImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    profession: "",
    phone: "",
    email: "",
    about: "",
    cv: "",
    picture: "",
    facebook: "",
    instagram: "",
    github: "",
    telegram: "",
    linkedin: "",
  });
  const [error, setError] = useState({
    message: "",
    errors: [],
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const handleChangeCv = (e) => {
    setInput({ ...input, cv: e.target.files[0] });
  };

  const handleChangePicture = (e) => {
    setInput({
      ...input,
      picture: e.target.files[0],
    });
    setPreviewImage(window.URL.createObjectURL(e.target.files[0]));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", input.name);
    data.append("profession", input.profession);
    data.append("email", input.email);
    data.append("phone", input.phone);
    data.append("about", input.about);
    data.append("cv", input.cv);
    data.append("picture", input.picture);
    data.append("facebook", input.facebook);
    data.append("instagram", input.instagram);
    data.append("github", input.github);
    data.append("telegram", input.telegram);
    data.append("linkedin", input.linkedin);
    axios
      .post(`${URL}/profile?_method=PUT`, data, {
        headers: {
          Authorization: "Bearer" + Cookies.get("token"),
        },
      })
      .then((res) => {
        setInput(res.data.data);
        swal("Success", "data successfully updated", "success");
      })
      .catch((e) => {
        setError({
          message: e.response.data.message,
          errors: e.response.data.errors,
        });
        swal("Failed", e.response.data.message, "error");
      });
  };

  useEffect(() => {
    axios.get(`${URL}/profile`).then((res) => {
      setInput(res.data.data);
    });
  }, [URL]);

  return (
    <div className="bg-white rounded shadow p-4 sm:ml-4 mt-4">
      <h2 className="text-lg mb-3">About</h2>
      <hr />
      <form className="w-full" onSubmit={handleSubmit}>
        {error.message && (
          <div className="bg-red-300 p-3 rounded text-white mt-3">
            <strong>{error.message}</strong>
            <ul>{error.errors && <li>{error.errors.name}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.profession}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.phone}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.email}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.about}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.cv}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.picture}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.facebook}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.instagram}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.github}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.telegram}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.linkedin}</li>}</ul>
          </div>
        )}

        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 md:mr-2">
            <div className="my-4">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                type="text"
                name="name"
                value={input.name}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Name"
              />
            </div>
            <div className="my-4">
              <label htmlFor="profession">Profession</label>
              <input
                id="profession"
                type="text"
                name="profession"
                value={input.profession}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Profession"
              />
            </div>
            <div className="my-4">
              <label htmlFor="phone">Phone</label>
              <input
                id="phone"
                type="text"
                name="phone"
                value={input.phone}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Phone"
              />
            </div>
            <div className="my-4">
              <label htmlFor="Email">Email</label>
              <input
                id="email"
                type="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Email"
              />
            </div>
            <div className="my-4">
              <label htmlFor="facebook">Facebook</label>
              <input
                id="facebook"
                type="facebook"
                name="facebook"
                value={input.facebook}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Facebook"
              />
            </div>
            <div className="my-4">
              <label htmlFor="instagram">Instagram</label>
              <input
                id="instagram"
                type="instagram"
                name="instagram"
                value={input.instagram}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Instagram"
              />
            </div>
            <div className="my-4">
              <label htmlFor="github">Github</label>
              <input
                id="github"
                type="github"
                name="github"
                value={input.github}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Github"
              />
            </div>
            <div className="my-4">
              <label htmlFor="telegram">Telegram</label>
              <input
                id="telegram"
                type="telegram"
                name="telegram"
                value={input.telegram}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Telegram"
              />
            </div>
            <div className="my-4">
              <label htmlFor="facebook">Linkedin</label>
              <input
                id="linkedin"
                type="linkedin"
                name="linkedin"
                value={input.linkedin}
                onChange={handleChange}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Linkedin"
              />
            </div>
          </div>

          <div className="w-full md:w-1/2 md:ml-2">
            <div className="my-4">
              <label htmlFor="about">About</label>
              <textarea
                id="text"
                type="text"
                name="about"
                onChange={handleChange}
                value={input.about}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="About"
                cols="30"
                rows="10"
              ></textarea>
            </div>
            <div className="my-4">
              <label htmlFor="cv">CV</label>
              <input
                id="cv"
                type="file"
                name="cv"
                className="w-full mt-2 py-2 px-4 border rounded"
                onChange={handleChangeCv}
                placeholder="CV"
              />
            </div>
            <a
              download
              href={`${URL_IMAGE}/uploads/${input.cv}`}
              className="text-blue-600 hover:underline"
            >
              Download CV
            </a>
            <div className="my-4">
              <label htmlFor="picture">Picture</label>
              <input
                id="picture"
                type="file"
                name="picture"
                onChange={handleChangePicture}
                className="w-full mt-2 py-2 px-4 border rounded"
                placeholder="Picture"
              />
            </div>
            {previewImage ? (
              <img src={previewImage} alt={input.name} className="w-full" />
            ) : (
              <img
                src={`${URL_IMAGE}/uploads/${input.picture || "default.jpg"}`}
                alt={input.name}
                className="w-full"
              />
            )}
          </div>
        </div>

        <div className="my-4">
          <button
            type="submit"
            className="bg-gray-600 block w-full rounded py-2 text-white hover:bg-gray-500"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
}

export default About;
