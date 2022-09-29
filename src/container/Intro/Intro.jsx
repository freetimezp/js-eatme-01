import React, {useState, useRef} from 'react';

import {meal} from '../../constants';
import {BsFillPlayFill, BsFillPauseFill} from "react-icons/bs";
import './Intro.css';

const Intro = () => {
    const [playVideo, setPlayVideo] = useState(false);
    const vidRef = useRef();

    const handleVideo = () => {
        setPlayVideo((prevPlayVideo) => !prevPlayVideo);

        if(playVideo) {
            vidRef.current.pause();
        }else{
            vidRef.current.play();
        }
    }

    return (
        <div className="app__video">
            <video
                src={meal} type="video/mp4" loop controls={false} muted
                ref={vidRef}
            />

            <div className="app__video-overlay flex__center">
                <div className="app__video-overlay_circle flex__center" onClick={handleVideo}>
                    {playVideo ? (
                        <BsFillPauseFill color="#fff" fontSize={30} />
                    ) : (
                        <BsFillPlayFill color="#fff" fontSize={30} />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Intro;
