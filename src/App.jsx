import React, { useContext, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Player from './components/Player';
import DisplayWrapper from './components/DisplayWrapper';
import SearchComponent from './components/SearchComponent';
import CreatePlaylistSection from './components/CreatePlaylistSection';
import { PlayerContext } from './context/PlayerContext';

const App = () => {
  const { audioRef, track } = useContext(PlayerContext);
  const [playlists, setPlaylists] = useState([]);

  const handleAddPlaylist = (name) => {
    setPlaylists([...playlists, { id: playlists.length, name }]);
  };

  const removePlaylist = (id) => {
    setPlaylists(playlists.filter(pl => pl.id !== id));
  };

  return (
    <div className="flex flex-col h-screen bg-black text-white">
      {/* Main content */}
      <div className="flex flex-1 flex-col md:flex-row overflow-hidden">
        {/* Sidebar - full width on mobile, fixed 1/4 width on desktop */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-[#121212] flex flex-col p-4 overflow-y-auto">
          <Sidebar 
            playlists={playlists} 
            onAddPlaylist={handleAddPlaylist} 
            onRemovePlaylist={removePlaylist} 
          />
        </aside>

        {/* Page main content */}
        <main className="flex-1 overflow-auto p-4">
          <Routes>
            <Route path="/" element={<DisplayWrapper />} />
            <Route path="/search" element={<SearchComponent />} />
            <Route path="/album/:id" element={<DisplayWrapper />} />
          </Routes>
        </main>
      </div>

      {/* Audio player fixed at bottom */}
      <footer className="h-20 bg-[#181818]">
        <Player />
        <audio ref={audioRef} src={track?.file || ''} preload="auto" />
      </footer>
    </div>
  );
};

export default App;
