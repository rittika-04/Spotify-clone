import React from 'react';
import { useNavigate } from 'react-router-dom';

const AlbumItem = ({ image, name, desc, id }) => {
  const navigate = useNavigate();

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      navigate(`/album/${id}`);
    }
  };

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => navigate(`/album/${id}`)}
      onKeyDown={handleKeyDown}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] transition-colors"
      aria-label={`Go to album ${name}`} 
    >
      <img
        className="rounded w-full h-auto object-cover"
        src={image || '/path/to/default_album_image.jpg'}
        alt={name}
        onError={(e) => { e.target.src = '/path/to/default_album_image.jpg'; }}
      />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm truncate">{desc}</p>
    </div>
  );
};

export default AlbumItem;
