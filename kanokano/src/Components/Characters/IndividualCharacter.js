import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Colors/theme.scss'

function IndividualCharacter(props) {
    const theme = useSelector(store => store.kanokano.theme)
    const character = useSelector(store => store.kanokano.characters[theme])

    return (
        <div className={`container d-flex ${theme}`}>
            <img className="img" src={character.url}/>
            <div className="d-flex flex-column">
                <h1>{character.name}</h1>
                <h1>{character.originalName}</h1>
                <span>{character.cv}</span>
                <span>{character.student}</span>
                <span>{character.relationship}</span>
                <span>{character.info}</span>
                <span>{character.food}</span>
                <span>{character.birthday}</span>
                <div>
                  <Link className="btn btn-primary" to="/characters">back</Link>
                </div>
            </div>
        </div>
    )
}

export default IndividualCharacter
