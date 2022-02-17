import React, { useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { isPlaying } from '../../Redux/reducers';
import sound from '../../Assets/volume.png'
import mute from '../../Assets/mute.png'
import './styles.scss'


function Player() {
  const dispatch = useDispatch();
  const music = useSelector(store => store.kanokano.music)
  const playing = useSelector(store => store.kanokano.playing)
  const audio = new Audio(music);

  const toggle = () => dispatch(isPlaying(!playing));

  useEffect(() => {
      audio.load()
      audio.volume = 0.1;
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    return () => {
      audio.pause()
      audio.load()
    };
  },
  [toggle]
);

  return (
    <div onClick={toggle}>
      {playing ? 
      <img className="sound-button" src={sound} alt="sound"/> : 
      <img className="sound-button" src={mute} alt="mute"/>}
    </div>
      );
};

export default Player;