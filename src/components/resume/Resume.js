import React from 'react'
import { resume } from '../../assets/resume/ShashankSigdelResume-Updated.pdf'

const Resume = () => {
  return (
     <section
      id="resume">
        <a href={resume} download='resume.pdf'>
          
        </a>
      </section>
  )
}

export default Resume
