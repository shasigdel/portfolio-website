import React from 'react'
import Title from '../layouts/Title'
import { EXPERIENCES } from '../../constants'

const Experience = () => {
  return (
    <section id="experience" className='border-b border-gray-600 pb-4 font-bodyFont'>
      
      <Title title="Experience" className="my-20 text-center text-4xl"/>
{EXPERIENCES.map((experience, index) => (
  <div key={index} className='mb-8 flex flex-wrap lg:justify-center text-lg'>
    <div className='w-full lg:w-1/4'>
      <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
    </div>
    <div className='w-full max-w-xl lg:w-3/4'>
      <h6 className='mb-2 font-bodyFont'>{experience.role} - <span className='text-sm text-designColor'>{experience.company}</span></h6>
      <p className='mb-4 text-base font-normal text-gray-400'>
      
      <ul className='list-inside'>
          {experience.description.map((desc, index) => (
            <li key={index} className='relative pl-4'>
              <span className='absolute left-0 text-designColor'>•</span>
              {desc}
            </li>
          ))}
        </ul>

      </p>
      <div className='flex flex-wrap gap-2'>
        {experience.technologies.map((tech, index) => (
          <span key={index} className='mr-2 mt-4 rounded bg-designColor px-2 py-1 text-sm font-medium text-white'>
            {tech}
          </span>
        ))}
      </div> 
    </div>
  </div>
))}
           
    </section>
  )
}

export default Experience
