import React from "react";

const Certificate = ({ certificate }) => {
  return (
    <div className="lg:w-1/3  sm:w-1/2 p-6 px-20">
      <div className="flex relative cursor-pointer ">
        <img
          alt="gallery"
          className="absolute inset-0 w-5/6 h-5/6  object-cover object-center"
          src={certificate.image}
        />
        <div className="px-2 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
          <h1 className="title-font text-lg font-medium text-white mb-3">
            {certificate.name}
          </h1>
          <p className="leading-relaxed">{certificate.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Certificate;
