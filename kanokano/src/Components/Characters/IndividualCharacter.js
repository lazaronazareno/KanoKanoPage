import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import '../../Colors/theme.scss'
import { changeTheme } from '../../Redux/reducers';
import decline from '../../Assets/call-red.png';
import accept from '../../Assets/call-green.png';

function IndividualCharacter(props) {
    const dispatch = useDispatch();
    const theme = useSelector(store => store.kanokano.theme)
    const character = useSelector(store => store.kanokano.characters[theme])

    return (
        <div className={`container d-flex align-items-center ${theme}`}>
            <img className="img img-fluid" src={character.url} alt={character.url}/>
            <div className="container d-flex flex-column justify-content-center">
                <h1>{character.name}</h1>
                <h1>{character.originalName}</h1>
                <span className="text-wrap">{character.cv}</span>
                <span className="text-wrap">{character.student}</span>
                <span className="text-wrap">{character.relationship}</span>
                <span className="text-wrap">{character.info}</span>
                <span className="text-wrap">{character.food}</span>
                <span className="text-wrap">{character.birthday}</span>
                <div className="d-flex justify-content-center">
                  <Link to="/home" onClick={() => dispatch(changeTheme(theme))}>
                      <img className="img-fluid icon m-4" src={accept} alt="accept call"/> 
                  </Link>
                  <Link to="/characters" onClick={() => dispatch(changeTheme('normal'))}>
                      <img className="img-fluid icon m-4" src={decline} alt="decline call"/>
                  </Link>
                </div>
            </div>
        </div>
    )
}

export default IndividualCharacter
