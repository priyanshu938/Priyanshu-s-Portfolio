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
        <div className="flex flex-col items-center w-full mb-20">
          <h1 className="text-4xl font-medium title-font mb-4 text-white tracking-widest">
            &lt;My Projects/&gt;
          <div className="h-1 w-3/4 bg-blue-500 rounded "></div>
          </h1>
         
        </div>
      <div className="flex flex-wrap -m-4 ">
      {projects.map((project)=>
      (<Project key={project.id} image={project.image} title={project.title} description={project.description} />)
      
      
      )}
      </div>
      </div>
    </section>
  );
};

export default Projects;
