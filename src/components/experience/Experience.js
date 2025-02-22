import React from 'react';
import { EXPERIENCES } from '../../constants';
import ExperienceCard from './ExperienceCard';
import Title from '../layouts/Title';

const Experience = () => {
  return (
    <section className="w-full py-5 flex flex-col items-center">
      <Title title="Experience" className="mt-3 mb-5 text-center text-4xl" />
      <div className="w-full max-w-6xl flex flex-wrap justify-center gap-9">
        {EXPERIENCES.map((exp, index) => (
          <ExperienceCard key={exp.id || index} {...exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
