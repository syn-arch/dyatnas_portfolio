import axios from "axios";
import React, { useContext, useEffect } from "react";
import { SkillContext } from "../../../context/SkillContext";
import { GlobalContext } from "../../../context/GlobalContext";
import { Link } from "react-router-dom";

function SkillIndex(props) {
  const { URL } = useContext(GlobalContext);
  const { state, handleFunction } = useContext(SkillContext);
  const { skills, setSkills, fetchStatus, setFetchStatus } = state;
  const { handleEdit, handleDelete } = handleFunction;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(`${URL}/skills`);
      setSkills(result.data.data);
    };

    if (fetchStatus) {
      fetchData();
      setFetchStatus(false);
    }
  }, [URL, fetchStatus, setFetchStatus, setSkills]);

  return (
    <div className="relative overflow-x-auto mt-4 ml-4">
      <Link
        to="/admin/skills/create"
        className="bg-gray-400 text-white py-2 px-4 rounded mb-4 inline-block hover:bg-gray-500 float-right"
      >
        Create New Data
      </Link>
      <table className="w-full text-sm text-left shadow-md sm:rounded-lg">
        <thead className="text-xs text-white uppercase bg-gray-300">
          <tr>
            <th scope="col" className="px-6 py-3">
              Name
            </th>
            <th scope="col" className="px-6 py-3">
              Picture
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Long Experience
            </th>
            <th scope="col" className="px-6 py-3  text-center">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill) => {
            return (
              <tr
                key={skill.id}
                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
              >
                <td className="px-6 py-4">{skill.name}</td>
                <td className="px-6 py-4">{skill.picture}</td>
                <td className="px-6 py-4">{skill.description}</td>
                <td className="px-6 py-4">{skill.long_experience}</td>
                <td className="px-6 py-4 text-center">
                  <button
                    value={skill.id}
                    onClick={handleEdit}
                    className="font-medium text-blue-600 dark:text-blue-500 hover:underline mr-4"
                  >
                    Edit
                  </button>
                  <button
                    value={skill.id}
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

export default SkillIndex;
