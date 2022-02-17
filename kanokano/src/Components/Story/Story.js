import React from 'react'
import SmartPhoneTop from '../SmartphoneTop/SmartPhoneTop';
import { useSelector } from 'react-redux';
import './storyStyles.scss';
import { Link } from 'react-router-dom';

function Story() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <div className="container bg-light d-flex flex-column z-index p-0 responsive">
            <SmartPhoneTop/>
            <div className="container d-flex align-items-center my-1">
                <span className="point violet rounded-circle"></span>
                <div className={`d-flex flex-column rounded-3 ${theme}`}>
                    <span className="fs-4 text-wrap">The main character, Naoya, is in the first year of high school.</span>
                    <span className="fs-4 text-wrap">He confessed to Saki, who he had always liked,</span>
                    <span className="fs-4 text-wrap">Succeeded in getting her to be a girlfriend. He was at the peak of happiness.</span>
                </div>
            </div>
            <div className="container d-flex justify-content-end align-items-center my-1">
                <div className={`d-flex flex-column rounded-3 ${theme}`}>
                    <span className="fs-4 text-wrap">However, Naoya is suddenly called by Nagisa.</span>
                    <span className="fs-4 text-wrap">Who urged him to go out with her.</span>
                </div>
                <span className="point violet rounded-circle"></span>
            </div>
            <div className="container d-flex align-items-center my-1">
                <span className="point violet rounded-circle"></span>
                <div className={`d-flex flex-column rounded-3 ${theme} ms-0`}>
                    <span className="fs-4 text-wrap">Naoya confuse herself for the first time with Nagisa, and makes a decision ... !!</span>
                </div>
            </div>
            <div className="container d-flex justify-content-end my-1">
                <div className={`d-flex flex-column rounded-3 ${theme}`}>
                    <span className="fs-4 text-wrap">Neo-standard romantic comedy that begins with a ridiculous decision !!</span>
                </div>
                <span className="point violet rounded-circle"></span>
            </div>
            <Link to="/characters" className="btn btn-outline-dark">
                Characters
            </Link>
        </div>
    )
}

export default Story;