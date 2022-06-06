import React from "react";
import WorkExperience from "./WorkExperience";
import works from "./worksAPI"
const WorkExperiences = () => {

  return (
    <section id="works" className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 sm:py-10 mx-auto">
        <div className="flex flex-wrap items-center w-full mb-10">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
              &lt;My Work Experience/&gt;
            </h1>
            <div className="h-1 w-40 bg-blue-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap m-4 sm:m-2">
          {works.map((work) => (
            <WorkExperience
              key={work.id}
              work={work}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperiences;
