import React, { useState } from 'react';

const CreatePlaylistSection = () => {
  const [playlistName, setPlaylistName] = useState('');
  const [playlists, setPlaylists] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (playlistName.trim()) {
      setPlaylists([...playlists, { id: Date.now(), name: playlistName.trim() }]);
      setPlaylistName('');
    } else {
      alert('Please enter a playlist name');
    }
  };

  const handleDelete = (id) => {
    setPlaylists(playlists.filter((pl) => pl.id !== id));
  };

  return (
    <div className="m-4 p-4 bg-[#242424] rounded text-white">
      <h3 className="mb-2 font-semibold">Create Your First Playlist</h3>
      <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Playlist Name"
          value={playlistName}
          onChange={(e) => setPlaylistName(e.target.value)}
          className="w-full p-2 rounded bg-black text-white mb-3"
          required
          autoComplete="off"
        />
        <button
          type="submit"
          className="w-full bg-green-600 py-2 rounded hover:bg-green-700 transition"
        >
          Create Playlist
        </button>
      </form>

      {/* Playlists List with delete buttons */}
      <ul>
        {playlists.length === 0 ? (
          <li>No playlists yet</li>
        ) : (
          playlists.map(({ id, name }) => (
            <li key={id} className="flex justify-between items-center py-2 border-b border-gray-600">
              <span>{name}</span>
              <button
                onClick={() => handleDelete(id)}
                aria-label={`Delete playlist ${name}`}
                className="text-red-600 hover:text-red-800"
              >
                Delete
              </button>
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

export default CreatePlaylistSection;
