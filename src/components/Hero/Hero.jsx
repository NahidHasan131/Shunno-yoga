import React, { useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import { MdArrowBackIos, MdArrowForwardIos } from 'react-icons/md';
import heroBig    from '../../assets/hero-big.jpg';
import morningYoga from '../../assets/morningYoga.jpg';
import powerYoga  from '../../assets/powerYoga.jpg';

const slides = [
  {
    img:     heroBig,
    badge:   'Welcome To Shunno Yoga',
    title:   'Discover the Power of Yoga & Meditation',
    desc:    'Begin your wellness journey with expert-led classes designed for all levels. Find peace, strength and balance.',
    ctaPath: '/media',
    ctaText: 'Explore Classes',
  },
  {
    img:     morningYoga,
    badge:   'Find Your Inner Peace',
    title:   'Start Your Morning with Mindful Yoga Flow',
    desc:    'A gentle morning routine that energizes your body and clears your mind before the day begins.',
    ctaPath: '/media/audio',
    ctaText: 'Listen Now',
  },
  {
    img:     powerYoga,
    badge:   'Transform Your Life',
    title:   'Build Strength & Balance Through Meditation',
    desc:    'Challenge yourself with power yoga and guided meditation sessions led by certified instructors.',
    ctaPath: '/media/video',
    ctaText: 'Watch Videos',
  },
];

const Hero = () => {
  const swiperRef = useRef(null);

  return (
    <section className="relative w-full">
      <Swiper
        modules={[Autoplay, Pagination, EffectFade]}
        effect="fade"
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={800}
        onSwiper={swiper => (swiperRef.current = swiper)}
        className="w-full"
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[80vh] min-h-120">
              {/* Background image */}
              <img
                src={slide.img}
                alt={slide.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-[#11141B]/60" />

              {/* Content */}
              <div className="relative z-10 h-full flex items-center justify-center">
                <div className="max-w-3xl mx-auto px-6 text-center flex flex-col items-center gap-6">
                  <span className="px-5 py-2 rounded-full bg-white/20 text-white text-sm font-medium backdrop-blur-sm border border-white/20">
                    {slide.badge}
                  </span>
                  <h1 className="text-4xl lg:text-6xl font-bold text-white leading-tight">
                    {slide.title}
                  </h1>
                  <p className="text-gray-200 text-base lg:text-lg leading-relaxed max-w-xl">
                    {slide.desc}
                  </p>
                  <NavLink
                    to={slide.ctaPath}
                    className="px-8 py-3.5 rounded-full bg-[#62826B] text-[#FFEFC5] font-semibold text-sm hover:bg-white hover:text-[#62826B] transition-all duration-300"
                  >
                    {slide.ctaText}
                  </NavLink>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev arrow */}
      <button
        onClick={() => swiperRef.current?.slidePrev()}
        className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-200"
        aria-label="Previous"
      >
        <MdArrowBackIos size={18} />
      </button>

      {/* Next arrow */}
      <button
        onClick={() => swiperRef.current?.slideNext()}
        className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 z-20 w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 flex items-center justify-center text-white hover:bg-white/40 transition-colors duration-200"
        aria-label="Next"
      >
        <MdArrowForwardIos size={18} />
      </button>

      {/* Custom dot styles */}
      <style>{`
        .swiper-pagination-bullet {
          background: white;
          opacity: 0.5;
          width: 8px;
          height: 8px;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          width: 24px;
          border-radius: 4px;
          background: #62826B;
        }
      `}</style>
    </section>
  );
};

export default Hero;
