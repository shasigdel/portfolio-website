import React from "react";
import { FaPhone, FaEnvelope } from "react-icons/fa";
import { CONTACT, SOCIAL } from "../../constants";

const ContactIcon = () => {
  return (
    <div className="w-full max-w-lg flex flex-col gap-8">
      {/* Container for Get in Touch & Follow Me */}
      <div className="flex flex-col md:flex-row items-center md:items-start justify-between w-full space-y-6 md:space-y-0 gap-20">
        
        {/* Get in Touch Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2">
          <h2 className="text-lg uppercase font-semibold text-gray-300 tracking-wide">
            Get in Touch
          </h2>
          <div className="flex flex-col gap-3 text-gray-400">
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

        {/* Follow Me Section */}
        <div className="flex flex-col gap-4 w-full md:w-1/2 md:ml-6">
          <h2 className="text-lg uppercase font-semibold text-gray-300 tracking-wide">
            Follow Me
          </h2>
          <div className="flex flex-wrap gap-5">
            {SOCIAL.map(({ href, Icon, label, color }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`text-2xl md:text-3xl transition-all duration-300 ${color} hover:scale-105 hover:text-designColor`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactIcon;
