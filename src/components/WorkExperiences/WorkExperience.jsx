import React from "react";

const WorkExperience = ({id, name, description }) => {
  return (
    <div className="xl:w-1/4 md:w-1/2 p-4">
        <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img className="h-40 rounded w-full object-cover object-center mb-6" src="https://dummyimage.com/720x400" alt="content"/>
          <h3 className="tracking-widest text-blue-400 text-xs font-medium title-font">{id}</h3>
          <h2 className="text-lg text-white font-medium title-font mb-4">{name}</h2>
          <p className="leading-relaxed text-base">{description}</p>
        </div>
      </div>
  );
};

export default WorkExperience;
