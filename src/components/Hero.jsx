import React, { useState, useEffect } from "react";
import Url from "./ServerUrl";
import axios from "axios";
import Spinner from "./Spinner";
const Hero = () => {
  const url = `${Url}/resume/getResume`;
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [resumeLink, setResumeLink] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    axios.get(url).then((res) => {
      setImage(res.data.result[0].image);
      setDescription(res.data.result[0].description);
      setResumeLink(res.data.result[0].link);
      setLoading(false);
    });
  }, []);
  return (
    <section id="home" className="text-gray-400 bg-gray-900 body-font">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 md:mb-0 mb-10">
          {loading ? (
            <div
              style={{ height: "300vh", width: "300vw", positon: "relative" }}
            >
              <Spinner />
            </div>
          ) : (
            <img
              className="object-cover object-center rounded "
              alt="hero"
              src={image}
              height={"300vh"}
              width={"300vw"}
            />
          )}
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hello, I am&nbsp;
            <br className="hidden lg:inline-block" />
            Priyanshu Tiwari
          </h1>
          <p className="mb-8 leading-relaxed">{description}</p>
          <div className="flex justify-center">
            <a href={resumeLink} target="_blank">
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
