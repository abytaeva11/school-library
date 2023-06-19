import React, { useState } from 'react';
import picture from "../You/picture.png"
import "../You/You.scss"
import { FaPlay } from "react-icons/fa";
import {IoMdPause} from "react-icons/io";
import paly from "../You/128210 (Original).mp4"

import alone from "../../assets/img/img2.png"

const You = () => {
    const [videoActivated, setVideoActivated] = useState(false);
    const [ next, setNext] = useState(false)
    // const [buttonIcon, setButtonIcon] = useState(<FaPlay/>)
    const handleButtonClick = () => {
        setVideoActivated(!videoActivated); // Переключаем значение флага videoActivated
        setNext(!next)
        // setTimeout(()=>{
        //     setButtonIcon(videoActivated ? <FaPlay/> : <IoMdPause/>)
        // }, 1000)
    };

    return (
        <div id="you">
            <div className="you">
                <div className="container">
                    <div className="you--picture">
                        {/*<img className="you--picture__pic" src={picture} alt=""/>*/}
                        {
                            !videoActivated ?   <button className={`you--picture__play ${videoActivated ? 'active' : ''}`} onClick={handleButtonClick}>
                            <span className="you--picture__play--iconca">
                          {videoActivated ?  <IoMdPause /> : <FaPlay /> }
                                <div></div>
                            </span>
                            </button> :
                                <button className={`you--picture__pause ${videoActivated ? 'activated' : ''}`} onClick={handleButtonClick}>
                            <span className="you--picture__pause--iconca">
                              {videoActivated ?  <IoMdPause /> : <FaPlay /> }
                            </span>
                                </button>
                        }

                        <video id="player" playsInline controls data-poster="/path/to/poster.jpg">
                            <source src={paly} type="video/mp4"/>

                        </video>
                    </div>
                    <div>
                        <img className="alone" src={alone} alt=""/>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default You;
