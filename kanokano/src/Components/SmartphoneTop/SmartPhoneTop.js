import React from 'react';
import { Link } from 'react-router-dom'
import arrow from '../../Assets/arrow1.svg'
import call from '../../Assets/call1.svg'
import lens from '../../Assets/magnifier-tool1.svg'
import menu from '../../Assets/menu1.svg'
import './phoneStyles.scss'

function SmartPhoneTop() {
    return (
        <div className="container-fluid d-flex violet1 border border-dark z-index">
            <Link className="mt-1" to="/home">
                <img className="phoneIcons rotate" src={arrow} alt="arrow"/>
            </Link>
            <h1 className="text-white mt-1 fs-1">Story</h1>
            <div className="container d-flex justify-content-end">
                <img className="phoneIcons" src={lens} alt="lens"/>
                <img className="phoneIcons" src={call} alt="call"/>
                <img className="phoneIcons mt-3" src={menu} alt="menu"/>
            </div>
        </div>
    )
}

export default SmartPhoneTop
