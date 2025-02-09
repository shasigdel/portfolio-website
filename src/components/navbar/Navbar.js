import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { resumeSWE } from '../../assets';
import { FaDownload, FaTimes, FaBars } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return ( 
    <div className="w-full h-24 fixed top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont">
      {/* Full navigation items for larger screens */}
      <div className="hidden sm:flex items-center justify-center w-full">
        <ul className="flex items-center gap-5">
          {navLinksdata.map(({ _id, title, link }) => (
            <li
              className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
              key={_id}
            >
              {title === "Resume" ? (
                <a
<<<<<<< HEAD
                  href={resume}
                  download="shashank-sigdel-resume.pdf"
=======
                  href={resumeSWE}
                  download="ShashankSigdel-resume.pdf"
>>>>>>> 60befc4b8888b29fd059d88a1aa4c1cc2314c37f
                  className="hover:text-designColor duration-300 flex items-center"
                >
                  <FaDownload className="mr-2" />
                  {title}
                </a>
              ) : (
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
              )}
            </li>
          ))}
        </ul>
      </div>

      {/* Burger Menu: Only for small screens, centered */}
      <div className="sm:hidden absolute right-1/2 transform -translate-x-1/2">
        <button onClick={toggleMenu} aria-label="Toggle menu">
          {isOpen ? <FaTimes className="text-xl text-gray-400" /> : <FaBars className="text-xl text-gray-400" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className={`absolute top-full left-0 w-full bg-gray-900 z-40 sm:hidden`}>
          <ul className="flex flex-col items-center gap-5 p-4">
            {navLinksdata.map(({ _id, title, link }) => (
              <li
                className="text-base font-normal text-gray-400 tracking-wide cursor-pointer hover:text-designColor duration-300"
                key={_id}
              >
                {title === "Resume" ? (
                  <a
                    href={resumeSWE}
                    download="ShashankSigdel-resume.pdf"
                    className="hover:text-designColor duration-300 flex items-center"
                  >
                    <FaDownload className="mr-2" />
                    {title}
                  </a>
                ) : (
                  <Link
                    activeClass="active"
                    to={link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                    className="hover:text-designColor duration-300"
                    onClick={toggleMenu}
                  >
                    {title}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Navbar;
