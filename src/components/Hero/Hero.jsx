import React from 'react';
import { NavLink } from 'react-router-dom';
import { BsCameraVideoFill } from 'react-icons/bs';
import heroBig from '../../assets/hero-big.jpg';
import heroMedium from '../../assets/hero-medium.jpg';
import heroSmall from '../../assets/hero-small.jpg';
import { FaClock } from 'react-icons/fa';

const Hero = () => {
  return (
    <section className="max-w-340 mx-auto px-4 lg:px-8 py-12 lg:py-20">
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left content */}
        <div className="flex-1 flex flex-col gap-6">
          {/* Badge */}
          <span className="self-start text-sm px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
            Welcome To Shunno Yoga
          </span>

          {/* Heading */}
          <h1 className="text-5xl lg:text-7xl font-medium text-[#11141B] leading-tight">
            Discover the <br /> Power of Yoga <br /> & Meditation
          </h1>

          {/* Description */}
          <p className="text-[#62826B]/60 font-medium leading-relaxed max-w-md">
            Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.
          </p>

          {/* CTA */}
          <NavLink
            to="/classes"
            className="self-start px-8 py-3 rounded-full font-medium text-[#FFEFC5] bg-[#62826B] hover:bg-[#11141B] hover:scale-110 transition-all duration-300"
          >
            Let's Get Started
          </NavLink>

          {/* Members */}
          <div className="flex items-center gap-3 mt-12">
            <div className="flex -space-x-4">
              <img src={heroSmall} alt="member" className="w-13 h-13 rounded-full object-cover border-2 border-white" />
              <img src={heroBig} alt="member" className="w-13 h-13 rounded-full object-cover border-2 border-white" />
              <span className="text-xs font-semibold bg-gray-100 w-13 h-13 rounded-full text-gray-600 flex items-center justify-center">81K+</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-md text-[#11141B]">Worldwide Members</span>
            </div>
          </div>
        </div>

        {/* Right images */}
        <div className="flex-1 relative flex flex-col items-end gap-8">

          {/* Big image top right */}
          <img src={heroBig} alt="yoga class" className="w-full max-w-151 rounded-2xl object-cover h-107.5 ml-auto" />

          {/* Card overlay - bottom left */}
          <div className="absolute bottom-16 left-0 lg:-left-22 bg-white border-[#E1EDE4] border-4 rounded-2xl shadow-xl overflow-hidden ">
            <img src={heroSmall} alt="yoga beginners" className="w-78 h-47 object-cover" />
            <div className="px-6 py-3">
              <p className="text-xl font-semibold text-[#11141B] py-3">Yoga For Beginners</p>
              <div className="flex items-center gap-5 mt-1.5 mb-4 font-semibold text-[#62826B]/70">
                <span className="flex items-center gap-2">
                  <BsCameraVideoFill size={20} className="text-[#62826B] w-5" /> 6 Videos
                </span>
                <span className="flex items-center gap-2">
                  <FaClock size={20} className="text-[#62826B]" /> 12 Hours
                </span>
              </div>
            </div>
          </div>

          {/* medium image bottom right */}
          <img src={heroMedium} alt="yoga session"className=" w-93 h-65 rounded-2xl object-cover" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
