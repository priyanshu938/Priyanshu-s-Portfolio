import "./App.css";
import React, { useState } from "react";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences";
import Testimonial from "./components/Testimonial";
import Project from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certifications/Certificates";
function App() {
  const [check,setCheck]=useState(false)
  const [color, setColor] = useState({
    mainColor: "green-400",
    complementaryColor: "gray-400",
  });
  const handleColor = () => {
    color.mainColor === "green-400"
      ? setColor({ mainColor: "green-900", complementaryColor: "gray-400" })
      : setColor({ mainColor: "green-400", complementaryColor: "white" });
      setCheck(!check);
  };
  return (
    <>
      <Header handleColor={handleColor} check={check} />
      <Hero />
      <Skills />
      <Project />
      <Certificates />
      <WorkExperiences />
      <Testimonial />
      <ContactUs />
      <Footer color={color} />
    </>
  );
}

export default App;
