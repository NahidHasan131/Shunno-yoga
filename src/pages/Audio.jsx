import React, { useState, useRef, useEffect } from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import { FaPlay, FaPause } from 'react-icons/fa';
import { MdSkipNext, MdSkipPrevious } from 'react-icons/md';
import { IoVolumeHighOutline, IoVolumeMuteOutline } from 'react-icons/io5';

import track1 from '../assets/music/Late-at-Night.mp3';
import track2 from '../assets/music/Magical-Moments.mp3';
import track3 from '../assets/music/Missing-You.mp3';
import track4 from '../assets/music/Sonder.mp3';
import track5 from '../assets/music/Tokyo-Music-Walker-Brunch-For-Two.mp3';

const tracks = [
  { id: 1, title: 'Late at Night',  category: 'Relaxation',  duration: '–', src: track1 },
  { id: 2, title: 'Magical Moments', category: 'Meditation',  duration: '–', src: track2 },
  { id: 3, title: 'Missing You', category: 'Mindfulness', duration: '–', src: track3 },
  { id: 4, title: 'Sonder', category: 'Deep Focus',  duration: '–', src: track4 },
  { id: 5, title: 'Brunch For Two', category: 'Morning Yoga',duration: '–', src: track5 },
];

const formatTime = (sec) => {
  if (!sec || isNaN(sec)) return '0:00';
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60).toString().padStart(2, '0');
  return `${m}:${s}`;
};

const Audio = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [muted, setMuted] = useState(false);
  const audioRef = useRef(null);

  const current = tracks[currentIndex];

  // when track changes, auto-play if already playing
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

  const handleTimeUpdate = () => {
    if (!audioRef.current) return;
    setProgress(audioRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    if (!audioRef.current) return;
    setDuration(audioRef.current.duration);
  };

  const handleSeek = (e) => {
    const val = Number(e.target.value);
    audioRef.current.currentTime = val;
    setProgress(val);
  };

  const handleVolume = (e) => {
    const val = Number(e.target.value);
    setVolume(val);
    audioRef.current.volume = val;
    setMuted(val === 0);
  };

  const toggleMute = () => {
    const next = !muted;
    setMuted(next);
    audioRef.current.muted = next;
  };

  const playTrack = (index) => {
    setCurrentIndex(index);
    setIsPlaying(true);
    setProgress(0);
  };

  const prev = () => playTrack((currentIndex - 1 + tracks.length) % tracks.length);
  const next = () => playTrack((currentIndex + 1) % tracks.length);

  const handleEnded = () => next();

  return (
    <div>
      <Breadcrumb />

      <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">

        {/* Header */}
        <div className="flex flex-col gap-3 mb-12">
          <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">
            Audio Classes
          </span>
          <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Guided Yoga Sessions</h2>
          <p className="text-gray-500 max-w-md">Listen and practice with our curated audio sessions for relaxation, meditation and mindfulness.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">

          {/* Track list */}
          <div className="flex-1 flex flex-col gap-3">
            {tracks.map((track, i) => (
              <div
                key={track.id}
                onClick={() => playTrack(i)}
                className={`flex items-center gap-4 p-4 rounded-2xl cursor-pointer transition-all duration-200 ${
                  currentIndex === i ? 'bg-[#62826B] text-white' : 'bg-[#F0F7F2] hover:bg-[#e6f2ea]'
                }`}
              >
                {/* Play indicator */}
                <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${
                  currentIndex === i ? 'bg-white/20' : 'bg-white'
                }`}>
                  {currentIndex === i && isPlaying
                    ? <FaPause size={14} className="text-[#62826B]" />
                    : <FaPlay size={14} className={currentIndex === i ? 'text-white' : 'text-[#62826B]'} />
                  }
                </div>

                <div className="flex-1 min-w-0">
                  <p className={`font-semibold truncate ${currentIndex === i ? 'text-white' : 'text-[#11141B]'}`}>
                    {track.title}
                  </p>
                  <p className={`text-xs mt-0.5 ${currentIndex === i ? 'text-white/70' : 'text-gray-400'}`}>
                    {track.category}
                  </p>
                </div>

                <span className={`text-xs shrink-0 ${currentIndex === i ? 'text-white/70' : 'text-gray-400'}`}>
                  {currentIndex === i ? formatTime(duration) : '–'}
                </span>
              </div>
            ))}
          </div>

          {/* Player */}
          <div className="lg:w-80 shrink-0">
            <div className="bg-[#11141B] rounded-3xl p-8 flex flex-col gap-6 sticky top-24">

              {/* Track info */}
              <div className="flex flex-col items-center gap-2 text-center">
                <div className="w-20 h-20 rounded-full bg-[#62826B]/20 flex items-center justify-center text-4xl mb-2">
                  🎵
                </div>
                <h3 className="text-white font-bold text-lg">{current.title}</h3>
                <span className="text-xs text-gray-400 px-3 py-1 rounded-full bg-white/10">{current.category}</span>
              </div>

              {/* Progress */}
              <div className="flex flex-col gap-2">
                <input
                  type="range" min={0} max={duration || 0} value={progress}
                  onChange={handleSeek}
                  className="w-full accent-[#62826B] cursor-pointer"
                />
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{formatTime(progress)}</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              {/* Controls */}
              <div className="flex items-center justify-center gap-6">
                <button onClick={prev} className="text-gray-400 hover:text-white transition-colors">
                  <MdSkipPrevious size={28} />
                </button>
                <button
                  onClick={togglePlay}
                  className="w-14 h-14 rounded-full bg-[#62826B] flex items-center justify-center hover:bg-[#62826B]/80 transition-colors"
                >
                  {isPlaying ? <FaPause size={18} className="text-white" /> : <FaPlay size={18} className="text-white ml-1" />}
                </button>
                <button onClick={next} className="text-gray-400 hover:text-white transition-colors">
                  <MdSkipNext size={28} />
                </button>
              </div>

              {/* Volume */}
              <div className="flex items-center gap-3">
                <button onClick={toggleMute} className="text-gray-400 hover:text-white transition-colors shrink-0">
                  {muted ? <IoVolumeMuteOutline size={20} /> : <IoVolumeHighOutline size={20} />}
                </button>
                <input
                  type="range" min={0} max={1} step={0.05} value={muted ? 0 : volume}
                  onChange={handleVolume}
                  className="flex-1 accent-[#62826B] cursor-pointer"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Hidden audio element */}
      <audio
        ref={audioRef}
        src={current.src}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        onEnded={handleEnded}
      />
    </div>
  );
};

export default Audio;
