import React from 'react';
import { FaInstagram, FaGithub } from "react-icons/fa";
import { FaX } from 'react-icons/fa6';
import { ImLinkedin2 } from 'react-icons/im';

const ContactIcon = () => {
  return (
    <div>
      <h2 className='text-base uppercase font-titleFont mb-4'>Follow me</h2>
      <div className='flex gap-4'>
        <span className='bannerIcon text-2xl sm:text-3xl'> {/* Decrease size on small screens */}
          <a href='https://www.instagram.com/shashanksigdel/'><FaInstagram /></a>
        </span>
        <span className='bannerIcon text-2xl sm:text-3xl'>
          <a href='https://x.com/shashanksig'><FaX /></a>
        </span>
        <span className='bannerIcon text-2xl sm:text-3xl'>
          <a href='https://www.linkedin.com/in/shashanksigdel1429/'><ImLinkedin2 /></a>
        </span>
        <span className='bannerIcon text-2xl sm:text-3xl'>
          <a href='https://github.com/shasigdel'><FaGithub /></a>
        </span>
      </div>
    </div>
  );
}

export default ContactIcon;
