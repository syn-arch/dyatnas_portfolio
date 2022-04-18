import React, { useEffect, useState } from "react";
import axios from "axios";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

function Login(props) {
  const navigate = useNavigate();
  const [input, setInput] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState({
    message: "",
    errors: [],
  });

  useEffect(() => {
    if (Cookies.get("token")) {
      navigate("/admin/dashboard");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:8000/api/auth/login", input)
      .then((res) => {
        Cookies.set("token", res.data.access_token);
        Cookies.set("user", JSON.stringify(res.data.user));
        navigate("/admin/dashboard");
      })
      .catch((e) => {
        setError({
          message: e.response.data.message,
          errors: e.response.data.errors,
        });
      });
  };

  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white shadow p-8 md:p-14 rounded-lg">
        <h1 className="text-center font-semibold">Login Page</h1>
        <p className="text-center text-sm">Login to start your session</p>

        {error.message && (
          <div className="bg-red-300 p-3 rounded text-white mt-3">
            <strong>{error.message}</strong>
            <ul>
              {error.errors && <li>{error.errors.email}</li>}
              {error.errors && <li>{error.errors.password}</li>}
            </ul>
          </div>
        )}

        <form className="mt-8" onSubmit={handleSubmit}>
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              autoComplete="off"
              className="w-full mt-2 py-2 px-4 border rounded"
              placeholder="yourmail@example.com"
              value={input.email}
              onChange={(e) => setInput({ ...input, email: e.target.value })}
            />
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full mt-2 py-2 px-4 border rounded"
              placeholder="password"
              value={input.password}
              onChange={(e) => setInput({ ...input, password: e.target.value })}
            />
          </div>
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-400 text-center py-2 px-6 rounded block w-full text-white"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
