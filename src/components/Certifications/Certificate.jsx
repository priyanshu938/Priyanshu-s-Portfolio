import React from "react";

const Certificate = ({ certificate }) => {
  return (
    <div className="lg:w-1/3 sm:w-1/2 p-4">
      <div className="flex relative">
        <img
          alt="gallery"
          className="absolute inset-0 w-full h-full object-cover object-center"
          src={certificate.image}
          style={{ maxWidth: "100%", maxHeight: "100%" }}
        />
        <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {certificate.name}
          </h1>
          <p className="leading-relaxed">{certificate.description}</p>
          <a
            title="show certificate"
            href={certificate.link}
            rel="noopener"
            target="_blank"
          >
            <i className="fa-solid fa-eye m-2 hover:text-blue-300 transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-black-400 duration-300"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
