import React from 'react';
import BottomBanner from './BottomBanner';
// import TopBanner from './TopBanner';
import HeroCard from './HeroCard';
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
        <BottomBanner />
      </div>
    </section>
  );
}

export default Home;
