import React from "react";

const Project = ({ project, showModal }) => {
  return (
    <>
      <div className="p-4 lg:w-1/2  ">
        <div className="h-full cursor-pointer flex sm:flex-row flex-col items-center sm:justify-start justify-center text-center sm:text-left transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-400 duration-300 p-4">
          <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-48 h-48 object-cover object-center sm:mb-0 mb-4"
            src={project.image}
            style={{ maxWidth: "100%", maxHeight: "100%" }}
          />
          <div className="flex-grow sm:pl-8">
            <h2 className="title-font font-medium text-lg text-white">
              {project.title}
            </h2>
            <p className="mb-4">{project.description}</p>
            <span className="inline-flex">
              {project.githubLink && (
                <a
                  title="open github code"
                  href={project.githubLink}
                  rel="noopener"
                  target="_blank"
                  className="hover:text-black-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-400 duration-300"
                >
                  <i className="fa-brands fa-github m-2"></i>
                </a>
              )}
              {project.youtubeVideoLink && (
                <a
                  title="watch youtube video"
                  rel="noopener"
                  target="_blank"
                  className="hover:text-red-600 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-400 duration-300"
                >
                  <i
                    className="fa-brands fa-youtube m-2"
                    onClick={() => {
                      showModal(project.youtubeVideoLink);
                    }}
                  ></i>
                </a>
              )}
              {project.liveProjectLink && (
                <a
                  title="show demo"
                  href={project.liveProjectLink}
                  rel="noopener"
                  target="_blank"
                  className="hover:text-blue-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-400 duration-300"
                >
                  <i className="fa-solid fa-eye m-2"></i>
                </a>
              )}
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
