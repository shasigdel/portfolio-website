import React from 'react';
import HeroCard from './HeroCard';
import Experience from '../experience/Experience';

const Home = () => {
  return (
    <section 
      id="home" 
      className="w-full pb-10 pt-40 flex flex-col lg:flex-row items-center justify-center font-titleFont gap-10"
    >
      {/* Hero Card - Left on Large Screens */}
      <div className="w-full lg:w-1/2 flex justify-center">
        <HeroCard />
      </div>

      {/* Experience Section - Right on Large Screens with Shadow */}
      <div className="w-full lg:w-2/3 flex justify-center">
        <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-4xl">
          <Experience />
        </div>
      </div>
    </section>
  );
};

export default Home;
