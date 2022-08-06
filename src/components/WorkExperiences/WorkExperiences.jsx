import React, { useState, useEffect } from "react";
import WorkExperience from "./WorkExperience";
import Url from "../ServerUrl";
import axios from "axios";
const WorkExperiences = () => {
  const url = `${Url}/works/getAllWorks`;

  const [works, setWorks] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setWorks(res.data.result);
    });
  }, []);
  return (
    <section id="works" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Work Experiences /&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {works.map((work, index) => (
            <WorkExperience key={work._id} id={index + 1} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperiences;
