import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FaHome, FaSearch, FaBook, FaPlus } from 'react-icons/fa';
import { FiMenu } from 'react-icons/fi';

const Sidebar = () => {
  const [playlists, setPlaylists] = useState([]);
  const [showInput, setShowInput] = useState(false);
  const [playlistName, setPlaylistName] = useState('');
  const [collapsed, setCollapsed] = useState(false);

  const handleCreatePlaylist = (e) => {
    e.preventDefault();
    if (playlistName.trim()) {
      setPlaylists([...playlists, { id: Date.now(), name: playlistName.trim() }]);
      setPlaylistName('');
      setShowInput(false);
    }
  };

  const removePlaylist = (id) => {
    setPlaylists(playlists.filter(pl => pl.id !== id));
  };

  // Responsive and collapsible sidebar logic
  return (
    <aside className={`fixed md:relative top-0 left-0 h-screen bg-[#121212] text-white transition-all
      ${collapsed ? 'w-16' : 'w-56'} z-20 flex flex-col`}>
      {/* Mobile collapse button */}
      <div className="md:hidden flex items-center justify-end p-2">
        <button onClick={() => setCollapsed(!collapsed)} aria-label="Toggle Sidebar">
          <FiMenu className="text-2xl" />
        </button>
      </div>

      {/* Navigation */}
      <nav className={`flex flex-col gap-1 pt-8 ${collapsed ? 'items-center' : ''}`}>
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition 
            ${collapsed ? 'justify-center' : ''} 
            hover:bg-[#232323] 
            ${isActive ? 'bg-[#232323]' : ''}`
          }
          end
        >
          <FaHome size={22} />
          {!collapsed && <span>Home</span>}
        </NavLink>
        <NavLink
          to="/search"
          className={({ isActive }) =>
            `flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition 
            ${collapsed ? 'justify-center' : ''} 
            hover:bg-[#232323] 
            ${isActive ? 'bg-[#232323]' : ''}`
          }
        >
          <FaSearch size={22} />
          {!collapsed && <span>Search</span>}
        </NavLink>
        <NavLink
          to="/library"
          className={({ isActive }) =>
            `flex items-center gap-2 px-5 py-3 rounded-lg font-semibold transition 
            ${collapsed ? 'justify-center' : ''} 
            hover:bg-[#232323] 
            ${isActive ? 'bg-[#232323]' : ''}`
          }
        >
          <FaBook size={22} />
          {!collapsed && <span>Your Library</span>}
        </NavLink>
      </nav>

      {/* Library & Playlists */}
      <section className={`mt-8 px-4 flex-1 overflow-y-auto ${collapsed ? 'hidden md:block' : ''}`}>
        <div className="flex items-center justify-between text-gray-300 mb-3 font-bold">
          <span>Your Playlists</span>
          <button
            onClick={() => setShowInput(val => !val)}
            aria-label="Create Playlist"
            className="text-green-500"
          >
            <FaPlus />
          </button>
        </div>
        {showInput && !collapsed && (
          <form onSubmit={handleCreatePlaylist} className="mb-2">
            <input
              type="text"
              autoFocus
              placeholder="Playlist Name"
              value={playlistName}
              onChange={e => setPlaylistName(e.target.value)}
              className="p-2 rounded bg-black text-white w-full mb-2"
              required
            />
            <div className="flex gap-2">
              <button type="submit" className="bg-green-500 text-white w-full rounded py-2">Create</button>
              <button type="button" className="bg-neutral-600 text-white w-full rounded py-2" onClick={() => setShowInput(false)}>Cancel</button>
            </div>
          </form>
        )}
        <ul>
          {playlists.length === 0 ? (
            <li className="text-gray-500 mt-10">No playlists yet</li>
          ) : (
            playlists.map(({ id, name }) => (
              <li key={id} className="flex justify-between items-center py-2 px-2 rounded hover:bg-[#232323] cursor-pointer truncate">
                <span>{name}</span>
                <button
                  onClick={e => {
                    e.stopPropagation();
                    removePlaylist(id);
                  }}
                  aria-label={`Remove playlist ${name}`}
                  className="text-red-500 hover:text-red-700"
                >
                  ×
                </button>
              </li>
            ))
          )}
        </ul>
      </section>
    </aside>
  );
};

export default Sidebar;
