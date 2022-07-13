import React from "react";
const Hero = () => {
  return (
    <section id="home" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src={"images/profile-pic.png"}
            height={"300vh"}
            width={"300vw"}
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I am&nbsp;
            <br className="hidden lg:inline-block" />
            Priyanshu Tiwari
          </h1>
          <p className="mb-8 leading-relaxed">
            {" "}
            I always do my best in what I take. A very positive person who loves
            learning new things and meeting new people.A full stack web
            developer.Passionate to learn new web technologies and frameworks.
            Proficient in MERN Stack.
          </p>
          <div className="flex justify-center">
            <a
              href={
                "https://drive.google.com/file/d/1pCV_1yHXrP9O8PsUzaJZZK0SVOX044E5/view?usp=sharing"
              }
              target="_blank"
            >
              <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
                Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
