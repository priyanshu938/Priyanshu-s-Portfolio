import React from "react";
import Project from "./Project";

const Projects = () => {
    const projects=[
        
        {
        id:1,
        image:"https://dummyimage.com/200x200",
        title:"Project 1",
        description:"skvnkvdknvdklvndkvndknvdkn dk ndknvkvnskvnkdvndkvndkvnknvdxkvndskvn sklnvskvnvnnvxklvndsn"
    },
    {
        id:2,
        image:"https://dummyimage.com/200x200",
        title:"Project 2",
        description:"skvnkvdknvdklvndkvndknvdkn dk ndknvkvnskvnkdvndkvndkvnknvdxkvndskvn sklnvskvnvnnvxklvndsn"
    },
    {
        id:3,
        image:"https://dummyimage.com/200x200",
        title:"Project 3",
        description:"skvnkvdknvdklvndkvndknvdkn dk ndknvkvnskvnkdvndkvndkvnknvdxkvndskvn sklnvskvnvnnvxklvndsn"
    }, {
        id:4,
        image:"https://dummyimage.com/200x200",
        title:"Project 4",
        description:"skvnkvdknvdklvndkvndknvdkn dk ndknvkvnskvnkdvndkvndkvnknvdxkvndskvn sklnvskvnvnnvxklvndsn"
    }, {
        id:5,
        image:"https://dummyimage.com/200x200",
        title:"Project 5",
        description:"skvnkvdknvdklvndkvndknvdkn dk ndknvkvnskvnkdvndkvndkvnknvdxkvndskvn sklnvskvnvnnvxklvndsn"
    }
]
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="text-2xl font-medium title-font mb-4 text-white tracking-widest">
            My Projects
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them.
          </p>
        </div>
      <div className="flex flex-wrap -m-4">
      {projects.map((project)=>
      (<Project key={project.id} image={project.image} title={project.title} description={project.description} />)
      
      
      )}
      </div>
      </div>
    </section>
  );
};

export default Projects;
