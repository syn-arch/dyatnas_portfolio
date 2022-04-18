import axios from "axios";
import React, { useContext, useEffect } from "react";
import { CategoryContext } from "../../../context/CategoryContext";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";

function CategoryIndex(props) {
  const { URL } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(CategoryContext);
  const { categories, setCategories, fetchStatus, setFetchStatus } = state;
  const { handleEdit, handleDelete } = handleFunction;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${URL}/categories`);
      setCategories(result.data.data);
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [URL, fetchStatus, setCategories, setFetchStatus]);

  return (
    <div className="relative overflow-x-auto mt-4 ml-4">
      <Link
        to="/admin/categories/create"
        className="bg-gray-400 text-white py-2 px-4 rounded mb-4 inline-block hover:bg-gray-500 float-right"
      >
        Create New Data
      </Link>
      <table className="w-full text-sm text-left shadow-md sm:rounded-lg">
        <thead className="text-xs text-white uppercase bg-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              No
            </th>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {categories.map((category, index) => {
            return (
              <tr
                key={category.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{category.name}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    value={category.id}
                    onClick={handleEdit}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    value={category.id}
                    onClick={handleDelete}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default CategoryIndex;
