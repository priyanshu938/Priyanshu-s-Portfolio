import React from "react";

const Skill = ({ skill }) => {
  return (
    <div className="p-2 lg:w-1/3 md:w-1/2 w-full   ">
      <div className="h-full cursor-pointer flex items-center border-gray-800 border p-4 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
        <img
          alt="team"
          className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4"
          src={skill.image}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div className="flex-grow">
          <h2 className="text-white title-font font-medium ">{skill.skill}</h2>
        </div>
      </div>
    </div>
  );
};

export default Skill;
