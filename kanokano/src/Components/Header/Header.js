import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../Assets/logo@2x.png';
import '../../Colors/theme.scss';
import Menu from '../MainMenu/Menu';
import './styles.scss';

function Header() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <header className={`container-fluid header d-flex position-absolute top-0 ${theme}`}>
            <Link to="/home">
              <img className="img-fluid header-img" src={logo} alt="img"/>
            </Link>
            <Menu className="justify-self-end"/>
        </header>
    )
}

export default Header;