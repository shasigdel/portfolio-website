import React from "react";
import { FaDocker, FaJava, FaJs, FaPython, FaReact } from "react-icons/fa";
import {
  SiGo,
  SiDjango,
  SiFlask,
  SiSpringboot,
  SiMongodb,
  SiPostgresql,
  SiKubernetes,
  SiGithub,
  SiTailwindcss,
  SiNodedotjs,
  SiCss3,
  SiPostman,
  SiHibernate,
  SiRabbitmq,
} from "react-icons/si";

// Icon styling
const iconClasses =
  "text-4xl sm:text-5xl transition-transform duration-300 hover:scale-110 hover:text-designColor";

// Icons list
const techIcons = [
  <FaJs key="js" className={iconClasses} />,
  <FaJava key="java" className={iconClasses} />,
  <FaPython key="python" className={iconClasses} />,
  <SiGo key="go" className={iconClasses} />,
  <FaReact key="react" className={iconClasses} />,
  <SiDjango key="django" className={iconClasses} />,
  <SiSpringboot key="springboot" className={iconClasses} />,
  <SiFlask key="flask" className={iconClasses} />,
  <SiNodedotjs key="node" className={iconClasses} />,
  <SiTailwindcss key="tailwind" className={iconClasses} />,
  <SiCss3 key="css" className={iconClasses} />,
  <SiRabbitmq key="rabbitmq" className={iconClasses} />,
  <SiMongodb key="mongodb" className={iconClasses} />,
  <SiPostgresql key="postgresql" className={iconClasses} />,
  <FaDocker key="docker" className={iconClasses} />,
  <SiKubernetes key="kubernetes" className={iconClasses} />,
  <SiGithub key="github" className={iconClasses} />,
  <SiPostman key="postman" className={iconClasses} />,
  <SiHibernate key="hibernate" className={iconClasses} />,
];

const BannerIcons = () => {
  return (
    <div className="relative w-full bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 py-12 shadow-xl">
      <h4 className="text-3xl font-titleFont text-gray-200 text-center mb-8">
        Technologies
      </h4>

      {/* Gradient fade effect on edges */}
      <div className="relative overflow-hidden w-full">
        <div className="absolute top-0 left-0 w-1/6 h-full bg-gradient-to-r from-gray-900 to-transparent z-10" />
        <div className="absolute top-0 right-0 w-1/6 h-full bg-gradient-to-l from-gray-900 to-transparent z-10" />

        {/* Marquee effect */}
        <div className="flex gap-10 md:gap-14 animate-marquee whitespace-nowrap">
          {techIcons.map((icon, index) => (
            <div key={index} className="flex-shrink-0">
              {icon}
            </div>
          ))}
          {/* Duplicate for a continuous loop */}
          {techIcons.map((icon, index) => (
            <div key={`dup-${index}`} className="flex-shrink-0">
              {icon}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BannerIcons;
