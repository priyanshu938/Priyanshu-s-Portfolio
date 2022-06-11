import React from "react";
const Hero = () => {
  return (
    <section id="home" class="text-gray-400 bg-gray-900 body-font">
      <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          <img
            className="object-cover object-center rounded "
            alt="hero"
            src={"images/profile-pic.png"}
            height={"300vh"}
            width={"300vw"}
          />
        </div>
        <div class="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
          Hello, I am&nbsp;
            <br class="hidden lg:inline-block" />
            Priyanshu Tiwari
          </h1>
          <p class="mb-8 leading-relaxed">
            {" "}
            I always do my best in what I take. A very positive person who loves
            learning new things and meeting new people.A full stack web
            developer.Passionate to learn new web technologies and frameworks.
            Proficient in MERN Stack.
          </p>
          <div class="flex justify-center">
            <a
              href={
                "https://drive.google.com/file/d/1b4YKKy_JMdOxxvcUYN3j4Q_j4m3Ra_9c/view?usp=sharing"
              }
              target="_blank"
            >
              <button class="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
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
