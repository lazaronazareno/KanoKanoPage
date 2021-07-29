import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

function Contact() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <div className={`container d-flex flex-column justify-content-center align-items-center text-center div ${theme}`}>
            <h1>About me </h1>
            <span>This page was made with ReactJs, state-management: React-Redux</span>
            <h2>Repositories : </h2>
            <a className="link-dark" href="https://github.com/lazaronazareno?tab=repositories">GitHub</a>
            <h2>Mail : </h2>
            <span>lazaronazareno@gmail.com</span>
            <Link to="/home" className="btn btn-outline-dark">Back</Link>
        </div>
    )
}

export default Contact
