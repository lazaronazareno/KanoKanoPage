import React from 'react';
import { useSelector } from 'react-redux';
import '../../Colors/theme.scss';

function Footer() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <footer className={`container-fluid d-flex position-absolute bottom-0 border-top ${theme}`}>
            <span className="me-md-auto text-dark text-decoration-none">Copyright 2021 ©KanoKanoPage by @lazaroFMD. All right reserved.</span>
        </footer>
    )
}

export default Footer;