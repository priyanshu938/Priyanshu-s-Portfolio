import React from "react";
import WorkExperience from "./WorkExperience";
const WorkExperiences = () => {
  const works = [
    {
      id: 1,
      name: "Shooting Stars",
      description: "vdskvnsvn svn dvn vn vnsx n,vnzvnznvzvn z,.v",
    },
    {
      id: 2,
      name: "Shooting Stars",
      description: "vdskvnsvn svn dvn vn vnsx n,vnzvnznvzvn z,.v",
    },
    {
      id: 3,
      name: "Shooting Stars",
      description: "vdskvnsvn svn dvn vn vnsx n,vnzvnznvzvn z,.v",
    },
    {
      id: 4,
      name: "Shooting Stars",
      description: "vdskvnsvn svn dvn vn vnsx n,vnzvnznvzvn z,.v",
    },
    {
      id: 5,
      name: "Shooting Stars",
      description: "vdskvnsvn svn dvn vn vnsx n,vnzvnznvzvn z,.v",
    },
  ];
  return (
    <section id="works" className="text-gray-400 body-font bg-gray-900">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap items-center w-full mb-20">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-4xl font-medium title-font mb-2 text-white">
              &lt;My Work Experience/&gt;
            </h1>
            <div className="h-1 w-40 bg-blue-500 rounded"></div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
          {works.map((work) => (
            <WorkExperience
              key={work.id}
              id={work.id}
              name={work.name}
              description={work.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkExperiences;
