import axios from "axios";
import React, { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { CategoryContext } from "../../../context/CategoryContext";
import { GlobalContext } from "../../../context/GlobalContext";

function CategoryForm(props) {
  const { URL } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(CategoryContext);
  const { input, setInput, setCurrentId, emptyInput } = state;
  const { handleSubmit, handleChange } = handleFunction;

  const { id } = useParams();

  useEffect(() => {
    if (id !== undefined) {
      const fetchData = async () => {
        const result = await axios.get(`${URL}/categories/${id}`);
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
        <h2 className="text-lg mb-3">
          {id ? "Edit Category" : "Add Category"}
        </h2>
        <Link to={"/admin/categories"} className="mr-4">
          Back
        </Link>
      </div>
      <hr />
      <form className="w-1/2 mx-auto" onSubmit={handleSubmit}>
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

export default CategoryForm;
