import React from "react";

const WorkExperience = ({work}) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 cursor-pointer bg-opacity-40 p-6 rounded-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-500 duration-300">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src={work.image} alt="content"/>
          <h3 className="tracking-widest text-blue-400 text-xl font-medium title-font">{work.id}</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">{work.name}</h2>
          <p className="leading-relaxed text-base">{work.description}</p>
        </div>
      </div>
  );
};

export default WorkExperience;
