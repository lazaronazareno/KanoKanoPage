import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo@2x.png';
import '../../Colors/theme.scss';

function Header() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <header className={`container-fluid position-absolute top-0 ${theme}`} >
            <Link to="/home">
              <img className="me-md-auto" src={logo} alt="img"/>
            </Link>
        </header>
    )
}

export default Header;