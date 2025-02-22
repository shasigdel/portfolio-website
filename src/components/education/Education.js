import React from "react";
import Title from "../layouts/Title";
import { EDUCATION } from "../../constants";
import EducationCard from "./EducationCard";

const Education = () => {
  return (
    <section id="education" className="pb-4 font-bodyFont text-gray-200 flex justify-center">
      <div className="w-full max-w-4xl bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 rounded-2xl p-8 shadow-lg">
        <Title title="Education" className="mb-8 text-center text-3xl" />

        {/* Centered Education Cards */}
        <div className="flex flex-col items-center gap-6">
          {EDUCATION.map((education, index) => (
            <EducationCard
              key={index}
              school={education.school}
              discipline={education.discipline}
              graduation={education.graduation}
              degree={education.degree}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
