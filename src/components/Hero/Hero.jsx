import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { BsCameraVideoFill } from 'react-icons/bs';
import { FaClock } from 'react-icons/fa';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import heroBig from '../../assets/hero-big.jpg';
import heroMedium from '../../assets/hero-medium.jpg';
import heroSmall from '../../assets/hero-small.jpg';
import morningYoga from '../../assets/morningYoga.jpg';
import meditation from '../../assets/meditation.jpg';
import powerYoga from '../../assets/powerYoga.jpg';

const slides = [
  {
    badge: 'Welcome To Shunno Yoga',
    title: 'Discover the Power of Yoga & Meditation',
    desc: 'Id massa id tortor interdum consectetur eu ultrices viverra. Est aliquet pellentesque potenti.',
    bigImg: heroBig,
    cardImg: heroSmall,
    bottomImg: heroMedium,
    cardTitle: 'Yoga For Beginners',
    cardVideos: '6 Videos',
    cardHours: '12 Hours',
    ctaPath: '/media',
  },
  {
    badge: 'Find Your Inner Peace',
    title: 'Start Your Morning with Mindful Yoga Flow',
    desc: 'Tristique posuere bibendum id auctor pellentesque. Donec diam blandit vitae quam in donec.',
    bigImg: morningYoga,
    cardImg: meditation,
    bottomImg: powerYoga,
    cardTitle: 'Morning Flow',
    cardVideos: '8 Videos',
    cardHours: '10 Hours',
    ctaPath: '/media/audio',
  },
  {
    badge: 'Transform Your Life',
    title: 'Build Strength & Balance Through Meditation',
    desc: 'Amet amet quam tincidunt faucibus eget ac porta. Dictum tristique in at est pellentesque.',
    bigImg: powerYoga,
    cardImg: morningYoga,
    bottomImg: meditation,
    cardTitle: 'Power Yoga',
    cardVideos: '10 Videos',
    cardHours: '15 Hours',
    ctaPath: '/media/video',
  },
];

const Hero = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const s = slides[activeIndex];

  return (
    <section className="max-w-340 mx-auto px-6 lg:px-12 py-12 lg:py-20 overflow-hidden">
      <div className="flex flex-col lg:flex-row items-center gap-10">

        {/* Left content */}
        <div key={activeIndex} className="flex-1 flex flex-col gap-6 animate-fade-in">
          <span className="self-start text-sm px-4 py-1.5 rounded-full border border-gray-300 text-gray-800">
            {s.badge}
          </span>

          <h1 className="text-4xl lg:text-6xl font-medium text-[#11141B] leading-tight">
            {s.title}
          </h1>

          <p className="text-[#62826B]/60 font-medium leading-relaxed max-w-md">
            {s.desc}
          </p>

          <NavLink
            to={s.ctaPath}
            className="self-start px-8 py-3 rounded-full font-medium text-[#FFEFC5] bg-[#62826B] hover:bg-[#11141B] hover:scale-110 transition-all duration-300"
          >
            Let's Get Started
          </NavLink>

          <div className="flex items-center gap-3 mt-12">
            <div className="flex -space-x-4">
              <img src={heroSmall} alt="member" className="w-13 h-13 rounded-full object-cover border-2 border-white" />
              <img src={heroBig} alt="member" className="w-13 h-13 rounded-full object-cover border-2 border-white" />
              <span className="text-xs font-semibold bg-gray-100 w-13 h-13 rounded-full text-gray-600 flex items-center justify-center">81K+</span>
            </div>
            <span className="text-md text-[#11141B]">Worldwide Members</span>
          </div>
        </div>

        {/* Right — Swiper only slides images */}
        <div className="flex-1 overflow-hidden">
          <Swiper
            modules={[Autoplay]}
            autoplay={{ delay: 4000, disableOnInteraction: false }}
            loop={true}
            speed={700}
            onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
          >
            {slides.map((slide, i) => (
              <SwiperSlide key={i}>
                <div className="relative flex flex-col items-end gap-8">
                  {/* Big image */}
                  <img
                    src={slide.bigImg}
                    alt="yoga class"
                    className="w-full max-w-151 rounded-2xl object-cover h-107.5 ml-auto"
                  />

                  {/* Card overlay */}
                  <div className="absolute bottom-26 left-10  bg-white border-[#E1EDE4] border-4 rounded-2xl shadow-xl overflow-hidden">
                    <img src={slide.cardImg} alt={slide.cardTitle} className="w-78 h-47 object-cover" />
                    <div className="px-6 py-3">
                      <p className="text-xl font-semibold text-[#11141B] py-3">{slide.cardTitle}</p>
                      <div className="flex items-center gap-5 mt-1.5 mb-4 font-semibold text-[#62826B]/70">
                        <span className="flex items-center gap-2">
                          <BsCameraVideoFill size={20} className="text-[#62826B]" /> {slide.cardVideos}
                        </span>
                        <span className="flex items-center gap-2">
                          <FaClock size={20} className="text-[#62826B]" /> {slide.cardHours}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom image */}
                  <img src={slide.bottomImg} alt="yoga session" className="w-93 h-65 rounded-2xl object-cover" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

      </div>
    </section>
  );
};

export default Hero;
