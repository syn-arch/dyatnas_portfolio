import React, { useContext, useEffect, useState } from "react";
import { GlobalContext } from "../../context/GlobalContext";
import axios from "axios";

function Experience(props) {
  const { URL } = useContext(GlobalContext);
  const [educations, setEducations] = useState([]);
  const [experiences, setExperiences] = useState([]);
  const [achievements, setAchievements] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/experiences`).then((result) => {
      setEducations(
        result.data.data.filter((item) => item.type === "education")
      );
      setExperiences(
        result.data.data.filter((item) => item.type === "experience")
      );
      setAchievements(
        result.data.data.filter((item) => item.type === "achievement")
      );
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
        Educations
      </h1>
      <div className="bg-white shadow rounded p-4 mt-4">
        <ol className="relative border-l border-gray-200 ml-4">
          {educations.map((education, index) => {
            return (
              <li key={index} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {education.year}
                </time>
                <h2 className="font-semibold text-lg">{education.name}</h2>
                <p>{education.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <h1
        className="text-2xl font-bold mt-12 relative text-gray-800
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
        Experiences
      </h1>
      <div className="bg-white shadow rounded p-4 mt-4">
        <ol className="relative border-l border-gray-200 ml-4">
          {experiences.map((experience, index) => {
            return (
              <li key={index} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {experience.year}
                </time>
                <h2 className="font-semibold text-lg">{experience.name}</h2>
                <p>{experience.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <h1
        className="text-2xl font-bold mt-12 relative text-gray-800
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
        Achievements
      </h1>
      <div className="bg-white shadow rounded p-4 mt-4">
        <ol className="relative border-l border-gray-200 ml-4">
          {achievements.map((achievement, index) => {
            return (
              <li key={index} className="mb-10 ml-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white"></div>
                <time className="mb-1 text-sm font-normal leading-none text-gray-400">
                  {achievement.year}
                </time>
                <h2 className="font-semibold text-lg">{achievement.name}</h2>
                <p>{achievement.description}</p>
              </li>
            );
          })}
        </ol>
      </div>
      <div className="h-10"></div>
    </div>
  );
}

export default Experience;
