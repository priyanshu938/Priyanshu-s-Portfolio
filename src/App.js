import React from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Certificates from "./components/Certifications/Certificates";
import Videos from "./components/Videos/Videos";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences";
import Testimonial from "./components/Testimonial";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <Videos />
      <WorkExperiences />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
