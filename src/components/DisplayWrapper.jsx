import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import DisplayAlbum from "./DisplayAlbum";
import { albumsData } from "../assets/assets";

const DisplayWrapper = () => {
  const displayRef = useRef();
  const location = useLocation();

  const isAlbum = location.pathname.includes("/album/");
  let albumId = "";
  if (isAlbum) {
    albumId = location.pathname.split("/album/")[1];
  }

  // parseInt safely converts to number for indexing albumsData array
  const bgColor =
    albumId && albumsData[parseInt(albumId, 10)]
      ? albumsData[parseInt(albumId, 10)].bgColor
      : "#121212";

  useEffect(() => {
    if (displayRef.current) {
      if (isAlbum && bgColor) {
        displayRef.current.style.background = `linear-gradient(${bgColor}, #121212)`;
      } else {
        displayRef.current.style.background = "#121212";
      }
    }
  }, [location, isAlbum, bgColor]);

  return (
    <div
      ref={displayRef}
      className="flex-1 m-2 px-6 pt-4 rounded bg-[#121212] text-white overflow-y-auto h-[calc(100vh-4rem)] max-w-full"
    >
      <Routes>
        <Route path="/" element={<DisplayHome />} />
        <Route path="/album/:id" element={<DisplayAlbum />} />
      </Routes>
    </div>
  );
};

export default DisplayWrapper;
