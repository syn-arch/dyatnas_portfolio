import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

function Skill(props) {
  const { URL, URL_IMAGE } = useContext(GlobalContext);
  const [skills, setSkills] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/skills`).then((result) => {
      setSkills(result.data.data);
    });
  }, [URL]);
  return (
    <div className="w-11/12 mx-auto">
      <h1
        className="text-2xl font-bold mt-24 relative text-gray-800
        after:content-['']
        after:ml-4
        after:inline-block
        after:border-b-2
        after:border-b-black
        after:w-28
        after:absolute
        after:top-4
        "
      >
        Skills
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-8 gap-x-12 mt-4">
        {skills.map((skill, index) => {
          return (
            <div
              key={index}
              className="bg-white shadow-md rounded-md p-5 text-center"
            >
              <img
                src={`${URL_IMAGE}/uploads/${skill.picture}`}
                alt="html logo"
                className="object-fit h-20 mx-auto object-cover"
              />
              <p className="font-bold mt-4">{skill.name}</p>
              <p className="mt-3">{skill.description}</p>
            </div>
          );
        })}
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default Skill;
