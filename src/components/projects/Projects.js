import React, { useState } from "react";
import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { PROJECTS } from "../../constants";

const Projects = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const projectsPerPage = 6; // Show 6 projects per page

  // Pagination logic
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = PROJECTS.slice(indexOfFirstProject, indexOfLastProject);

  const totalPages = Math.ceil(PROJECTS.length / projectsPerPage);

  return (
    <section id="projects" className="w-full pb-10 text-gray-200 flex justify-center">
      <div className="w-full max-w-6xl bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 rounded-2xl p-6 shadow-lg">
        <div className="flex justify-center items-center text-center mb-6">
          <Title title="Projects" />
        </div>

        {/* Smaller Grid Height and Reduced Gap */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 min-h-[700px]">
          {currentProjects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              des={project.des}
              src={project.src}
              gitRepo={project.gitRepo}
              website={project.website}
            />
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center mt-6 gap-3">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className={`px-3 py-2 rounded-md text-sm ${
              currentPage === 1 ? "bg-gray-600 cursor-not-allowed" : "bg-designColor hover:bg-green-500"
            }`}
          >
            Previous
          </button>

          <span className="px-3 py-2 text-md font-semibold">{`Page ${currentPage} of ${totalPages}`}</span>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className={`px-3 py-2 rounded-md text-sm ${
              currentPage === totalPages ? "bg-gray-600 cursor-not-allowed" : "bg-designColor hover:bg-green-500"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
