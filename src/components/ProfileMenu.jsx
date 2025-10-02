import React, { useState, useRef, useEffect } from 'react';
import { FaUserCircle, FaSignOutAlt, FaCog } from 'react-icons/fa';

const ProfileMenu = () => {
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setOpen(!open)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label="User profile menu"
        className="flex items-center gap-2 focus:outline-none cursor-pointer"
      >
        <img
          src="https://i.pravatar.cc/40"
          alt="User Avatar"
          className="w-10 h-10 rounded-full border-2 border-green-500"
        />
        <span className="hidden md:block text-white font-semibold select-none">User Name</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-48 bg-[#282828] rounded-md shadow-lg py-2 z-50">
          <button
            className="flex items-center gap-3 w-full px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer"
            onClick={() => alert('Profile clicked')}
          >
            <FaUserCircle /> Profile
          </button>
          <button
            className="flex items-center gap-3 w-full px-4 py-2 text-white hover:bg-[#3a3a3a] cursor-pointer"
            onClick={() => alert('Settings clicked')}
          >
            <FaCog /> Settings
          </button>
          <hr className="my-1 border-gray-600" />
          <button
            className="flex items-center gap-3 w-full px-4 py-2 text-red-500 hover:bg-red-700 cursor-pointer"
            onClick={() => alert('Logout clicked')}
          >
            <FaSignOutAlt /> Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
