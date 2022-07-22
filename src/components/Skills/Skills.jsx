import React, { useState, useEffect } from "react";
import Skill from "./Skill";
const Skills = () => {
  const url =
    "https://raw.githubusercontent.com/priyanshu938/Priyanshu-s-Portfolio-APIs/main/skills.json";
  //fetch data from url
  const [skills, setSkills] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setSkills(data));
  }, []);
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Skills/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
