import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../Colors/theme.scss';
import './styles.scss';
import Player from '../MusicHook';

function Home() {
    const theme = useSelector(store => store.kanokano.theme)
    const sound = useSelector(store => store.kanokano.music)
    return (
        <div className={`container d-flex flex-column justify-content-center align-items-center text-center div ${theme}`}>
            <h1>KanoKano FanPage</h1>
            <h2>Welcome</h2>
                <iframe className="video" src="https://www.youtube.com/embed/1foV8Fh0WRc?autoplay=1&mute=1&playsinline=1&loop=1"
                 frameBorder="0"
                 title="pv"
                 allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                 allowFullScreen/>
            {theme === 'normal' && (
                <>
                    <h2>If you accept the character`s call the theme of the page will change</h2>
                    <Link to="/characters" className="btn btn-outline-dark btn-lg">Go</Link>
                </>
            )}
            {theme !== 'normal' && (
                <>
                    <h2>Enjoy the New Theme!!</h2>
                    <Link to="/characters" className="btn btn-outline-dark btn-lg">Back</Link>
                </>
            )}
            <Player url={sound} />
        </div>
    )
}

export default Home
