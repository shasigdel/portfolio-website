import React from 'react';
import ContactIcon from './ContactIcon';
import { CONTACT } from '../../constants';
import Title from '../layouts/Title';
import { FiMail, FiPhone } from 'react-icons/fi';

const Contact = () => {
  return (
    <section id="contact" className="border-b border-gray-600 pb-2 font-bodyFont px-4 md:px-8"> {/* Padding added */}
      <Title title="Contact Me" />
      {/* Responsive layout for stacking on smaller screens */}
      <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4 md:gap-4">
        <div className="flex flex-col justify-center tracking-tighter mb-2 md:mb-0">
          <p className="my-0 flex items-center"> {/* Reduced margin for closer alignment */}
            <FiMail className="mr-1" /> {/* Reduced margin-right */}
            <a href={`mailto:${CONTACT.email}`} className="font-bodyFont hover:underline">
              {CONTACT.email}
            </a>
          </p>
          <p className="my-0 flex items-center"> {/* Reduced margin for closer alignment */}
            <FiPhone className="mr-1" /> {/* Reduced margin-right */}
            <a href={`tel:${CONTACT.phone}`} className="font-bodyFont hover:underline">
              {CONTACT.phone}
            </a>
          </p>
        </div>
        {/* Reduced gap between contact info and icons */}
        <ContactIcon />
      </div>
    </section>
  );
};

export default Contact;
