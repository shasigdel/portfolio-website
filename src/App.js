import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Contact from "./components/contact/Contact";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import BannerIcons from "./components/home/BannerIcons";
import ResumeView from "./components/resume/ResumeView";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-gray-400 overflow-x-hidden">
      <div className="max-w-screen-4xl mx-auto px-4 sm:px-8">
        <Navbar />
        <Home />
        <BannerIcons />

        {/* Flex container for side-by-side layout */}
        <div className="mt-20 flex flex-col lg:flex-row gap-12 lg:gap-16 px-4">
          {/* Left side: Education (fixed width) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-20">
            <Education />
            <Contact />  {/* Moved Contact here */}
          </div>

          {/* Right side: Projects (larger width) */}
          <div className="w-full lg:w-2/3">
            <Projects />
          </div>
        </div>
        <ResumeView />
      </div>
    </div>
  );
}

export default App;
