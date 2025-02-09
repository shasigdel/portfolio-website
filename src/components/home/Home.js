import React from 'react';
import HeroCard from './HeroCard';
import HeroDescription from './HeroDescription';
const Home = () => {
  return (
    <section 
      id="home" 
      className="w-full pb-10 pt-20 flex flex-col items-center font-titleFont border-b-[1px] border-b-gray-600 gap-10" // Reduced gap
    >
      {/* Left Banner with reduced Margin */}
      <div className="w-full flex justify-center items-center m-2 mt-20">
        <HeroCard />
      </div>
      {/* Right Banner with reduced Margin */}
      <div className="w-full flex justify-center items-center m-2"> {/* Reduced margin */}
        <HeroDescription />
      </div>
    </section>
  );
}

export default Home;
