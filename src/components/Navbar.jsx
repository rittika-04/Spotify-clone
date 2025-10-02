import React, { useState } from 'react';
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import { FaBell, FaCog } from 'react-icons/fa';
import ProfileMenu from './ProfileMenu';

const Navbar = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState('All');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    // Optional: add filtering or routing logic here
  };

  return (
    <>
      <header className="sticky top-0 left-0 right-0 bg-[#181818]/90 backdrop-blur-md shadow-md z-30 px-6 py-3 flex items-center justify-between">
        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 bg-black p-2 rounded-full cursor-pointer hover:brightness-125 transition"
            src={assets.arrow_left}
            alt="Go Back"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(-1)}
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 bg-black p-2 rounded-full cursor-pointer hover:brightness-125 transition"
            src={assets.arrow_right}
            alt="Go Forward"
            role="button"
            tabIndex={0}
            onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && navigate(1)}
          />
        </div>

        {/* Right Side Buttons and Profile */}
        <div className="flex items-center gap-6">
          <button
            className="bg-white text-black rounded-full px-6 py-1 font-semibold hover:brightness-90 transition"
            onClick={() => alert('Explore Premium clicked')}
            aria-label="Explore Premium"
          >
            Explore Premium
          </button>

          <button
            className="bg-transparent border border-white text-white rounded-full px-5 py-1 font-semibold hover:bg-white hover:text-black transition"
            onClick={() => alert('Install App clicked')}
            aria-label="Install App"
          >
            Install App
          </button>

          <ProfileMenu />

          <button
            className="text-white rounded-full hover:text-green-500 transition relative"
            aria-label="Notifications"
            onClick={() => alert('Notifications clicked')}
          >
            <FaBell size={22} />
            <span className="absolute top-0 right-0 -mt-1 -mr-1 bg-green-500 text-xs rounded-full px-[6px] py-[2px] font-bold text-black">3</span>
          </button>

          <button
            className="text-white rounded-full hover:text-green-500 transition"
            aria-label="Settings"
            onClick={() => alert('Settings clicked')}
          >
            <FaCog size={22} />
          </button>
        </div>
      </header>

      {/* Tabs Navigation */}
      <nav className="flex items-center gap-3 px-6 py-3 bg-[#121212]">
        {['All', 'Music', 'Podcasts'].map((tab) => (
          <button
            key={tab}
            onClick={() => handleTabClick(tab)}
            className={`rounded-full px-5 py-2 cursor-pointer font-semibold transition
              ${activeTab === tab ? 'bg-white text-black' : 'bg-[#282828] text-white hover:bg-[#3e3e3e]'}`}
            aria-pressed={activeTab === tab}
            aria-label={`Filter by ${tab}`}
          >
            {tab}
          </button>
        ))}
      </nav>
    </>
  );
};

export default Navbar;
