import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { SkillContext } from "../../../context/SkillContext";
import { GlobalContext } from "../../../context/GlobalContext";

function SkillEdit(props) {
  const { URL } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(SkillContext);
  const { input, setInput, setCurrentId, emptyInput, error } = state;
  const { handleSubmit, handleChange, handleChangePicture } = handleFunction;

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const fetchData = async () => {
        const result = await axios.get(`${URL}/skills/${id}`);
        setInput(result.data.data);
        setCurrentId(id);
      };

      fetchData();
    }

    return () => {
      emptyInput();
      setCurrentId(-1);
    };
  }, []);

  return (
    <div className="bg-white rounded shadow p-4 ml-4 mt-4">
      <div className="w-full flex justify-between">
        <h2 className="text-lg mb-3">{id ? "Edit Skill" : "Add Skill"}</h2>
        <Link to={"/admin/skills"} className="mr-4">
          Back
        </Link>
      </div>
      <hr />
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
        {error.message && (
          <div className="bg-red-300 p-3 rounded text-white mt-3">
            <strong>{error.message}</strong>
            <ul>{error.errors && <li>{error.errors.name}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.picture}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.description}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.long_experience}</li>}</ul>
          </div>
        )}
        <div className="my-4">
          <label htmlFor="name">Name</label>
          <input
            id="name"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Name"
            name="name"
            value={input.name}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="picture">Picture</label>
          <input
            id="picture"
            type="file"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Picture"
            name="picture"
            onChange={handleChangePicture}
          />
        </div>
        <div className="my-4">
          <label htmlFor="description">Description</label>
          <textarea
            id="description"
            type="text"
            cols="30"
            rows="10"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Description"
            name="description"
            value={input.description}
            onChange={handleChange}
          ></textarea>
        </div>
        <div className="my-4">
          <label htmlFor="long_experience">Long Experience</label>
          <input
            id="long_experience"
            type="long_experience"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Long Experience"
            name="long_experience"
            value={input.long_experience}
            onChange={handleChange}
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

export default SkillEdit;
