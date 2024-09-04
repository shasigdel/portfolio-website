import React from 'react'
import ContactIcon from './ContactIcon'
import { CONTACT } from '../../constants'
import Title from '../layouts/Title'
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="border-b border-gray-600 pb-4 font-bodyFont">
      
      <Title title="Contact Me" />
      <div className="flex justify-between items-center text-center">
        <div className="flex flex-col justify-center tracking-tighter">
          <p className="my-2 flex items-center"> {/* Adjusted margin */}
            <FiMail className="mr-2" />
            <a href={`mailto:${CONTACT.email}`} className="font-bodyFont hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <p className="my-2 flex items-center"> {/* Adjusted margin */}
            <FiPhone className="mr-2" />
            <a href={`tel:${CONTACT.phone}`} className="font-bodyFont hover:underline">
              {CONTACT.phone}
            </a>
          </p>
        </div>
        <ContactIcon />
      </div>

    </section> 
  )
}

export default Contact
