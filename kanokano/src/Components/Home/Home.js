import React from 'react'
import { Link } from 'react-router-dom'
import './styles.scss';

function Home() {
    return (
        <div className="card d-flex justify-content-center align-items-center h-25 bg-primary div">
            <h1>KanoKano FanPage</h1>
            <h2>Bienvenidos</h2>
            <h2>Solo es para rendir tributo a su obra y sin animos de lucrar con esta pagina</h2>
            <Link className="btn btn-secondary btn-lg" to="/menu"> Entrar </Link>
        </div>
    )
}

export default Home
