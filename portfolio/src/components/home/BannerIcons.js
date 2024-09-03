import React from 'react';
import { FaJava, FaJs, FaPython, FaReact } from 'react-icons/fa';
import {SiGo, SiDjango, SiFlask, SiSpringboot} from 'react-icons/si';

const BannerIcons = () => {
  return (
    <div>
      <div className="text-center justify-between">
        <div>
          <h1 className='text-center text-2xl'>Languages</h1>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <span className="bannerIcon">
                <FaJs />
              </span>
              <span className="bannerIcon">
                <FaJava />
              </span>
              <span className="bannerIcon">
                <FaPython />
              </span>
              <span className="bannerIcon">
                <SiGo />
              </span>
            </div>
        </div>
        <div>
              <h1 className='text-center text-2xl'>Framework</h1> 
           <div className="flex flex-wrap items-center justify-center gap-4">
             <span className="bannerIcon">
               <FaReact />
             </span>
             <span className="bannerIcon">
               <SiDjango />
             </span>
             <span className="bannerIcon">
               <SiSpringboot />
             </span>
             <span className="bannerIcon">
               <SiFlask />
             </span>
           </div>
         </div>
       </div>
     </div>
  );
};

export default BannerIcons;
