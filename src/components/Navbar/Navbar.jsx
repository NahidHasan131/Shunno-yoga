import React, { useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { FaPhoneAlt } from 'react-icons/fa';
import { RxHamburgerMenu } from 'react-icons/rx';
import { IoClose } from 'react-icons/io5';
import { MdKeyboardArrowDown } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../store/authSlice';

const navLinks = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us', path: '/about',
    children: [
      { label: 'About Us', path: '/about' },
      { label: 'Trainer', path: '/about/trainer' },
    ]
  },
  {
    label: 'Media', path: '/media',
    children: [
      { label: 'All Media', path: '/media' },
      { label: 'Audio', path: '/media/audio' },
      { label: 'Video', path: '/media/video' },
      { label: 'Gallery', path: '/media/gallery' },
    ]
  },
  { label: 'Blog', path: '/blog' },
  { label: 'Contact Us', path: '/contact' },
];

const DropdownMenu = ({ items }) => (
  <div className="absolute left-0 z-50 pt-3" style={{ top: '100%' }}>
    <ul className="w-48 bg-white rounded-lg overflow-hidden shadow-[0_8px_30px_rgba(0,0,0,0.15)]">
      {items.map((item) => (
        <li key={item.label}>
          <NavLink
            to={item.path}
            end
            className="block px-5 py-3 text-sm font-medium transition-colors"
            style={({ isActive }) => ({
              backgroundColor: isActive ? '#62826B' : 'white',
              color: isActive ? '#FFEFC5' : '#11141B',
            })}
            onMouseEnter={e => {
              e.currentTarget.style.backgroundColor = '#62826B';
              e.currentTarget.style.color = '#FFEFC5';
            }}
            onMouseLeave={e => {
              const active = e.currentTarget.getAttribute('aria-current');
              if (!active) {
                e.currentTarget.style.backgroundColor = 'white';
                e.currentTarget.style.color = '#11141B';
              }
            }}
          >
            {item.label}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileAccordion, setMobileAccordion] = useState(null);
  const location = useLocation();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token);

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/');
  };

  const isParentActive = (link) => {
    if (!link.children) return false;
    return link.children.some(child => location.pathname.startsWith(child.path));
  };

  const toggleAccordion = (label) => {
    setMobileAccordion(prev => prev === label ? null : label);
  };

  return (
    <>
      {/* Announcement bar */}
      {/* <div className="text-center text-xs md:text-sm py-3 px-4 bg-[#62826B] text-[#FFEFC5]">
        Try a Free Class Today <span className="text-white">- No commitment, Just Relaxation and Rejuvenation →</span>
      </div> */}

      {/* Main navbar */}
      <nav className="bg-white sticky top-0 z-50">
        <div className="max-w-340 mx-auto flex items-center justify-between px-4 lg:px-8 py-5">

          {/* Logo */}
          <NavLink to="/" className="flex items-center text-xl md:text-2xl lg:text-3xl font-bold text-[#62826B]">
            <span className="text-3xl">🌿</span>
            Shunno Yoga
          </NavLink>

          {/* Desktop nav links */}
          <ul className="hidden md:flex items-center gap-4 lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.label} className="relative" onMouseEnter={() => link.children && setOpenDropdown(link.label)} onMouseLeave={() => setOpenDropdown(null)}>
                <NavLink
                  to={link.path}
                  className="flex items-center gap-1 text-sm lg:text-base font-medium hover:opacity-70 transition-opacity"
                  style={({ isActive }) => ({
                    color: (isActive || isParentActive(link)) ? '#62826B' : '#11141B', fontWeight: (isActive || isParentActive(link)) ? '600' : '500', })} >
                  {link.label}
                  {link.children && <MdKeyboardArrowDown size={16} />}
                </NavLink>

                {link.children && openDropdown === link.label && (
                  <DropdownMenu items={link.children} />
                )}
              </li>
            ))}
          </ul>

          {/* CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            {token ? (
              <button onClick={handleSignOut}
                className="px-5 py-2 rounded-full font-medium border border-[#62826B] text-[#62826B] hover:bg-[#62826B] hover:text-[#FFEFC5] transition-all duration-300">
                Sign Out
              </button>
            ) : (
              <NavLink to="/auth/signin"
                className="px-5 py-2 rounded-full font-medium border border-[#62826B] text-[#62826B] hover:bg-[#62826B] hover:scale-110 hover:text-[#FFEFC5] transition-all duration-300 ease-in-out transform-gpu">
                Sign In
              </NavLink>
            )}
            <NavLink to="/contact">
              <button className="w-9 h-9 rounded-full flex items-center justify-center bg-[#62826B] text-white hover:scale-110 transition-all duration-300" aria-label="Call us">
                <FaPhoneAlt size={14} />
              </button>
            </NavLink>
          </div>

          {/* Mobile hamburger */}
          <button className="md:hidden p-2 rounded-lg bg-[#f5f5f0]" onClick={() => setMobileOpen(true)} aria-label="Open menu" >
            <RxHamburgerMenu size={22} color="#11141B" />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-black/30" onClick={() => setMobileOpen(false)}/>
      )}

      {/* Mobile drawer */}
      <div
        className="fixed top-0 left-0 h-full w-72 z-50 md:hidden flex flex-col bg-[#f5f5f0] transition-transform duration-300"
        style={{ transform: mobileOpen ? 'translateX(0)' : 'translateX(-100%)' }}>
        {/* Drawer header */}
        <div className="flex items-center justify-between px-6 py-5">
          <NavLink to="/" className="flex items-center gap-2 text-xl font-bold text-[#11141B]" onClick={() => setMobileOpen(false)}>
            <span className="text-2xl">🌿</span>
            Shunno Yoga
          </NavLink>
          <button onClick={() => setMobileOpen(false)}
            className="w-10 h-10 rounded-lg flex items-center justify-center bg-[#11141B] text-white" aria-label="Close menu">
            <IoClose size={20} />
          </button>
        </div>

        {/* Drawer nav links */}
        <ul className="flex flex-col px-6 mt-2 gap-1">
          {navLinks.map((link) => (
            <li key={link.label}>
              <div className="flex items-center justify-between py-3 border-b border-gray-200">
                <NavLink to={link.path} className="text-base font-medium"
                  style={({ isActive }) => ({
                    color: (isActive || isParentActive(link)) ? '#62826B' : '#11141B',
                  })}  onClick={() => !link.children && setMobileOpen(false)} >
                  {link.label}
                </NavLink>
                {link.children && (
                  <button onClick={() => toggleAccordion(link.label)} aria-label="Toggle submenu">
                    <MdKeyboardArrowDown size={20} color="#11141B"
                      style={{
                        transform: mobileAccordion === link.label ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s',
                      }} />
                  </button>
                )}
              </div>

              {link.children && mobileAccordion === link.label && (
                <ul className="mx-2 my-2 rounded-lg overflow-hidden bg-white border border-gray-200">
                  {link.children.map((child) => (
                    <li key={child.label}>
                      <NavLink to={child.path} end className="block px-4 py-3 text-sm"
                        style={({ isActive }) => ({
                          color: isActive ? '#62826B' : '#11141B',
                          fontWeight: isActive ? '600' : '400',
                        })} onClick={() => setMobileOpen(false)} >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
