import React from "react";
import { shashank2 } from "../../assets";
import { FaEnvelope, FaGit, FaLinkedinIn, FaPhone } from "react-icons/fa6";
import { CONTACT } from "../../constants";

const HeroCard = () => {
  return (
    <div className="flex flex-col items-center justify-center px-6 sm:px-12 py-14">
      {/* Profile Card */}
      <div className="bg-gradient-to-b from-gray-800 via-gray-900 to-black rounded-2xl p-8 sm:p-10 text-center shadow-xl w-[350px] sm:w-[420px] h-[500px] sm:h-[540px]">
        {/* Profile Image */}
        <div className="relative">
          <img
            src={shashank2}
            alt="Shashank Sigdel"
            className="w-40 h-40 sm:w-44 sm:h-44 mx-auto rounded-full  shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Name & Title */}
        <h3 className="text-2xl font-bold text-white mt-4">Shashank Sigdel</h3>
        <p className="text-sm sm:text-base text-designColor mt-1">Software Engineer</p>

        {/* Hero Description */}
        <div className="mt-4 px-4 text-xs sm:text-sm text-gray-300 leading-relaxed">
          <p>
            Full-stack developer skilled in React, TypeScript, Java Spring, and Python. Passionate about building scalable applications, seamless user experiences, and robust backend systems.
          </p>
        </div>

        {/* Social Links */}
        <div className="mt-2 flex justify-center space-x-5">
          <a
            href="https://github.com/shasigdel"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-designColor transition-transform duration-300 transform hover:scale-110"
          >
            <FaGit className="w-7 h-7 text-orange-500" />
          </a>
          <a
            href="https://www.linkedin.com/in/shashanksigdel1429/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-designColor transition-transform duration-300 transform hover:scale-110"
          >
            <FaLinkedinIn className="w-7 h-7 text-blue-500" />
          </a>
        </div>

        {/* Email & Phone Number */}
        <div className="mt-5 flex flex-col items-center space-y-3">
          <a
            href={`mailto:${CONTACT.email}`}
            className="flex items-center gap-2 hover:text-designColor transition-all"
          >
            <FaEnvelope className="text-xl" /> {CONTACT.email}
          </a>
          <a
            href={`tel:${CONTACT.phone}`}
            className="flex items-center gap-2 hover:text-designColor transition-all"
          >
            <FaPhone className="text-xl" /> {CONTACT.phone}
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroCard;
