import React from 'react';
import { resume } from '../../assets';
import Title from '../layouts/Title';

const ResumeView = () => {
  return (
    <section id="resume" className="w-full pb-2 text-gray-200 flex justify-center px-6 sm:px-9">
      {/* Card Container */}
      <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 p-4 sm:p-6 md:p-8 lg:p-10 xl:px-12 rounded-lg shadow-lg w-full sm:w-3/4 md:w-2/3 lg:w-1/2 xl:w-2/3">
        <Title title="Resume" />

        {/* PDF Viewer */}
        <div className="w-full h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[80vh] xl:h-[90vh] p-4">
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
