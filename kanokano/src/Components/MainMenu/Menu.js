import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux';
import './menuStyles.scss'
import menu from '../../Assets/menu.png'
import cerrar from '../../Assets/cerrar.png'

function Menu() {
    const [menuActive, setMenuState] = useState(false);
    const theme = useSelector(store => store.kanokano.theme)
    
    return (
        <div className="container container-menu d-flex justify-content-end align-items-center">
            <div className="menu">
                <Link className="btn btn-outline-dark btn-lg" to="/story">Story</Link>
                <Link className="btn btn-outline-dark btn-lg" to="/characters">Characters</Link>
                <Link className="btn btn-outline-dark btn-lg" to="/contact">Contact</Link>
                <Link className="btn btn-outline-dark btn-lg" to="/music">Music</Link>
            </div>
            <div  className={`header-responsive-burger ${theme} ${menuActive ? "container__header-responsive-burger-show" : ""}`} onClick={() => setMenuState(!menuActive)}>
                <img alt="icon" className="header-responsive-img" src={`${menuActive ? cerrar : menu}`}/>
            </div>
            <div className={`container__header-responsive ${theme} ${menuActive ? "container__header-responsive-show" : ""}`}>
                <Link onClick={() => setMenuState(!menuActive)} className="btn btn-outline-dark btn-lg" to="/story">Story</Link>
                <Link onClick={() => setMenuState(!menuActive)} className="btn btn-outline-dark btn-lg" to="/characters">Characters</Link>
                <Link onClick={() => setMenuState(!menuActive)} className="btn btn-outline-dark btn-lg" to="/contact">Contact</Link>
                <Link onClick={() => setMenuState(!menuActive)} className="btn btn-outline-dark btn-lg" to="/music">Music</Link>
            </div>
        </div>
    )
}

export default Menu
