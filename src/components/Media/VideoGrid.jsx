import React, { useState } from 'react';
import { FaPlay } from 'react-icons/fa';
import { IoTimeOutline } from 'react-icons/io5';
import { PiStackLight } from 'react-icons/pi';
import Pagination from './Pagination';

const PER_PAGE = 6;

const VideoGrid = ({ videos, categories }) => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [activeVideo, setActiveVideo] = useState(null);
  const [page, setPage] = useState(1);

  const filtered = activeCategory === 'All' ? videos : videos.filter(v => v.category === activeCategory);
  const totalPages = Math.ceil(filtered.length / PER_PAGE);
  const paged = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  const handleCategoryChange = (cat) => { setActiveCategory(cat); setPage(1); };

  return (
    <div>
      {/* Category filter */}
      <div className="flex flex-wrap gap-3 mb-10">
        {categories.map(cat => (
          <button key={cat} onClick={() => handleCategoryChange(cat)}
            className="px-4 py-2 rounded-full text-sm font-medium border transition-all duration-300 cursor-pointer"
            style={{
              backgroundColor: activeCategory === cat ? '#62826B' : 'white',
              color: activeCategory === cat ? '#FFEFC5' : '#11141B',
              borderColor: activeCategory === cat ? '#62826B' : '#e5e7eb',
            }}>
            {cat}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {paged.map(video => (
          <div key={video.id} className="flex flex-col rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow duration-300">
            <div className="relative aspect-video bg-black">
              {activeVideo === video.id ? (
                <iframe src={`https://www.youtube.com/embed/${video.youtubeId}?autoplay=1`} title={video.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen className="w-full h-full" />
              ) : (
                <>
                  <img src={`https://img.youtube.com/vi/${video.youtubeId}/hqdefault.jpg`} alt={video.title} className="w-full h-full object-cover" />
                  <button onClick={() => setActiveVideo(video.id)}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors duration-200">
                    <div className="w-14 h-14 rounded-full bg-white/90 flex items-center justify-center">
                      <FaPlay size={18} className="text-[#62826B] ml-1" />
                    </div>
                  </button>
                </>
              )}
            </div>
            <div className="flex flex-col gap-3 p-5 flex-1">
              <div className="flex items-center gap-3 text-xs text-gray-400">
                <span className="flex items-center gap-1"><PiStackLight size={14} className="text-[#62826B]" /> {video.level}</span>
                <span className="flex items-center gap-1"><IoTimeOutline size={14} className="text-[#62826B]" /> {video.duration}</span>
              </div>
              <h3 className="font-bold text-[#11141B] leading-snug">{video.title}</h3>
              <p className="text-xs text-gray-400 leading-relaxed line-clamp-2">{video.desc}</p>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                <span className="text-xs text-gray-400">{video.instructor}</span>
                <span className="px-3 py-1 rounded-full bg-[#62826B]/10 text-xs font-medium text-[#62826B]">{video.category}</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} total={filtered.length} label="videos" onPageChange={setPage} />
    </div>
  );
};

export default VideoGrid;
