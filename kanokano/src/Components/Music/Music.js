import React from 'react';
import { useSelector } from 'react-redux';
import '../../Colors/theme.scss'

function Music() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <div className={`container d-flex flex-column justify-content-center align-items-center text-center div ${theme}`}>
            <h1>Opening</h1>
            <iframe id="ytplayer" type="text/html" className="video"
                 src="https://www.youtube.com/embed/hk1wJaZx5tE"
                 title="opening"
                 frameBorder="0" allowFullScreen>
            </iframe>
            <h1>Ending</h1>
            <iframe id="ytplayer" type="text/html" className="video"
                 src="https://www.youtube.com/embed/RtbaTwOXv0c"
                 title="ending"
                 frameBorder="0" allowFullScreen>
            </iframe>
        </div>
    )
}

export default Music
