import React from "react";
import Project from "./Project";
import projects from "./projectsAPI";
const Projects = () => {
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-20 py-20 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="lg:text-4xl  font-medium title-font mb-4 text-white tracking-widest sm:text-2xl mb-2">
            &lt;My Projects/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded "></div>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4 sm:-m-2">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
