import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { GlobalContext } from "../../../context/GlobalContext";

function PortfolioForm(props) {
  const { URL, URL_IMAGE } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(PortfolioContext);
  const { input, setInput, setCurrentId, emptyInput, error, previewImage } =
    state;
  const { handleSubmit, handleChange, handleChangePicture } = handleFunction;
  const [categories, setCategories] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchCategories = async () => {
      const result_categories = await axios.get(`${URL}/categories`);
      setCategories(result_categories.data.data);
    };

    fetchCategories();

    if (id !== undefined) {
      const fetchData = async () => {
        const result = await axios.get(`${URL}/portfolios/${id}`);
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
    <div className="bg-white rounded shadow p-4 sm:ml-4 mt-4">
      <div className="w-full flex justify-between">
        <h2 className="text-lg mb-3">{id ? "Edit Skill" : "Add Skill"}</h2>
        <Link to={"/admin/portfolios"} className="mr-4">
          Back
        </Link>
      </div>
      <hr />
      <form className="w-full md:w-1/2 mx-auto" onSubmit={handleSubmit}>
        {error.message && (
          <div className="bg-red-300 p-3 rounded text-white mt-3">
            <strong>{error.message}</strong>
            <ul>{error.errors && <li>{error.errors.name}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.picture}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.description}</li>}</ul>
            <ul>{error.errors && <li>{error.errors.tags}</li>}</ul>
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
          <label htmlFor="id_category">Category</label>
          <select
            id="id_category"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Category"
            name="id_category"
            value={input.id_category}
            onChange={handleChange}
          >
            <option value="">-- Select Type --</option>
            {categories.map((category, index) => {
              return (
                <option key={index} value={category.id}>
                  {category.name}
                </option>
              );
            })}
          </select>
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
        {previewImage ? (
          <img src={previewImage} alt={input.name} className="w-full" />
        ) : (
          id && (
            <img
              src={`${URL_IMAGE}/uploads/${input.picture || "default.jpg"}`}
              alt={input.name}
              className="w-full"
            />
          )
        )}
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
          <label htmlFor="tags">Tags</label>
          <input
            id="tags"
            type="tags"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Tags"
            name="tags"
            value={input.tags}
            onChange={handleChange}
          />
        </div>
        <div className="my-4">
          <label htmlFor="link">Link</label>
          <input
            id="link"
            type="link"
            className="w-full mt-2 py-2 px-4 border rounded"
            placeholder="Link"
            name="link"
            value={input.link}
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

export default PortfolioForm;
