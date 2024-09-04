import React from 'react'
import Title from '../layouts/Title'
import { EDUACTION } from '../../constants'
import EducationCard from './EducationCard'

const Education = () => {
  return (
    <section id="education" className='border-b border-gray-600 pb-4 font-bodyFont'>
      
      <Title title="Education" className="my-20 text-center text-4xl"/>
        {EDUACTION.map((education, index) => (
          <div key={index}> 
              <EducationCard 
                school={education.school} 
                discipline={education.discipline} 
                graduation={education.graduation} 
                degree={education.degree}
              />
            </div>
        ))}
    </section>
  )
}

export default Education

