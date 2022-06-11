import React, { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences";
import Testimonial from "./components/Testimonial";
import Projects from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";
import Certificates from "./components/Certifications/Certificates";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Certificates />
      <WorkExperiences />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
