import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import {  FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <div className="w-full pr-20 h-20 fixed top-0 z-50 bg-gray-900/90 px-8 flex justify-end items-center font-titleFont shadow-lg">
      
      {/* Full navigation for large screens */}
      <div className="hidden sm:flex items-center justify-end w-full max-w-7xl">
        <ul className="flex items-center gap-10 text-lg">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              
                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-designColor duration-300"
                >
                  {title}
                </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Burger Menu Button (Visible on small screens) */}
      <div className="sm:hidden z-50">
        <button onClick={toggleMenu} aria-label="Toggle menu" className="text-3xl text-gray-300">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu (Visible when isOpen) */}
      <div
        className={`absolute top-[100%] right-0 w-full bg-gray-900/95 shadow-xl transition-transform duration-300 sm:hidden ${
          isOpen ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 p-5 text-lg">
          {navLinksdata.map(({ _id, title, link }) => (
            <li key={_id} className="text-gray-300 tracking-wide cursor-pointer hover:text-designColor duration-300">

                <Link
                  activeClass="active"
                  to={link}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                  className="hover:text-designColor duration-300"
                  onClick={toggleMenu} // Close menu when clicked
                >
                  {title}
                </Link>
            </li>
          ))}
        </ul>
      </div>
      
    </div>
  );
};

export default Navbar;
