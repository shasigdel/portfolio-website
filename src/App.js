import React from "react";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import BannerIcons from "./components/home/BannerIcons";
import ResumeDownload from "./components/resume/ResumeDownload";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-gray-400 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-6">
        {/* Add Download Button here */}
        <ResumeDownload />
        
        <Home />
        
        {/* Education & Resume Section */}
          {/* Education Section */}
          <div className="space-y-10 py-12 relative">
            <Education />
          </div>

          {/* Resume Section
          <div className="w-full lg:w-[65%] xl:w-[70%]">
            <ResumeView />
          </div> */}

        {/* Projects & Technologies Sections */}
        <div className="space-y-10 py-12 relative">
          <Projects />
          <BannerIcons />
        </div>
      </div>
    </div>
  );
}

export default App;
