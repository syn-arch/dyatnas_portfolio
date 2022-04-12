import React from "react";

function Login(props) {
  return (
    <div className="bg-gray-200 h-screen flex justify-center items-center">
      <div className="bg-white shadow  p-14 rounded-lg">
        <h1 className="text-center font-semibold">Login Page</h1>
        <p className="text-center text-sm">Login to start your session</p>
        <form className="mt-8">
          <div className="my-4">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="text"
              autoComplete="off"
              className="w-full mt-2 py-2 px-4 border rounded"
              placeholder="yourmail@example.com"
            />
          </div>
          <div className="my-4">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              className="w-full mt-2 py-2 px-4 border rounded"
              placeholder="password"
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
