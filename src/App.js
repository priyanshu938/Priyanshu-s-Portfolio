import "./App.css";
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
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <Project />
      <Certificates />
      <WorkExperiences />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}

export default App;
