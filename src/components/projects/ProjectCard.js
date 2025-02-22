import React from "react";
import { BsGithub } from "react-icons/bs";
import { FaGlobe } from "react-icons/fa";

const ProjectCard = ({ title, des, src, gitRepo, website }) => {
  return (
    <div className="w-full p-3 rounded-lg shadow-lg flex flex-col bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 
                    group hover:bg-gradient-to-b hover:from-gray-700 hover:to-gray-800 transition-all duration-700 
                    relative h-[260px] sm:h-[280px]">
      
      {/* Image Section - Larger Height */}
      <div className="w-full h-40 sm:h-44 overflow-hidden rounded-lg relative">
        <img
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300 cursor-pointer"
          src={src}
          alt={title}
        />

        {/* Description on Hover */}
        <div className="absolute inset-0 bg-black bg-opacity-80 opacity-0 group-hover:opacity-100 flex items-center justify-center text-center p-2 transition-opacity duration-500">
          <p className="text-xs sm:text-sm text-gray-300">{des}</p>
        </div>
      </div>

      {/* Content Section - Compact */}
      <div className="w-full mt-2 flex flex-col items-center text-center">
        <h3 className="text-xs sm:text-sm font-semibold text-gray-300 uppercase">{title}</h3>
        
        {/* Links */}
        <div className="flex gap-2 mt-2">
          <a href={gitRepo} target="_blank" rel="noopener noreferrer">
            <span className="text-sm sm:text-md w-7 h-7 rounded-full bg-gray-700 flex justify-center items-center text-gray-300 hover:text-designColor transition duration-300 cursor-pointer">
              <BsGithub />
            </span>
          </a>
          {website && (
            <a href={website} target="_blank" rel="noopener noreferrer">
              <span className="text-sm sm:text-md w-7 h-7 rounded-full bg-gray-700 flex justify-center items-center text-gray-300 hover:text-designColor transition duration-300 cursor-pointer">
                <FaGlobe />
              </span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
