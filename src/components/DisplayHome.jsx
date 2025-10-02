import React from 'react';
import Navbar from './Navbar';
import AlbumItem from './AlbumItem'; // Ensure correct import
import SongItem from './SongItem';
import { albumsData, songsData } from '../assets/assets';

const DisplayHome = () => {
  return (
    <>
      <Navbar />
      
      {/* Featured Charts Section */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Featured Charts</h1>
        <div className="overflow-x-auto">
        <div className="flex overflow-x-auto whitespace-nowrap gap-4 scrollbar-hide">
            {albumsData.map((item, index) => (
              <AlbumItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Today's Biggest Hits Section */}
      <div className="mb-4">
        <h1 className="my-5 font-bold text-2xl">Today's Biggest Hits</h1>
        <div className="overflow-x-auto">
          <div className="flex gap-4 w-max">
            {songsData.map((item, index) => (
              <SongItem
                key={index}
                name={item.name}
                desc={item.desc}
                id={item.id}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DisplayHome;
