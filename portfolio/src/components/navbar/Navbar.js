import React from 'react';
import { Link } from 'react-scroll';
import { navLinksdata } from '../../constants';
import { resume } from '../../assets';
import { FaDownload } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='w-full h-24 sticky top-0 z-50 bg-bodyColor mx-auto flex justify-between items-center font-titleFont border-b-[1px] border-b-gray-600'>
      <div className='ml-4 sm:ml-0'> 
        <p className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
        hover:text-designColor duration-300 flex gap-10 items-center'>
          <span className="block sm:hidden">SS</span> 
          <span className="hidden sm:block">Shashank Sigdel</span>
        </p>
      </div>
      <div>
        <ul className='flex items-center gap-10'>
          {navLinksdata.map(({ _id, title, link }) => (
            <li 
              className='text-base font-normal text-gray-400 tracking-wide cursor-pointer
                hover:text-designColor duration-300' 
              key={_id}>
              {title === "Resume" ? (
                <a
                  href={resume}
                  download="ShashankSigdel-resume.pdf"
                  className="hover:text-designColor duration-300 flex"
                ><FaDownload/>
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
