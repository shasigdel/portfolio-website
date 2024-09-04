import React from 'react';

const EducationCard = ({ school, discipline, graduation, degree }) => {
  return (
    <div className='font-bodyFont px-16'>
      <ol className="relative border-l border-designColor dark:border-designColor">                  
        <li className="mb-10 ml-4">
          <div className="absolute w-3 h-3 bg-designColor rounded-full mt-1.5 -left-1.5 border border-gray-200 dark:border-gray-200 dark:bg-designColor"></div>
          <time className="mb-1 text-sm leading-none text-gray-500 dark:text-gray-400">
            {graduation}
          </time>
          <h3 className="text-lg font-semibold text-gray-200 dark:text-gray-100">
            {school}
          </h3>
          <p className="mb-4 text-base text-gray-500 dark:text-gray-400">
            {discipline}
          </p>
          <p className="mb-4 text-designColor dark:text-designColor">
            {degree}
          </p>
        </li>
      </ol>
    </div>
  );
};

export default EducationCard;
