import React from 'react'
import SmartPhoneTop from '../SmartphoneTop/SmartPhoneTop';
import { useSelector } from 'react-redux';
import './storyStyles.scss';
import { Link } from 'react-router-dom';

function Story() {
    const theme = useSelector(store => store.kanokano.theme)
    return (
        <div className="container bg-light d-flex flex-column z-index p-0 responsive">
            <SmartPhoneTop/>
            <div className="container d-flex align-items-center my-1">
                <span className="point violet rounded-circle"></span>
                <div className={`d-flex flex-column rounded-3 ${theme}`}>
                    <span className="fs-4 text-wrap">主⼈公、直也は⾼校１年⽣。</span>
                    <span className="fs-4 text-wrap">ずっと好きだった咲に告⽩し、</span>
                    <span className="fs-4 text-wrap">彼⼥になってもらうことに成功。幸せの絶頂にいた。</span>
                </div>
            </div>
            <div className="container d-flex justify-content-end align-items-center my-1">
                <div className={`d-flex flex-column rounded-3 ${theme}`}>
                    <span className="fs-4 text-wrap">しかし、そんな直也に美少⼥・渚が声をかける。</span>
                    <span className="fs-4 text-wrap">彼⼥はいきなり、直也に付き合ってほしいと告⽩を迫るのだった。</span>
                </div>
                <span className="point violet rounded-circle"></span>
            </div>
            <div className="container d-flex align-items-center my-1">
                <span className="point violet rounded-circle"></span>
                <div className={`d-flex flex-column rounded-3 ${theme} ms-0`}>
                    <span className="fs-4 text-wrap">渚のあまりのいい⼈ぶりに⼼が揺れる直也は、ある決断をする…!!</span>
                </div>
            </div>
            <div className="container d-flex justify-content-end my-1">
                <div className={`d-flex flex-column rounded-3 ${theme}`}>
                    <span className="fs-4 text-wrap">まさかの選択から始まる、ネオスタンダードラブコメ!!</span>
                </div>
                <span className="point violet rounded-circle"></span>
            </div>
            <Link to="/characters" className="btn btn-outline-dark">
                Characters
            </Link>
        </div>
    )
}

export default Story;