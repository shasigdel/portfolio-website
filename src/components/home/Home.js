import React from 'react';
import RightBanner from './RightBanner';
import LeftBanner from './LeftBanner';

const Home = () => {
  return (
    <section 
      id="home" 
      className="w-full pb-10 pt-20 flex flex-col items-center font-titleFont border-b-[1px] border-b-black gap-10" // Reduced gap
    >
      {/* Left Banner with reduced Margin */}
      <div className="w-full flex justify-center items-center m-2 mt-10"> {/* Reduced margin */}
        <LeftBanner />
      </div>
      {/* Right Banner with reduced Margin */}
      <div className="w-full flex justify-center items-center m-2"> {/* Reduced margin */}
        <RightBanner />
      </div>
    </section>
  );
}

export default Home;
