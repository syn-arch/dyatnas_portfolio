import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { GlobalContext } from "../../context/GlobalContext";
import Cookies from "js-cookie";
import swal from "sweetalert";

function Profile(props) {
  const { URL, URL_IMAGE } = useContext(GlobalContext);
  const [previewImage, setPreviewImage] = useState("");
  const [input, setInput] = useState({
    name: "",
    email: "",
    picture: "",
    new_password: "",
    confirm_new_password: "",
  });
  const [error, setError] = useState({
    message: "",
    errors: [],
  });

  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
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
    data.append("email", input.email);
    data.append("picture", input.picture);
    data.append("new_password", input.new_password);
    data.append("confirm_new_password", input.confirm_new_password);
    axios
      .post(`${URL}/user?_method=PUT`, data, {
        headers: {
          Authorization: "Bearer" + Cookies.get("token"),
        },
      })
      .then((res) => {
        Cookies.set("user", JSON.stringify(res.data.data));
        setInput({
          ...input,
          name: res.data.data.name,
          email: res.data.data.email,
          picture: res.data.data.picture,
        });
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
    axios.get(`${URL}/user`).then((res) => {
      setInput({
        ...input,
        name: res.data.data.name,
        email: res.data.data.email,
        picture: res.data.data.picture,
      });
    });
  }, [URL, input]);

  return (
    <div className="bg-white rounded shadow p-4 sm:ml-4 mt-4">
      <h2 className="text-lg mb-3">My Profile</h2>
      <hr />
      <form className="w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
        {error.message && (
          <div className="bg-red-300 p-3 rounded text-white mt-3">
            <strong>{error.message}</strong>
            <ul>{error.errors && <li>{error.errors.name}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.email}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.new_password}</li>}</ul>
            <ul>
              {error.errors && <li>{error.errors.confirm_new_password}</li>}
            </ul>
          </div>
        )}
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
          <label htmlFor="new_password">New Password</label>
          <input
            id="new_password"
            type="password"
            name="new_password"
            value={input.new_password}
            onChange={handleChange}
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="New Password"
          />
        </div>
        <div className="my-4">
          <label htmlFor="confirm_new_password">Confirm New Password</label>
          <input
            id="confirm_new_password"
            type="password"
            name="confirm_new_password"
            value={input.confirm_new_password}
            onChange={handleChange}
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Confirm New Password"
          />
        </div>
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

export default Profile;
