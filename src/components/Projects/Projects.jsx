import React from "react";
import Project from "./Project";
const Projects = () => {
  const projects = [
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
    <div>
      <section class="text-gray-400 body-font bg-gray-900">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap w-full mb-20">
            <div class="lg:w-1/2 w-full mb-6 lg:mb-0">
              <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white">
                My Project
              </h1>
              <div class="h-1 w-20 bg-blue-500 rounded"></div>
            </div>
            <p class="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom prism
              food truck ugh squid celiac humblebrag.
            </p>
          </div>
          <div class="flex flex-wrap -m-4">
            {projects.map((project) => (
              <Project
                id={project.id}
                name={project.name}
                description={project.description}
              />
            ))}
          </div>
          <button class="flex mx-auto mt-16 text-white bg-blue-500 border-0 py-2 px-8 focus:outline-none hover:bg-blue-600 rounded text-lg">
            Button
          </button>
        </div>
      </section>
    </div>
  );
};

export default Projects;
