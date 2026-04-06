import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { FaPlay } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { PiStackLight } from 'react-icons/pi';

const videos = [
  {
    id: 1,
    youtubeId: 'v7AYKMP6rOE',
    title: '20 Min Morning Yoga',
    instructor: 'Yoga With Adriene',
    level: 'Beginner',
    duration: '20 min',
    category: 'Morning Yoga',
    desc: 'A gentle morning flow to wake up your body and set a positive tone for the day.',
  },
  {
    id: 2,
    youtubeId: 'COp7BR_Dvps',
    title: 'Full Body Yoga for Flexibility',
    instructor: 'Yoga With Adriene',
    level: 'All Levels',
    duration: '30 min',
    category: 'Flexibility',
    desc: 'Improve your flexibility and release tension with this full body yoga session.',
  },
  {
    id: 3,
    youtubeId: 'hJbRpHZr_d0',
    title: 'Yoga for Stress & Anxiety',
    instructor: 'Yoga With Adriene',
    level: 'Beginner',
    duration: '25 min',
    category: 'Relaxation',
    desc: 'Calm your mind and release stress with this soothing yoga practice.',
  },
  {
    id: 4,
    youtubeId: 'oBu-pQG6sTY',
    title: '10 Min Meditation for Beginners',
    instructor: 'Great Meditation',
    level: 'Beginner',
    duration: '10 min',
    category: 'Meditation',
    desc: 'A simple guided meditation to help you find calm and clarity.',
  },
  {
    id: 5,
    youtubeId: 'j0uCrA7ePno',
    title: 'Yoga for Deep Sleep',
    instructor: 'Yoga With Adriene',
    level: 'All Levels',
    duration: '20 min',
    category: 'Sleep',
    desc: 'Wind down before bed with this relaxing yoga sequence for better sleep.',
  },
  {
    id: 6,
    youtubeId: 'b1H3xO3x_Js',
    title: 'Power Yoga Full Body Workout',
    instructor: 'Yoga With Bird',
    level: 'Intermediate',
    duration: '35 min',
    category: 'Strength',
    desc: 'Build strength and endurance with this energizing power yoga flow.',
  },
];

const categories = ['All', 'Morning Yoga', 'Flexibility', 'Relaxation', 'Meditation', 'Sleep', 'Strength'];

const Video = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);

  const filtered = activeCategory === 'All' ? videos : videos.filter(v => v.category === activeCategory);

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-10">
          <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">
            Video Classes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Watch & Practice</h2>
          <p className="text-gray-500 max-w-md">Follow along with our expert-led video sessions for all levels and goals.</p>
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-3 mb-10">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer"
              style={{
                backgroundColor: activeCategory === cat ? '#62826B' : 'white',
                color: activeCategory === cat ? '#FFEFC5' : '#11141B',
                borderColor: activeCategory === cat ? '#62826B' : '#e5e7eb',
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Video grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filtered.map(video => (
            <div key={video.id} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">

              {/* Thumbnail / Player */}
              <div className="relative aspect-video bg-black">
                {activeVideo === video.id ? (
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                ) : (
                  <>
                    <img
                      src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                    <button
                      onClick={() => setActiveVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200"
                    >
                      <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                        <FaPlay size={18} className="text-[#62826B] ml-1" />
                      </div>
                    </button>
                  </>
                )}
              </div>

              {/* Info */}
              <div className="flex flex-col gap-3 p-5 flex-1">
                <div className="flex items-center gap-3 text-xs text-gray-400">
                  <span className="flex items-center gap-1">
                    <PiStackLight size={14} className="text-[#62826B]" /> {video.level}
                  </span>
                  <span className="flex items-center gap-1">
                    <IoTimeOutline size={14} className="text-[#62826B]" /> {video.duration}
                  </span>
                </div>
                <h3 className="font-bold text-[#11141B] leading-snug">{video.title}</h3>
                <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{video.desc}</p>
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-400">{video.instructor}</span>
                  <span className="px-3 py-1 rounded-full bg-[#62826B]/10 text-xs font-medium text-[#62826B]">
                    {video.category}
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Video;
