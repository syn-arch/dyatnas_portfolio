import axios from "axios";
import React, { useContext, useEffect } from "react";
import { PortfolioContext } from "../../../context/PortfolioContext";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";

function PortfolioIndex(props) {
  const { URL, URL_IMAGE } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(PortfolioContext);
  const { portfolios, setPortfolios, fetchStatus, setFetchStatus } = state;
  const { handleEdit, handleDelete } = handleFunction;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${URL}/portfolios`);
      setPortfolios(result.data.data);
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [URL, fetchStatus, setPortfolios, setFetchStatus]);

  return (
    <div className="relative overflow-x-auto mt-4 sm:ml-4">
      <Link
        to="/admin/portfolios/create"
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
            <th scope="col" className="px-6 py-3">
              Category
            </th>
            <th scope="col" className="px-6 py-3">
              Picture
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Tags
            </th>
            <th scope="col" className="px-6 py-3  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {portfolios.map((portfolio, index) => {
            return (
              <tr
                key={portfolio.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{index + 1}</td>
                <td className="px-6 py-4">{portfolio.name}</td>
                <td className="px-6 py-4">{portfolio.category.name}</td>
                <td className="px-6 py-4">
                  <img
                    src={`${URL_IMAGE}/uploads/${portfolio.picture}`}
                    alt=""
                    className="w-24 h-24 object-cover"
                  />
                </td>
                <td className="px-6 py-4">{portfolio.description}</td>
                <td className="px-6 py-4">{portfolio.tags}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    value={portfolio.id}
                    onClick={handleEdit}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    value={portfolio.id}
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

export default PortfolioIndex;
