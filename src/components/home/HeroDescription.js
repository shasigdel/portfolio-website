import React from 'react';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import BannerIcons from './BannerIcons';

const HeroDescription = () => {
  const [text] = useTypewriter({
    words: ["Backend Developer.", "Frontend Developer.", "Graphic Designer.", "Software Engineer."],
    loop: true,
    typeSpeed: 20,
    deleteSpeed: 10,
    delaySpeed: 2000,
  });

  return (
    <div className="md:w-full md:px-20 sm:w-1/2 flex flex-col gap-6 sm:gap-20 px-2 sm:px-6 mt-10 sm:mt-20 mx-auto text-gray-300"> {/* Adjusted padding and margin */}
      <div className="flex flex-col gap-4">
        <h4 className="text-lg font-strong text-designColor">WELCOME TO MY PORTFOLIO</h4>
        <h1 className="text-3xl sm:text-5xl font-bold text-white">
          Hi, My name is <span className="text-designColor capitalize">Shashank Sigdel</span>
        </h1>
        <h2 className="text-xl sm:text-3xl font-bold">
          a <span className='text-designColor'>{text}</span>
          <Cursor cursorBlinking="false" cursorStyle="|" cursorColor="designColor" />
        </h2>
        <p className="text-sm sm:text-base font-bodyFont leading-6 tracking-wide ">
          I’m a full stack developer with expertise in ReactJS, TypeScript, Python, and Java. I enjoy building robust applications and am passionate about leveraging my skills to create impactful solutions.
        </p>
      </div>
      <BannerIcons />
    </div>
  );
};

export default HeroDescription;
