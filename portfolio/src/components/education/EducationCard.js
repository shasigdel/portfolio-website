import React from 'react'

const EducationCard = ({school,discipline,graduation,degree}) => {
  return (
    <div className='font-bodyFont'>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">                  
    <li className="mb-10 ms-4">
        <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
        <time className="mb-1 text-sm leading-none text-gray-400 dark:text-gray-500">{graduation}</time>
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{school}</h3>
        <p className="mb-4 text-base text-gray-500 dark:text-gray-400">{discipline}</p>
        <p className="mb-4 text-designColor text-designColor dark:text-designColor">{degree}</p>
    </li>
</ol>
    </div>
  );
}

export default EducationCard
