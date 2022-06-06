import React from "react";
import Certificate from "./Certificate";
import certificates from "./certificatesAPI";
const Certificates = () => {
  return (
    <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
       <div className="container px-20  mx-auto">
        <div className="flex flex-col items-center w-full mb-10">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 text-white">
            &lt;My Certificates/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        </div>
      <div className="flex flex-wrap m-4 mb-0">
        {certificates.map((certificate) => (
          <Certificate key={certificate.id} certificate={certificate} />
        ))}
      </div>
    </section>
  );
};

export default Certificates;