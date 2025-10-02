import React, { useState, useContext } from 'react';
import { PlayerContext } from '../context/PlayerContext';

const songsData = [
  { id: 1, name: "Song One", artist: "Artist A", image: "https://via.placeholder.com/64", duration: "3:45" },
  { id: 2, name: "Song Two", artist: "Artist B", image: "https://via.placeholder.com/64", duration: "4:10" },
  { id: 3, name: "Another Song", artist: "Artist C", image: "https://via.placeholder.com/64", duration: "2:58" },
  // Add your songs here
];

const SearchComponent = () => {
  const { playWithId } = useContext(PlayerContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = songsData.filter(song =>
      song.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      song.artist.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setResults(filtered);
  };

  return (
    <div className="p-4 max-w-4xl mx-auto">
      <input
        type="text"
        placeholder="Search songs, artists..."
        value={searchQuery}
        onChange={e => setSearchQuery(e.target.value)}
        className="w-full p-2 border rounded mb-4"
        onKeyDown={e => e.key === 'Enter' && handleSearch()}
        autoFocus
      />
      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 mb-4"
      >
        Search
      </button>

      <div>
        {results.length === 0 && <p>No results found.</p>}
        <ul>
          {results.map(song => (
            <li
              key={song.id}
              className="flex items-center space-x-4 py-2 border-b cursor-pointer hover:bg-gray-700 rounded"
              onClick={() => playWithId(song.id)}
              title={`Play ${song.name} by ${song.artist}`}
            >
              <img src={song.image} alt={song.name} className="w-12 h-12 rounded" />
              <div>
                <p className="font-semibold">{song.name}</p>
                <p className="text-sm text-gray-400">{song.artist}</p>
              </div>
              <p className="ml-auto">{song.duration}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default SearchComponent;
