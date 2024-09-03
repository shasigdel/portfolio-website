import React from 'react'
import Title from '../layouts/Title'
import { EXPERIENCES } from '../../constants'

const Experience = () => {
  return (
    <section id="experience" className='border-b border-gray-600 pb-4 font-bodyFont'>
      
      <Title title="Experience" className="my-20 text-center text-4xl"/>
        {EXPERIENCES.map((experience, index) => (
          <div 
            key={index}
            className='mb-8 flex flex-wrap lg:justify-center'>
              <div className='w-full lg:w-1/4'>
                <p className='mb-2 text-sm text-neutral-400'>{experience.year}</p>
              </div>
              <div className='w-full max-w-xl lg:w-3/4'>
                <h6 className='mb-2 font-bodyFont'>{experience.role} - <span className='text-sm text-designColor'>{experience.company}</span></h6>
                <p className='mb-4 text-base font-normal text-gray-400'>{experience.description}</p>
                {experience.technologies.map((tech, index)=>(
                  <span key={index} className='mr-2 mt4 rounded bg-neutral-500 px-2 py-1 text-sm font-medium'>{tech}</span>
                ))}
              </div>
            </div>
        ))}
    </section>
  )
}

export default Experience
