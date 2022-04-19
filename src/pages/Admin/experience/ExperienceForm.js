import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { ExperienceContext } from "../../../context/ExperienceContext";
import { GlobalContext } from "../../../context/GlobalContext";

function ExperienceForm(props) {
  const { URL } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(ExperienceContext);
  const { input, setInput, setCurrentId, emptyInput, error } = state;
  const { handleSubmit, handleChange } = handleFunction;

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const fetchData = () => {
        axios.get(`${URL}/experiences/${id}`).then((result) => {
          setInput(result.data.data);
          setCurrentId(id);
        });
      };

      fetchData();
    }

    return () => {
      emptyInput();
      setCurrentId(-1);
    };
  }, []);

  return (
    <div className="bg-white rounded shadow p-4 sm:ml-4 mt-4">
      <div className="w-full flex justify-between">
        <h2 className="text-lg mb-3">
          {id ? "Edit Experience" : "Add Experience"}
        </h2>
        <Link to={"/admin/experiences"} className="mr-4">
          Back
        </Link>
      </div>
      <hr />
      <form className="w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
        {error.message && (
          <div className="bg-red-300 p-3 rounded text-white mt-3">
            <strong>{error.message}</strong>
            <ul>{error.errors && <li>{error.errors.name}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.description}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.year}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.order}</li>}</ul>
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
          <label htmlFor="description">Description</label>
          <textarea
            rows="5"
            id="description"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Description"
            name="description"
            value={input.description}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="year">Year</label>
          <input
            id="year"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Year"
            name="year"
            value={input.year}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="order">Order</label>
          <input
            id="order"
            type="number"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Order"
            name="order"
            value={input.order}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="type">Type</label>
          <select
            id="type"
            type="text"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="type"
            name="type"
            value={input.type}
            onChange={handleChange}
          >
            <option value="">-- Select Type --</option>
            <option value="experience">experience</option>
            <option value="education">education</option>
            <option value="achievement">achievement</option>
          </select>
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

export default ExperienceForm;
