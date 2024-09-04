import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Experience from "./components/experience/Experience";
import Contact from "./components/contact/Contact";
import Project from "./components/projects/Project";
import Education from "./components/education/Education";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-lightText">
      <div className="max-w-screen-2xl mx-auto px-16">
        <Navbar />
        <Home />
        <Experience />
        <Project />
        <Education />
        <Contact />
      </div>
    </div>
  )
}

export default App;
