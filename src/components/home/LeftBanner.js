import React from 'react';
import { contactImage } from '../../assets/index';

const LeftBanner = () => {
  return (
    <div className="w-full sm:w-1/2 flex justify-center items-center relative">
      <img 
        className="w-[200px] sm:w-[250px] md:w-[300px] h-auto object-cover rounded-full z-10"
        src={contactImage} 
        alt="bannerImg"
      />
      <div className="absolute bottom-0 w-full sm:w-[250px] md:w-[300px] h-[200px] md:h-[250px] bg-gradient-to-r from-[#1e2024] to-[#202327] shadow-shadowOne flex justify-center items-center z-0">
      </div>
    </div>
  );
};

export default LeftBanner;
