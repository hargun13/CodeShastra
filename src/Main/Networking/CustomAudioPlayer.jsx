import React, { useState, useRef } from 'react';
import './CustomAudioPlayer.css'; // Import your custom CSS for styling
import { GiSoundWaves } from "react-icons/gi";
import { FaPlay } from "react-icons/fa6";
import { IoPause } from "react-icons/io5";


const CustomAudioPlayer = ({ src }) => {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="custom-audio-player">
      <audio ref={audioRef} src={src} />
      <div className='flex items-center gap-2'>
        <button onClick={togglePlay} className="">
          {isPlaying ? <IoPause size={25}/> : <FaPlay size={25}/>}
        </button>
        <div className='flex items-center justify-start'>
          <GiSoundWaves size={45} />
          <GiSoundWaves size={45} />
          <GiSoundWaves size={45} />
          <GiSoundWaves size={45} />
          <GiSoundWaves size={45} />
          <GiSoundWaves size={45} />
        </div>
      </div>
    </div>
  );
};

export default CustomAudioPlayer;
