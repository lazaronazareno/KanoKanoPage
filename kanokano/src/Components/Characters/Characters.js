import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Colors/theme.scss';
import { changeTheme } from '../../Redux/reducers';


function Characters() {
    const dispatch = useDispatch();
    const theme = useSelector(store => store.kanokano.theme)
    const character = useSelector(store => store.kanokano.characters)

    return (
        <div className="container characters width">
            <div className="d-flex flex-warp justify-content-evenly column">
                <Link to="/character" className="d-flex" onClick={() => dispatch(changeTheme('character1'))}>
                    <img className="img-fluid characterIcon" src={character.character1.icon} alt={character.character1.id}/>
                </Link>
                <Link to="/character" className="d-flex" onClick={() => dispatch(changeTheme('character2'))}>
                    <img className="img-fluid characterIcon" src={character.character2.icon} alt={character.character2.id}/>
                </Link>
                <Link to="/character" className="d-flex" onClick={() => dispatch(changeTheme('character3'))}>
                    <img className="img-fluid characterIcon" src={character.character3.icon} alt={character.character3.id}/>
                </Link>
                <Link to="/character" className="d-flex" onClick={() => dispatch(changeTheme('character4'))}>
                    <img className="img-fluid characterIcon" src={character.character4.icon} alt={character.character4.id}/>
                </Link>
            </div>
            <div className="d-flex justify-content-center">
                <Link to="/home" className="btn btn-outline-dark" onClick={() => dispatch(changeTheme(theme))}>Back</Link>
            </div>
        </div>
    )
}

export default Characters
