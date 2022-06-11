import React from "react";
import Certificate from "./Certificate";
import certificates from "./certificatesAPI";
const Certificates = () => {
  return (
    <section id="certificates" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col items-center w-full mb-20">
          <h1 className="sm:text-4xl text-2xl font-medium title-font mb-4 sm:mb-2 text-white">
            &lt;My Certificates/&gt;
            <div className="h-1 w-3/4 bg-blue-500 rounded"></div>
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {certificates.map((certificate) => (
            <Certificate key={certificate.id} certificate={certificate} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
