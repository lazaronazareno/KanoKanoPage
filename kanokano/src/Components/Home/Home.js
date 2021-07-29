import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import '../../Colors/theme.scss';
import './styles.scss';

function Home() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <div className={`container d-flex flex-column justify-content-center align-items-center text-center div ${theme}`}>
            <h1>KanoKano FanPage</h1>
            <h2>Welcome</h2>
            {theme === 'normal' && (
                <>
                    <h2>If you accept the character`s call the theme of the page will change</h2>
                    <Link to="/characters" className="btn btn-outline-dark btn-lg">Go</Link>
                </>
            )}
            {theme !== 'normal' && (
                <>
                    <h2>Look at the New Page Theme!!</h2>
                    <Link to="/characters" className="btn btn-outline-dark btn-lg">Back</Link>
                </>
            )}
        </div>
    )
}

export default Home
