import React from 'react';
import logo from '../../Assets/logo@2x.png';

function Header() {
    return (
        <header className="container-fluid position-absolute top-0 bg-primary">
            <img className="me-md-auto" src={logo} alt="img"/>
        </header>
    )
}

export default Header;