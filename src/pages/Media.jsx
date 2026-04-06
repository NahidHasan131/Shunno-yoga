import React, { useState, useRef, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { NavLink } from 'react-router-dom';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { IoTimeOutline, IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';
import { PiStackLight } from 'react-icons/pi';
import morningYoga from '../assets/morningYoga.jpg';
import meditation from '../assets/meditation.jpg';
import powerYoga from '../assets/powerYoga.jpg';
import track1 from '../assets/music/Late-at-Night.mp3';
import track2 from '../assets/music/Magical-Moments.mp3';
import track3 from '../assets/music/Missing-You.mp3';
import track4 from '../assets/music/Sonder.mp3';
import track5 from '../assets/music/Tokyo-Music-Walker-Brunch-For-Two.mp3';

const classes = [
  { img: morningYoga, level: 'Beginner', duration: '30 min', title: 'Morning Yoga Flow', members: '164+ Members', desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.', path: '/media/video' },
  { img: meditation, level: 'Intermediate', duration: '20 min', title: 'Meditation Stress Relief', members: '164+ Members', desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.', path: '/media/video' },
  { img: powerYoga, level: 'Advanced', duration: '45 min', title: 'Power Yoga for Strength', members: '164+ Members', desc: 'Consectetur eu ultrices viverra est aliquet pellentesque potenti.', path: '/media/audio' },
];

const videos = [
  { id: 1, youtubeId: 'v7AYKMP6rOE', title: '20 Min Morning Yoga', instructor: 'Yoga With Adriene', level: 'Beginner', duration: '20 min', category: 'Morning Yoga' },
  { id: 2, youtubeId: 'COp7BR_Dvps', title: 'Full Body Yoga for Flexibility', instructor: 'Yoga With Adriene', level: 'All Levels', duration: '30 min', category: 'Flexibility' },
  { id: 3, youtubeId: 'hJbRpHZr_d0', title: 'Yoga for Stress & Anxiety', instructor: 'Yoga With Adriene', level: 'Beginner', duration: '25 min', category: 'Relaxation' },
  { id: 4, youtubeId: 'oBu-pQG6sTY', title: '10 Min Meditation for Beginners', instructor: 'Great Meditation', level: 'Beginner', duration: '10 min', category: 'Meditation' },
  { id: 5, youtubeId: 'j0uCrA7ePno', title: 'Yoga for Deep Sleep', instructor: 'Yoga With Adriene', level: 'All Levels', duration: '20 min', category: 'Sleep' },
  { id: 6, youtubeId: 'b1H3xO3x_Js', title: 'Power Yoga Full Body Workout', instructor: 'Yoga With Bird', level: 'Intermediate', duration: '35 min', category: 'Strength' },
];

const tracks = [
  { id: 1, title: 'Late at Night',   category: 'Relaxation',   src: track1 },
  { id: 2, title: 'Magical Moments', category: 'Meditation',   src: track2 },
  { id: 3, title: 'Missing You',     category: 'Mindfulness',  src: track3 },
  { id: 4, title: 'Sonder',          category: 'Deep Focus',   src: track4 },
  { id: 5, title: 'Brunch For Two',  category: 'Morning Yoga', src: track5 },
];

const formatTime = (sec) => {
  if (!sec || isNaN(sec)) return '0:00';
  return `${Math.floor(sec / 60)}:${Math.floor(sec % 60).toString().padStart(2, '0')}`;
};

const tabs = ['Classes', 'Videos', 'Audio'];

const Media = () => {
  const [activeTab, setActiveTab] = useState('Classes');
  const [activeVideo, setActiveVideo] = useState(null);

  // Audio state
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);
  const current = tracks[currentIndex];

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.load();
      if (isPlaying) audioRef.current.play();
    }
  }, [currentIndex]);

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) { audioRef.current.pause(); setIsPlaying(false); }
    else { audioRef.current.play(); setIsPlaying(true); }
  };
  const playTrack = (i) => { setCurrentIndex(i); setIsPlaying(true); setProgress(0); };
  const prev = () => playTrack((currentIndex - 1 + tracks.length) % tracks.length);
  const next = () => playTrack((currentIndex + 1) % tracks.length);

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div className="flex flex-col gap-3">
            <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">Media</span>
            <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Explore All Content</h2>
            <p className="text-gray-500 max-w-md">Classes, videos and audio sessions — everything you need for your wellness journey.</p>
          </div>

          {/* Tabs */}
          <div className="flex items-center gap-2 bg-[#F0F7F2] p-1.5 rounded-full">
            {tabs.map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className="px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 cursor-pointer"
                style={{
                  backgroundColor: activeTab === tab ? '#62826B' : 'transparent',
                  color: activeTab === tab ? '#FFEFC5' : '#11141B',
                }}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Classes tab */}
        {activeTab === 'Classes' && (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {classes.map(cls => (
              <div key={cls.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden flex flex-col hover:shadow-md transition-shadow duration-300">
                <img src={cls.img} alt={cls.title} className="w-full h-52 object-cover" />
                <div className="p-6 flex flex-col gap-4 flex-1">
                  <div className="flex items-center gap-4 text-sm font-semibold text-[#62826B]/70">
                    <span className="flex items-center gap-1"><PiStackLight size={16} /> {cls.level}</span>
                    <span className="flex items-center gap-1"><IoTimeOutline size={16} /> {cls.duration}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-[#11141B]">{cls.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{cls.desc}</p>
                  <NavLink to={cls.path} className="text-center py-2.5 rounded-full border border-gray-200 text-sm font-medium text-[#62826B] hover:bg-[#62826B] hover:text-[#FFEFC5] transition-all duration-300">
                    Start Class
                  </NavLink>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Videos tab */}
        {activeTab === 'Videos' && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map(video => (
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
                        className="absolute inset-0 flex items-center justify-center bg-black/30 hover:bg-black/40 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                          <FaPlay size={16} className="text-[#62826B] ml-1" />
                        </div>
                      </button>
                    </>
                  )}
                </div>
                <div className="flex flex-col gap-2 p-4">
                  <div className="flex items-center gap-3 text-xs text-gray-400">
                    <span className="flex items-center gap-1"><PiStackLight size={13} className="text-[#62826B]" /> {video.level}</span>
                    <span className="flex items-center gap-1"><IoTimeOutline size={13} className="text-[#62826B]" /> {video.duration}</span>
                  </div>
                  <h3 className="font-bold text-[#11141B] text-sm leading-snug">{video.title}</h3>
                  <div className="flex items-center justify-between pt-2 border-t border-gray-100">
                    <span className="text-xs text-gray-400">{video.instructor}</span>
                    <span className="px-2 py-0.5 rounded-full bg-[#62826B]/10 text-xs text-[#62826B]">{video.category}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Audio tab */}
        {activeTab === 'Audio' && (
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1 flex flex-col gap-3">
              {tracks.map((track, i) => (
                <div key={track.id} onClick={() => playTrack(i)}
                  className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 ${currentIndex === i ? 'bg-[#62826B]' : 'bg-[#F0F7F2] hover:bg-[#e6f2ea]'}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${currentIndex === i ? 'bg-white/20' : 'bg-white'}`}>
                    {currentIndex === i && isPlaying
                      ? <FaPause size={13} className="text-[#62826B]" />
                      : <FaPlay size={13} className={currentIndex === i ? 'text-white' : 'text-[#62826B]'} />}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className={`font-semibold truncate ${currentIndex === i ? 'text-white' : 'text-[#11141B]'}`}>{track.title}</p>
                    <p className={`text-xs mt-0.5 ${currentIndex === i ? 'text-white/70' : 'text-gray-400'}`}>{track.category}</p>
                  </div>
                  <span className={`text-xs shrink-0 ${currentIndex === i ? 'text-white/70' : 'text-gray-400'}`}>
                    {currentIndex === i ? formatTime(duration) : '–'}
                  </span>
                </div>
              ))}
            </div>

            <div className="lg:w-72 shrink-0">
              <div className="bg-[#11141B] rounded-3xl p-7 flex flex-col gap-5 sticky top-24">
                <div className="flex flex-col items-center gap-2 text-center">
                  <div className="w-16 h-16 rounded-full bg-[#62826B]/20 flex items-center justify-center text-3xl mb-1">🎵</div>
                  <h3 className="text-white font-bold">{current.title}</h3>
                  <span className="text-xs text-gray-400 px-3 py-1 rounded-full bg-white/10">{current.category}</span>
                </div>
                <div className="flex flex-col gap-1.5">
                  <input type="range" min={0} max={duration || 0} value={progress}
                    onChange={e => { audioRef.current.currentTime = Number(e.target.value); setProgress(Number(e.target.value)); }}
                    className="w-full accent-[#62826B] cursor-pointer" />
                  <div className="flex justify-between text-xs text-gray-400">
                    <span>{formatTime(progress)}</span><span>{formatTime(duration)}</span>
                  </div>
                </div>
                <div className="flex items-center justify-center gap-5">
                  <button onClick={prev} className="text-gray-400 hover:text-white transition-colors"><MdSkipPrevious size={26} /></button>
                  <button onClick={togglePlay} className="w-12 h-12 rounded-full bg-[#62826B] flex items-center justify-center hover:opacity-80 transition-opacity">
                    {isPlaying ? <FaPause size={16} className="text-white" /> : <FaPlay size={16} className="text-white ml-0.5" />}
                  </button>
                  <button onClick={next} className="text-gray-400 hover:text-white transition-colors"><MdSkipNext size={26} /></button>
                </div>
                <div className="flex items-center gap-3">
                  <button onClick={() => { setMuted(!muted); audioRef.current.muted = !muted; }} className="text-gray-400 hover:text-white transition-colors shrink-0">
                    {muted ? <IoVolumeMuteOutline size={18} /> : <IoVolumeHighOutline size={18} />}
                  </button>
                  <input type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume}
                    onChange={e => { setVolume(Number(e.target.value)); audioRef.current.volume = Number(e.target.value); setMuted(Number(e.target.value) === 0); }}
                    className="flex-1 accent-[#62826B] cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        )}

      </div>

      <audio ref={audioRef} src={current.src}
        onTimeUpdate={() => setProgress(audioRef.current?.currentTime || 0)}
        onLoadedMetadata={() => setDuration(audioRef.current?.duration || 0)}
        onEnded={next} />
    </div>
  );
};

export default Media;
