import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdArticle, MdVideoLibrary, MdAudiotrack,
  MdPhotoLibrary, MdPeople, MdEvent, MdArrowForward
} from 'react-icons/md';

const stats = [
  { label: 'Blog Posts',    value: '12', icon: <MdArticle size={24} />,      path: '/admin/blog',     bg: 'bg-violet-100', text: 'text-violet-600', border: 'border-violet-200' },
  { label: 'Videos',        value: '9',  icon: <MdVideoLibrary size={24} />, path: '/admin/videos',   bg: 'bg-blue-100',   text: 'text-blue-600',   border: 'border-blue-200' },
  { label: 'Audio Tracks',  value: '6',  icon: <MdAudiotrack size={24} />,   path: '/admin/audio',    bg: 'bg-amber-100',  text: 'text-amber-600',  border: 'border-amber-200' },
  { label: 'Gallery Photos',value: '18', icon: <MdPhotoLibrary size={24} />, path: '/admin/gallery',  bg: 'bg-pink-100',   text: 'text-pink-600',   border: 'border-pink-200' },
  { label: 'Trainers',      value: '3',  icon: <MdPeople size={24} />,       path: '/admin/trainers', bg: 'bg-emerald-100',text: 'text-emerald-600',border: 'border-emerald-200' },
  { label: 'Events',        value: '2',  icon: <MdEvent size={24} />,        path: '/admin/events',   bg: 'bg-orange-100', text: 'text-orange-600', border: 'border-orange-200' },
];

const quickActions = [
  { label: 'New Blog Post',      path: '/admin/blog',     icon: <MdArticle size={16} />,      color: 'text-violet-600 bg-violet-50' },
  { label: 'Add Video',          path: '/admin/videos',   icon: <MdVideoLibrary size={16} />, color: 'text-blue-600 bg-blue-50' },
  { label: 'Upload Audio',       path: '/admin/audio',    icon: <MdAudiotrack size={16} />,   color: 'text-amber-600 bg-amber-50' },
  { label: 'Add Gallery Image',  path: '/admin/gallery',  icon: <MdPhotoLibrary size={16} />, color: 'text-pink-600 bg-pink-50' },
  { label: 'Add Trainer',        path: '/admin/trainers', icon: <MdPeople size={16} />,       color: 'text-emerald-600 bg-emerald-50' },
  { label: 'Create Event',       path: '/admin/events',   icon: <MdEvent size={16} />,        color: 'text-orange-600 bg-orange-50' },
];

const recentActivity = [
  { action: 'New blog post published',          time: '2 hours ago',  dot: 'bg-violet-500' },
  { action: 'Video "Morning Yoga" added',       time: '5 hours ago',  dot: 'bg-blue-500' },
  { action: 'Gallery updated with 3 images',    time: '1 day ago',    dot: 'bg-pink-500' },
  { action: 'Trainer Emily profile updated',    time: '2 days ago',   dot: 'bg-emerald-500' },
  { action: 'Event "Full Moon Retreat" created',time: '3 days ago',   dot: 'bg-orange-500' },
];

const Dashboard = () => {
  return (
    <div className="flex flex-col gap-8 max-w-6xl">

      {/* Page title */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#11141B]">Dashboard</h1>
          <p className="text-sm text-gray-400 mt-0.5">Manage your Shunno Yoga content</p>
        </div>
        <span className="text-xs text-gray-400 bg-gray-100 px-3 py-1.5 rounded-full">
          Last updated: just now
        </span>
      </div>

      {/* Stats grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4">
        {stats.map(s => (
          <NavLink
            key={s.label}
            to={s.path}
            className={`group bg-white rounded-2xl p-5 flex flex-col gap-4 border ${s.border} hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200`}
          >
            <div className={`w-11 h-11 rounded-xl flex items-center justify-center ${s.bg} ${s.text}`}>
              {s.icon}
            </div>
            <div>
              <p className="text-3xl font-bold text-[#11141B]">{s.value}</p>
              <p className="text-xs text-gray-500 mt-0.5 leading-snug">{s.label}</p>
            </div>
            <div className={`flex items-center gap-1 text-xs font-medium ${s.text} opacity-0 group-hover:opacity-100 transition-opacity`}>
              Manage <MdArrowForward size={13} />
            </div>
          </NavLink>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

        {/* Quick actions */}
        <div className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-[#11141B] text-sm uppercase tracking-wide text-gray-400">Quick Actions</h2>
          <div className="flex flex-col gap-2">
            {quickActions.map(a => (
              <NavLink
                key={a.label}
                to={a.path}
                className="flex items-center justify-between px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors duration-200 group"
              >
                <div className="flex items-center gap-3">
                  <span className={`w-7 h-7 rounded-lg flex items-center justify-center ${a.color}`}>
                    {a.icon}
                  </span>
                  <span className="text-sm font-medium text-[#11141B]">{a.label}</span>
                </div>
                <MdArrowForward size={15} className="text-gray-300 group-hover:text-gray-500 transition-colors" />
              </NavLink>
            ))}
          </div>
        </div>

        {/* Recent activity */}
        <div className="lg:col-span-3 bg-white rounded-2xl border border-gray-100 p-6 flex flex-col gap-4">
          <h2 className="font-semibold text-sm uppercase tracking-wide text-gray-400">Recent Activity</h2>
          <div className="flex flex-col gap-1">
            {recentActivity.map((item, i) => (
              <div key={i} className="flex items-center justify-between py-3 border-b border-gray-50 last:border-0">
                <div className="flex items-center gap-3">
                  <span className={`w-2 h-2 rounded-full shrink-0 ${item.dot}`} />
                  <p className="text-sm text-[#11141B]">{item.action}</p>
                </div>
                <span className="text-xs text-gray-400 shrink-0 ml-4 whitespace-nowrap">{item.time}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
};

export default Dashboard;
