import React from 'react'
import SmartPhoneTop from '../SmartphoneTop/SmartPhoneTop';
import './storyStyles.scss';

function Story() {
    return (
        <div className="container-fluid d-flex flex-column h-75 z-index">
            <SmartPhoneTop/>
            <div className="container d-flex align-items-center violet w-50 h-25">
                <span className="point bg-info rounded-circle"></span>
                <div className="container ms-2 my-1 d-flex flex-column green rounded-3 w-50">
                    <span className="fs-3">主⼈公、直也は⾼校１年⽣。</span>
                    <span className="fs-3">ずっと好きだった咲に告⽩し、</span>
                    <span className="fs-3">彼⼥になってもらうことに成功。幸せの絶頂にいた。</span>
                </div>
            </div>
            <div className="container d-flex align-items-center violet w-50 h-25">
                <div className="container me-2 my-1 d-flex flex-column green rounded-3 w-50">
                    <span className="fs-3">しかし、そんな直也に美少⼥・渚が声をかける。</span>
                    <span className="fs-3">彼⼥はいきなり、直也に付き合ってほしいと告⽩を迫るのだった。</span>
                </div>
                <span className="point bg-info rounded-circle"></span>
            </div>
            <div className="container d-flex align-items-center violet w-50 h-25">
                <span className="point bg-info rounded-circle"></span>
                <div className="container ms-2 my-1 d-flex flex-column green rounded-3 w-50">
                    <span className="fs-3">渚のあまりのいい⼈ぶりに⼼が揺れる直也は、ある決断をする…!!</span>
                </div>
            </div>
            <div className="container d-flex align-items-center violet w-50 h-25">
                <div className="container me-2 my-1 d-flex flex-column green rounded-3 w-50">
                    <span className="fs-3">まさかの選択から始まる、ネオスタンダードラブコメ!!</span>
                </div>
                <span className="point bg-info rounded-circle"></span>
            </div>
        </div>
    )
}

export default Story;