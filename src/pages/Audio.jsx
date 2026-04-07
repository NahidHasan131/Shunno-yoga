import React from 'react';
import Breadcrumb from '../components/Breadcrumb/Breadcrumb';
import AudioPlayer from '../components/Media/AudioPlayer';
import { tracks } from '../data/mediaData';

const Audio = () => (
  <div>
    <Breadcrumb />
    <div className="max-w-340 mx-auto px-6 lg:px-12 py-16 lg:py-24">
      <div className="flex flex-col gap-3 mb-12">
        <span className="self-start px-4 py-1.5 rounded-full border border-gray-300 text-gray-800 text-sm">Audio Classes</span>
        <h2 className="text-4xl lg:text-5xl font-bold text-[#11141B]">Guided Yoga Sessions</h2>
        <p className="text-gray-500 max-w-md">Listen and practice with our curated audio sessions for relaxation, meditation and mindfulness.</p>
      </div>
      <AudioPlayer tracks={tracks} />
    </div>
  </div>
);

export default Audio;
