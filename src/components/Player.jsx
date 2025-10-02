import React, { useState, useEffect, useContext, useRef } from 'react';
import { assets } from '../assets/assets';
import { PlayerContext } from '../context/PlayerContext';

const Player = () => {
  const { track, playStatus, play, pause, audioRef, previous, next } = useContext(PlayerContext);
  const seekBg = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(50); // Initial volume 50%

  useEffect(() => {
    if (!audioRef.current) return;

    const audio = audioRef.current;

    // Set initial volume
    audio.volume = volume / 100;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);

    const handleEnded = () => next();

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioRef, volume, next]);

  const togglePlayPause = () => {
    if (!audioRef.current) return;
    playStatus ? pause() : play();
  };

  const formatTime = (time) => {
    if (isNaN(time) || time === Infinity) return '0:00';
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60).toString().padStart(2, '0');
    return `${minutes}:${seconds}`;
  };

  const handleSeek = (e) => {
    if (!seekBg.current || !audioRef.current) return;
    const rect = seekBg.current.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const newTime = (clickX / rect.width) * duration;
    audioRef.current.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleVolumeChange = (e) => {
    const vol = Number(e.target.value);
    setVolume(vol);
    if (audioRef.current) {
      audioRef.current.volume = vol / 100;
    }
  };

  return (
    <div className="h-[10%] bg-black flex justify-between items-center text-white px-4">
      <div className="hidden lg:flex items-center gap-4">
        <img className="w-12" src={track.image} alt="Song Art" />
        <div>
          <p className="font-semibold">{track.name}</p>
          <p className="text-sm">{track.desc.length > 12 ? `${track.desc.slice(0, 12)}...` : track.desc}</p>
        </div>
      </div>

      <div className="flex flex-col items-center gap-1 m-auto">
        <div className="flex gap-4">
          {/* Shuffle and Loop buttons: add handlers or disable */}
          <img
            className="w-5 cursor-pointer opacity-50"
            src={assets.shuffle_icon}
            alt="Shuffle"
            title="Shuffle (not implemented)"
          />
          <img onClick={previous} className="w-5 cursor-pointer" src={assets.prev_icon} alt="Previous" />
          <img
            className="w-6 cursor-pointer"
            src={playStatus ? assets.pause_icon : assets.play_icon}
            alt={playStatus ? 'Pause' : 'Play'}
            onClick={togglePlayPause}
          />
          <img onClick={next} className="w-4 cursor-pointer" src={assets.next_icon} alt="Next" />
          <img
            className="w-4 cursor-pointer opacity-50"
            src={assets.loop_icon}
            alt="Loop"
            title="Loop (not implemented)"
          />
        </div>

        <div className="flex items-center gap-5">
          <p className="text-xs">{formatTime(currentTime)}</p>
          <div
            ref={seekBg}
            className="w-[60vw] max-w-[500px] h-1 bg-gray-400 rounded-full relative cursor-pointer"
            onClick={handleSeek}
            aria-label="Seek bar"
            role="slider"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
                audioRef.current.currentTime = Math.min(audioRef.current.currentTime + 5, duration);
              }
              if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
                audioRef.current.currentTime = Math.max(audioRef.current.currentTime - 5, 0);
              }
            }}
          >
            <div
              className="h-1 bg-green-500 rounded-full"
              style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
            ></div>
          </div>
          <p className="text-xs">{formatTime(duration)}</p>
        </div>
      </div>

      <div className="hidden lg:flex items-center gap-3 opacity-75">
        <img className="w-5" src={assets.volume_icon} alt="Volume" />
        <input
          type="range"
          className="w-20 cursor-pointer"
          min="0"
          max="100"
          value={volume}
          onChange={handleVolumeChange}
          aria-label="Volume control"
        />
      </div>

      <audio ref={audioRef} src={track.file} preload="auto"></audio>
    </div>
  );
};

export default Player;
