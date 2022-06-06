import React from "react";
import Certificate from "./Certificate";
import certificates from "./certificatesAPI";
const Certificates = () => {
  return (
    <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
       <div className="container px-5 py-10  mx-auto">
        <div className="flex flex-col items-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Certificates/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        </div>
      <div className="flex flex-wrap lg: m-4 my-0 ">
        {certificates.map((certificate) => (
          <Certificate key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;
