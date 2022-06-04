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
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
            My Skills
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
        <div className="flex flex-wrap -m-2">
          {skills.map((skill) => (
            <Skill key={skill.id}skill={skill.skill} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
