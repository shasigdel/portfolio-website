import React from "react";
import Title from "../layouts/Title";
import { EDUCATION } from "../../constants";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section id="education" className="pb-4 font-bodyFont text-gray-200">
      <div className="w-full bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 rounded-2xl p-4 sm:p-6 md:p-8 shadow-lg">
        <Title title="Education" className="mb-4 sm:mb-6 text-center text-2xl sm:text-3xl" />
        
        <div className="flex flex-col items-center gap-4 sm:gap-6">
          {EDUCATION.map((education, index) => (
            <EducationCard key={index} {...education} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Education;
