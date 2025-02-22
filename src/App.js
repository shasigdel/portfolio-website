import React from "react";
import Home from "./components/home/Home";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import BannerIcons from "./components/home/BannerIcons";
import ResumeView from "./components/resume/ResumeView";

function App() {
  return (
    <div className="w-full h-auto bg-bodyColor text-gray-400 overflow-x-hidden">
      <div className="max-w-screen-2xl mx-auto px-2 sm:px-4 lg:px-6">
        <Home />
        
        {/* Education & Resume Section */}
        <div className="flex flex-col lg:flex-row items-start gap-6 lg:gap-8 xl:gap-10 mt-8 lg:mt-12">
          {/* Education Section */}
          <div className="w-full lg:w-[35%] xl:w-[30%] lg:sticky lg:top-20 lg:py-2">
            <Education />
          </div>

          {/* Resume Section */}
          <div className="w-full lg:w-[65%] xl:w-[70%]">
            <ResumeView />
          </div>
        </div>

        {/* Projects & Technologies Sections */}
        <div className="space-y-16 py-12">
          <Projects />
          <BannerIcons />
        </div>
      </div>
    </div>
  );
}

export default App;
