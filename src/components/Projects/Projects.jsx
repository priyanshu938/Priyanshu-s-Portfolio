import React from "react";
import Project from "./Project";
import projects from "./projectsAPI";
const Projects = () => {
  return (
    <section class="text-gray-400 bg-gray-900 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Projects/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded "></div>
          </h1>
        </div>
        <div class="flex flex-wrap -m-4">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
