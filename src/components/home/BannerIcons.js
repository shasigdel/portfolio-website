import React from 'react';
import { FaDocker, FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa';
import { SiGo, SiDjango, SiFlask, SiSpringboot, SiMongodb, SiPostgresql, SiKubernetes, SiGithub, SiTailwindcss, SiNodedotjs, SiCss3, SiPostman, SiHibernate } from 'react-icons/si';

const BannerIcons = () => {
  return (
    <div className="flex flex-col items-center gap-10 mt-10">
      <h4 className="text-3xl font-titleFont text-gray-400">Technologies</h4>

      {/* Languages Section */}
      <div className="text-center w-full">
        <h1 className="text-2xl font-semibold mb-4">Languages</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="bannerIcon text-3xl sm:text-5xl">
            <FaJs />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <FaJava />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <FaPython />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiGo />
          </span>
        </div>
      </div>

      {/* Frameworks Section */}
      <div className="text-center w-full">
        <h1 className="text-2xl font-semibold mb-4">Frameworks and CSS</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="bannerIcon text-3xl sm:text-5xl">
            <FaReact />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiDjango />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiSpringboot />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiFlask />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiNodedotjs />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiTailwindcss />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiCss3 />
          </span>
        </div>
      </div>

      <div className="text-center w-full">
        <h1 className="text-2xl font-semibold mb-4">Databases and Tools</h1>
        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiMongodb />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiPostgresql />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <FaDocker />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiKubernetes />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiGithub />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiPostman />
          </span>
          <span className="bannerIcon text-3xl sm:text-5xl">
            <SiHibernate />
          </span>
        </div>
      </div>
    </div>
  );
};

export default BannerIcons;
