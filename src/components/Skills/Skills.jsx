import React from "react";
import Skill from "./Skill";

const Skills = () => {
  const skills = [
    { id: 1, skill: "HTML" },
    { id: 2, skill: "Javascript" },
    { id: 3, skill: "Css" },
    { id: 4, skill: "Java" },
    { id: 5, skill: "Python" },
  ];
  return (
    <section id="skills" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Skills/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        <div className="flex flex-wrap -m-2">
          {skills.map((skill) => (
            <Skill key={skill.id} skill={skill.skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
