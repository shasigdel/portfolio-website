import React from 'react'
import Title from '../layouts/Title'
import { EDUACTION } from '../../constants'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <section id="education" className="border-b border-gray-600 pb-4 font-bodyFont">
      <Title title="Education" className="my-20 text-center text-4xl" />
      
      {/* Flex container to align the education cards vertically */}
      <div className="flex flex-col items-center space-y-8"> {/* Added flex-col and items-center to stack cards vertically */}
        {EDUACTION.map((education, index) => (
          <div key={index} className="w-full max-w-3xl px-8 sm:px-20"> {/* Ensure full width and proper padding */}
            <EducationCard 
              school={education.school} 
              discipline={education.discipline} 
              graduation={education.graduation} 
              degree={education.degree}
            />
          </div>
        ))}
      </div>
    </section>
  )
}

export default Education
