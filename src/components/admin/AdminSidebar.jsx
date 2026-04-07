import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  MdDashboard, MdArticle, MdVideoLibrary, MdAudiotrack,
  MdPhotoLibrary, MdPeople, MdEvent, MdSettings
} from 'react-icons/md';
import { TbLayoutSidebarLeftCollapse, TbLayoutSidebarLeftExpand } from 'react-icons/tb';
import { HiHome } from 'react-icons/hi';
import { IoClose } from 'react-icons/io5';

const navItems = [
  { label: 'Dashboard',  path: '/admin',           icon: <MdDashboard size={20} />,    end: true },
  { label: 'Blog Posts', path: '/admin/blog',       icon: <MdArticle size={20} /> },
  { label: 'Videos',     path: '/admin/videos',     icon: <MdVideoLibrary size={20} /> },
  { label: 'Audio',      path: '/admin/audio',      icon: <MdAudiotrack size={20} /> },
  { label: 'Gallery',    path: '/admin/gallery',    icon: <MdPhotoLibrary size={20} /> },
  { label: 'Trainers',   path: '/admin/trainers',   icon: <MdPeople size={20} /> },
  { label: 'Events',     path: '/admin/events',     icon: <MdEvent size={20} /> },
  { label: 'Settings',   path: '/admin/settings',   icon: <MdSettings size={20} /> },
];

const AdminSidebar = ({ open, onToggle }) => {
  return (
    <>
      {/* Mobile overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/30 z-20 lg:hidden"
          onClick={onToggle}
        />
      )}

      <aside className={`
        fixed lg:static inset-y-0 left-0 z-30
        h-screen bg-[#11141B] flex flex-col shrink-0
        transition-all duration-300 ease-in-out
        ${open ? 'w-60 translate-x-0' : '-translate-x-full lg:translate-x-0 lg:w-16'}
      `}>
        {/* Logo + toggle */}
        <div className="flex items-center border-b border-white/10 h-16 px-4 justify-between">
          <span className={`text-white font-bold text-base whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
            🌿 Shunno Admin
          </span>
          {/* Desktop toggle */}
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-white transition-colors shrink-0 hidden lg:block"
            title={open ? 'Collapse sidebar' : 'Expand sidebar'}
          >
            {open
              ? <TbLayoutSidebarLeftCollapse size={22} />
              : <TbLayoutSidebarLeftExpand size={22} />
            }
          </button>
          {/* Mobile close */}
          <button
            onClick={onToggle}
            className="text-gray-400 hover:text-white transition-colors shrink-0 lg:hidden"
          >
            <IoClose size={22} />
          </button>
        </div>

        {/* Nav */}
        <nav className="flex-1 py-3 overflow-y-auto overflow-x-hidden">
          {navItems.map(item => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.end}
              title={!open ? item.label : undefined}
              onClick={() => { if (window.innerWidth < 1024) onToggle(); }}
              className={({ isActive }) =>
                `flex items-center h-11 px-4 text-sm font-medium transition-colors duration-200 gap-3 ${
                  isActive
                    ? 'bg-[#62826B] text-[#FFEFC5]'
                    : 'text-gray-400 hover:bg-white/5 hover:text-white'
                }`
              }
            >
              <span className="shrink-0">{item.icon}</span>
              <span className={`whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
                {item.label}
              </span>
            </NavLink>
          ))}
        </nav>

        {/* Back to site */}
        <div className="border-t border-white/10 py-3">
          <NavLink
            to="/"
            title={!open ? 'Back to Site' : undefined}
            className="flex items-center h-11 px-4 gap-3 text-gray-500 hover:text-gray-300 transition-colors"
          >
            <HiHome size={20} className="shrink-0" />
            <span className={`text-sm whitespace-nowrap transition-all duration-300 overflow-hidden ${open ? 'opacity-100 max-w-xs' : 'opacity-0 max-w-0'}`}>
              Back to Site
            </span>
          </NavLink>
        </div>
      </aside>
    </>
  );
};

export default AdminSidebar;
