import React from "react";

function Profile(props) {
  return (
    <div className="bg-white rounded shadow p-4 ml-4 mt-4">
      <h2 className="text-lg mb-3">My Profile</h2>
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
          <label htmlFor="Email">Email</label>
          <input
            id="email"
            type="email"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Email"
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

export default Profile;
