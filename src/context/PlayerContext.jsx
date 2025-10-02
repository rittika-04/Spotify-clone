import React, { createContext, useRef, useState, useEffect } from "react";
import { songsData } from "../assets/assets";

export const PlayerContext = createContext();

const PlayerContextProvider = (props) => {
  const audioRef = useRef(null);
  const seekBg = useRef(null);
  const seekbar = useRef(null);

  const [track, setTrack] = useState(songsData[0]);
  const [playStatus, setPlayStatus] = useState(false);

  // Play audio when track changes or playStatus becomes true
  useEffect(() => {
    if (!audioRef.current) return;

    audioRef.current.src = track.file;
    audioRef.current.load();

    if (playStatus) {
      audioRef.current.play().catch((error) => console.log("Playback error:", error));
    }
  }, [track, playStatus]);

  const play = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setPlayStatus(true);
    }
  };

  const pause = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      setPlayStatus(false);
    }
  };

  const playWithId = (id) => {
    if (id < 0 || id >= songsData.length) return;
    setTrack(songsData[id]);
    setPlayStatus(true);
  };

  const previous = () => {
    let prevIndex = track.id - 1;
    if (prevIndex < 0) prevIndex = songsData.length - 1;
    setTrack(songsData[prevIndex]);
    setPlayStatus(true);
  };

  const next = () => {
    let nextIndex = track.id + 1;
    if (nextIndex >= songsData.length) nextIndex = 0;
    setTrack(songsData[nextIndex]);
    setPlayStatus(true);
  };

  const contextValue = {
    audioRef,
    seekbar,
    seekBg,
    track,
    setTrack,
    playStatus,
    setPlayStatus,
    play,
    pause,
    playWithId,
    previous,
    next,
  };

  return (
    <PlayerContext.Provider value={contextValue}>
      {props.children}
    </PlayerContext.Provider>
  );
};

export default PlayerContextProvider;
