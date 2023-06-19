import React, { useState, useRef } from 'react';
import picture from "../You/picture.png"
import "../You/You.scss"
import { FaPlay } from "react-icons/fa";
import { IoMdPause } from "react-icons/io";
import { TbAntennaBars5 } from "react-icons/tb";
import creative from "../You/creative.svg"
import { IoSettingsSharp } from "react-icons/io5";
import { AiOutlineFullscreen } from "react-icons/ai";

const You = () => {
    const [videoActivated, setVideoActivated] = useState(false);
    const [isResizing, setIsResizing] = useState(false);
    const lineRef = useRef(null);
    const initialWidthRef = useRef(0);
    const [zet, setZet] = useState(false)
    const handleButtonClick = () => {
        const line = lineRef.current;
        if (!videoActivated) {
            line.style.width = '870px';
        } else {
            line.style.width = line.offsetWidth + 'px';
        }
        setVideoActivated(!videoActivated);
        setZet(true)
    };

    const handleMouseDown = (event) => {
        setIsResizing(true);
        initialWidthRef.current = event.clientX - lineRef.current.getBoundingClientRect().left;
    };

    const handleMouseMove = (event) => {
        if (isResizing) {
            const line = lineRef.current;
            const width = event.clientX - line.getBoundingClientRect().left;
            line.style.width = `${width}px`;
        }
    };

    const handleMouseUp = () => {
        setIsResizing(false);
    };

    return (
        <div id="you">
            <div className="you">
                <div className="container">
                    <div className="you--picture">
                        <img className="you--picture__pic" src={picture} alt=""/>
                        {!videoActivated ? (
                            <button style={{
                                transition: ".4s ease in out",
                                position: zet ? "absolute" : "",
                                top: zet ? "564px" : "",
                                left: zet ? "20px" : "",
                                width: zet ? "65px" : "",
                                height: zet ? "40px" : ""
                            }}
                                className={`you--picture__play ${zet ? '' : 'active'}`}
                                onClick={handleButtonClick}
                            >
                <span style={{
                    transition: ".4s ease in out",
                    fontSize: zet ? "20px" : "",
                    left: zet ? "25px" : "",
                    top: zet ? "10px" : ""

                }} className="you--picture__play--iconca">
                  {videoActivated ? <IoMdPause /> : <FaPlay />}
                    <div></div>
                </span>
                            </button>
                        ) : (
                            <button
                                className={`you--picture__pause ${videoActivated ? 'activated' : ''}`}
                                onClick={handleButtonClick}
                            >
                <span className="you--picture__pause--iconca">
                  {videoActivated ? <IoMdPause /> : <FaPlay />}
                </span>
                            </button>
                        )}
                        <div  className={ zet ? "you--picture__bacvid2" : "you--picture__bacvid"}>
                            <div className="you--picture__bacvid--line">
                                <div className="you--picture__bacvid--line__border">
                                    <div
                                        ref={lineRef}
                                        className="you--picture__bacvid--line__border--anim"
                                        onMouseDown={handleMouseDown}
                                        onMouseMove={handleMouseMove}
                                        onMouseUp={handleMouseUp}
                                    ></div>
                                </div>
                            </div>
                            <div className="you--picture__bacvid--icon">
                                <div className="you--picture__bacvid--icon__antenna">
                                    <TbAntennaBars5 />
                                </div>
                                <div className="you--picture__bacvid--icon__creative">
                                    <img src={creative} alt=""/>
                                </div>
                                <div className="you--picture__bacvid--icon__set">
                                    <IoSettingsSharp />
                                </div>
                                <div className="you--picture__bacvid--icon__full">
                                    <AiOutlineFullscreen />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default You;
