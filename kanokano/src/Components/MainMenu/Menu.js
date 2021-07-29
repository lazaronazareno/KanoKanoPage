import React from 'react'
import { Link } from 'react-router-dom'
import './menuStyles.scss'

function Menu() {
    return (
        <div className="container d-flex justify-content-end align-items-center">
            <Link className="btn btn-outline-dark btn-lg" to="/story">Story</Link>
            <Link className="btn btn-outline-dark btn-lg" to="/characters">Characters</Link>
            <Link className="btn btn-outline-dark btn-lg" to="/contact">Contact</Link>
            <Link className="btn btn-outline-dark btn-lg" to="/music">Music</Link>
        </div>
    )
}

export default Menu
