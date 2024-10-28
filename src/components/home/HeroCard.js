import React from 'react'
import { shashank2 } from '../../assets'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const HeroCard = () => {
  return (
    <div className="bg-gradient-to-r from-gray-700 via-gray-750 to-gray-1000 rounded-lg p-10 text-center shadow-lg w-98 mx-auto">
      {/* Increase image size */}
      <img src={shashank2} alt="Shashank Sigdel" className="w-64 h-64 mx-auto rounded-full mb-6 border-4 border-gray-600" />
      <h3 className="text-2xl font-semibold text-white">Shashank Sigdel</h3>
      <p className="text-gray-400 mt-2">Software Engineer</p>
      <div className="mt-6 flex justify-center space-x-8">
        {/* Increase icon size */}
        <a href="https://github.com/shasigdel" className="text-gray-400 hover:text-white">
          <FaGithub className="w-8 h-8" />
        </a>
        <a href="https://www.linkedin.com/in/shashanksigdel1429/" className="text-gray-400 hover:text-white">
          <FaLinkedin className="w-8 h-8" />
        </a>
      </div>
    </div>
  )
}

export default HeroCard
