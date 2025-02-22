import React from 'react';
import { resume } from '../../assets';
import Title from '../layouts/Title';

const ResumeView = () => {
  return (
    <section id="resume" className="w-full pb-2 text-gray-200 flex justify-center px-9">
      {/* Card Container */}
      <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 p-8 xl:px-10 sm:p-8 md:p-4 lg:p-4 xl:p-2 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/5 xl:w-1/2">
        <Title title="Resume" />

        {/* PDF Viewer */}
        <div className="w-full h-[500px] sm:h-[600px] md:h-[700px] lg:h-[800px] xl:h-[900px] overflow-hidden">
          <iframe
            src={resume}  
            width="100%"
            height="100%"
            title="Resume"
            className="border-none"
          />
        </div>
      </div>
    </section>
  );
};

export default ResumeView;
