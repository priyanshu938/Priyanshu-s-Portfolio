import React, { useState, useEffect } from "react";
import Project from "./Project";
import Modal from "../Modal";
const Projects = () => {
  const url =
    "https://raw.githubusercontent.com/priyanshu938/Priyanshu-s-Portfolio-APIs/main/projects.json";
  //fetch data from url
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  const [modal, setModal] = useState(false);
  const [modalLink, setModalLink] = useState("");
  const showModal = (link) => {
    setModal(!modal);
    setModalLink(link);
  };
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Projects/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded "></div>
          </h1>
        </div>
        {modal && (
          <Modal link={modalLink} modalOpen={modal} setModalOpen={setModal} />
        )}
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <Project key={project.id} project={project} showModal={showModal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
