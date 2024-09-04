import React from 'react';
import RightBanner from './RightBanner';
import LeftBanner from './LeftBanner';

const Home = () => {
  return (
    <section 
      id="home" 
      className="w-full pb-10 pt-20 flex flex-col items-center font-titleFont border-b-[1px] border-b-black gap-20" 
    >
      {/* Left Banner with Margin */}
      <div className="w-full flex justify-center items-center m-4 mt-20">
        <LeftBanner />
      </div>
      {/* Right Banner with Margin */}
      <div className="w-full flex justify-center items-center m-4"> {/* Added margin */}
        <RightBanner />
      </div>
    </section>
  );
}

export default Home;
