import React from "react";
const Hero = () => {
  return (
    <div id="home">
      <section className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-20 py-24 md:flex-row flex-col items-center sm:px-5">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-3xl text-3xl mb-4 font-medium text-white">
              Hello, I am&nbsp;
              <br className="hidden lg:inline-block" />
              Priyanshu Tiwari
            </h1>
            <p className="mb-8 leading-relaxed">
              I always do my best in what I take. A very positive person who
              loves learning new things and meeting new people.A full stack web
              developer.Passionate to learn new web technologies and frameworks.
              Proficient in MERN Stack.
            </p>
            <div className="flex justify-center">
              <a
                href={
                  "https://drive.google.com/file/d/1b4YKKy_JMdOxxvcUYN3j4Q_j4m3Ra_9c/view?usp=sharing"
                }
              >
                <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110 hover:bg-blue-500 duration-300">
                  Resume
                </button>
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 flex justify-center">
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src={"images/profile-pic.png"}
              height={"300vh"}
              width={"300vw"}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
