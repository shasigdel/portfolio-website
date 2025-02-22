import React from 'react';
import { shashank2 } from '../../assets/index';

const TopBanner = () => {
  return (
    <div className="w-full sm:w-1/2 flex justify-center items-center relative mt-12">
      <img 
        className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-cover rounded-full z-10"
        src={shashank2} 
        alt="bannerImg"
      />
    </div>
  );
};

export default TopBanner;
