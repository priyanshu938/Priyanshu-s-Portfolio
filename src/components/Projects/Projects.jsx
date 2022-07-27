import React, { useState, useEffect } from "react";
import Project from "./Project";
import Modal from "../Modal";
import Url from "../ServerUrl";
import axios from "axios";
const Projects = () => {
  const url = `${Url}/projects/getAllProjects`;

  //fetch data from url
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get(url).then((res) => {
      setProjects(res.data.result);
    });
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
            <Project key={project._id} project={project} showModal={showModal} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
