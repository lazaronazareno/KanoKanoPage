import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Colors/theme.scss'
import { changeTheme } from '../../Redux/reducers';

function IndividualCharacter(props) {
    const dispatch = useDispatch();
    const theme = useSelector(store => store.kanokano.theme)
    const character = useSelector(store => store.kanokano.characters[theme])

    return (
        <div className={`container d-flex ${theme}`}>
            <img className="img" src={character.url}/>
            <div className="d-flex flex-column justify-content-center">
                <h1>{character.name}</h1>
                <h1>{character.originalName}</h1>
                <span>{character.cv}</span>
                <span>{character.student}</span>
                <span>{character.relationship}</span>
                <span>{character.info}</span>
                <span>{character.food}</span>
                <span>{character.birthday}</span>
                <div>
                  <Link className="btn btn-success" to="/characters" onClick={() => dispatch(changeTheme(theme))}>Accept</Link>
                  <Link className="btn btn-danger" to="/characters" onClick={() => dispatch(changeTheme('normal'))}>Decline</Link>
                </div>
            </div>
        </div>
    )
}

export default IndividualCharacter
