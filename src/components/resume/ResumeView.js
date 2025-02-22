// ResumeView.js
import React, { useState } from 'react';
import { resume } from '../../assets';
import Title from '../layouts/Title';

const ResumeView = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="resume" className="w-full pb-2 text-gray-200">
      <div className="bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 rounded-lg shadow-lg p-4 sm:p-6 md:p-8">
        <Title title="Resume" />
        
        {/* Desktop View */}
        <div className="hidden sm:block w-full h-[80vh] md:h-[80vh] lg:h-[80vh]">
          <iframe
            src={resume}
            width="100%"
            height="100%"
            title="Resume"
            className="border-none rounded-lg"
          />
        </div>

        {/* Mobile View Button */}
        <div className="sm:hidden flex justify-center mt-4">
          <button
            onClick={() => setShowModal(true)}
            className="bg-designColor text-white px-6 py-2 rounded-md hover:bg-opacity-80 transition-all"
          >
            View Resume
          </button>
        </div>

        {/* Mobile Modal */}
        {showModal && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-75 flex items-center justify-center p-4">
            <div className="bg-gray-900 rounded-lg w-full max-w-2xl p-4">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-semibold">Resume</h2>
                <button
                  onClick={() => setShowModal(false)}
                  className="text-gray-400 hover:text-white"
                >
                  ✕
                </button>
              </div>
              <div className="h-[90vh]">
                <iframe
                  src={resume}
                  width="100%"
                  height="100%"
                  title="Resume"
                  className="border-none rounded-lg"
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default ResumeView;