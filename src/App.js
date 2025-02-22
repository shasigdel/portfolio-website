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
      <div className="max-w-screen-4xl mx-auto px-2 sm:px-2">
        <Navbar />
        <Home />
        <BannerIcons />

        {/* Flex container for side-by-side layout */}
        <div className="mt-10 flex flex-col lg:flex-row gap-8 lg:gap-10 px-4">

          {/* Left side: Education and Contact (adjusting width for proper fit) */}
          <div className="w-full lg:w-1/3 flex flex-col gap-12">
            <Education />
            <Contact />  {/* Moved Contact here */}
          </div>

          {/* Right side: Projects (adjusting width for larger screen) */}
          <div className="w-full lg:w-2/3">
            <Projects />
          </div>

        </div>

        {/* Resume View */}
        <ResumeView />
      </div>
    </div>
  );
}

export default App;
