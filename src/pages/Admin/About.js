import React from "react";

function About(props) {
  return (
    <div className="bg-white rounded shadow p-4 ml-4 mt-4">
      <h2 className="text-lg mb-3">About</h2>
      <hr />
      <form className="w-1/2 mx-auto">
        <div className="my-4">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Name"
          />
        </div>
        <div className="my-4">
          <label htmlFor="profession">Profession</label>
          <input
            id="profession"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Profession"
          />
        </div>
        <div className="my-4">
          <label htmlFor="phone">Phone</label>
          <input
            id="phone"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Phone"
          />
        </div>
        <div className="my-4">
          <label htmlFor="Email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Email"
          />
        </div>
        <div className="my-4">
          <label htmlFor="about">About</label>
          <textarea
            id="text"
            type="text"
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
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="CV"
          />
        </div>
        <div className="my-4">
          <label htmlFor="picture">Picture</label>
          <input
            id="picture"
            type="file"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Picture"
          />
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
