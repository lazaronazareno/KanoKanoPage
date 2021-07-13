import React from 'react'
import { Link } from 'react-router-dom'

function Menu() {
    return (
        <div className="card d-flex justify-content-center align-items-center h-25 bg-primary div">
            <Link className="btn btn-secondary btn-lg" to="/story">Story</Link>
            <Link className="btn btn-secondary btn-lg" to="/">Characters</Link>
            <Link className="btn btn-secondary btn-lg" to="/">Contact</Link>
        </div>
    )
}

export default Menu
