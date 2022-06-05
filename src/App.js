import "./App.css";
import Header from "./components/Header";
import ContactUs from "./components/ContactUs";
import Hero from "./components/Hero";
import WorkExperiences from "./components/WorkExperiences/WorkExperiences";
import Testimonial from "./components/Testimonial";
import Project from "./components/Projects/Projects";
import Footer from "./components/Footer";
import Skills from "./components/Skills/Skills";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <WorkExperiences />
      <Testimonial />
      <ContactUs />
      <Footer />
    </>
  );
}

export default App;
