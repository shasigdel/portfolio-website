import React from "react";
import ContactIcon from "./ContactIcon";
import Title from "../layouts/Title";

const Contact = () => {
  return (
    <section
      id="contact"
      className="pb-10 px-6 md:px-10 text-gray-200 font-bodyFont flex flex-col items-center 
                 bg-gradient-to-b from-gray-950 via-gray-900 to-gray-800 rounded-lg shadow-lg p-8 "
    >
      {/* Section Title */}
      <Title title="Contact" />

      {/* Centered Content */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row justify-between items-center md:items-start text-center md:text-left space-y-6 md:space-y-0">
        {/* Social Icons */}
        <div className="flex flex-row items-center justify-evenly w-full md:w-auto space-x-10">
          <ContactIcon />
          {/* Add more social media icons here */}
        </div>
      </div>
    </section>
  );
};

export default Contact;
