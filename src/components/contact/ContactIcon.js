import React from 'react'
import {FaInstagram, FaTwitter, FaLinkedin, FaGithub} from "react-icons/fa"

const ContactIcon = () => {
  return (
    <div>
      <h2 className='text-base uppercase font-titleFont mb-4'>Follow me</h2>
    <div className='flex gap-4'>
      <span className='bannerIcon'>
        <a href='https://www.instagram.com/shashanksigdel/'><FaInstagram /></a>
      </span>
      <span className='bannerIcon'>
      <a href='https://x.com/shashanksig'><FaTwitter /></a>
      </span>
      <span className='bannerIcon'>
      <a href='https://www.linkedin.com/in/shashanksigdel1429/'><FaLinkedin /></a>
      </span>
      <span className='bannerIcon'>
      <a href='https://github.com/shasigdel'><FaGithub /></a>
      </span>
      </div>
      </div>
  )
}

export default ContactIcon
