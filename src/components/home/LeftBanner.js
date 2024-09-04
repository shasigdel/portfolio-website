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
      {/* Removed the background gradient and shadow */}
    </div>
  );
};

export default LeftBanner;
