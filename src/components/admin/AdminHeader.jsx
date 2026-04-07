import React from 'react';
import { MdNotifications, MdAccountCircle } from 'react-icons/md';
import { RxHamburgerMenu } from 'react-icons/rx';

const AdminHeader = ({ onMenuClick }) => {
  return (
    <header className="bg-white border-b border-gray-200 h-16 px-6 lg:px-10 flex items-center justify-between shrink-0">
      {/* Mobile hamburger */}
      <button
        onClick={onMenuClick}
        className="lg:hidden text-gray-500 hover:text-[#62826B] transition-colors"
        aria-label="Open menu"
      >
        <RxHamburgerMenu size={22} />
      </button>

      {/* Spacer on desktop */}
      <div className="hidden lg:block" />

      <div className="flex items-center gap-6">
        <button className="text-gray-500 hover:text-[#62826B] transition-colors relative">
          <MdNotifications size={22} />
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#62826B] rounded-full text-[10px] text-white flex items-center justify-center">3</span>
        </button>
        <div className="flex items-center gap-2 text-sm text-gray-600">
          <MdAccountCircle size={28} className="text-[#62826B]" />
          <span className="font-semibold hidden sm:block">Admin</span>
        </div>
      </div>
    </header>
  );
};

export default AdminHeader;
