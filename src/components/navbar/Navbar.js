import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { resume } from '../../assets';
import { FaDownload, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Detect scroll to change background of navbar
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div 
      className={`w-full h-16 fixed top-0 left-0 z-50 flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600 transition-all duration-300 box-border px-4 sm:px-8 ${
        scrolled ? 'bg-gray-900 shadow-lg' : 'bg-bodyColor'
      }`}
    >
      <div> 
        <p className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
        hover:text-designColor duration-300 flex gap-10 items-center'>
          <span className="block sm:hidden">SS</span> 
          <span className="hidden sm:block">Shashank Sigdel</span>
        </p>
      </div>

      {/* Burger Icon */}
      <div className="sm:hidden">
        <button onClick={toggleMenu}>
          {isOpen ? <FaTimes className="text-xl text-gray-400" /> : <FaBars className="text-xl text-gray-400" />}
        </button>
      </div>

      {/* Navbar Links */}
      <div className={`sm:flex items-center gap-10 ${isOpen ? 'block' : 'hidden'} sm:block`}>
        <ul className='flex flex-col sm:flex-row items-center gap-10'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li 
              className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                hover:text-designColor duration-300' 
              key={_id}>
              {title === "Resume" ? (
                <a
                  href={resume}
                  download="ShashankSigdel-resume.pdf"
                  className="hover:text-designColor duration-300 flex items-center gap-2"
                >
                  <FaDownload/>
                  {title}
                </a>
              ) : (
                <Link 
                  activeClass="active" // Ensure this active class is applied
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  onClick={toggleMenu} // Close the menu when clicked
                  className="cursor-pointer"
                >
                  {title}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
