import React, { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ name, image, desc, id, onRemove }) => {
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] p-2 px-3 rounded cursor-pointer hover:bg-[#ffffff26] relative"
    >
      <img className="rounded" src={image} alt={name} />
      <p className="font-bold mt-2 mb-1">{name}</p>
      <p className="text-slate-200 text-sm">{desc}</p>

      {/* Delete Button */}
      {onRemove && (
        <button
          onClick={e => {
            e.stopPropagation(); // Prevent play on click of delete button
            onRemove(id);
          }}
          className="absolute top-2 right-2 bg-red-600 rounded-full w-6 h-6 flex items-center justify-center text-white text-xs hover:bg-red-800"
          aria-label={`Remove song ${name}`}
        >
          ×
        </button>
      )}
    </div>
  );
};

export default SongItem;
