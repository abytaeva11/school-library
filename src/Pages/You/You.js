import React, { useRef } from 'react';
import ReactPlayer from 'react-player';

const You = () => {
    const playerRef = useRef(null);

    const toggleFullScreen = () => {
        const player = playerRef.current;
        if (player) {
            if (player.requestFullscreen) {
                player.requestFullscreen();
            } else if (player.mozRequestFullScreen) {
                player.mozRequestFullScreen();
            } else if (player.webkitRequestFullscreen) {
                player.webkitRequestFullscreen();
            } else if (player.msRequestFullscreen) {
                player.msRequestFullscreen();
            }
        }
    };

    return (
        <div style={{marginLeft:"170px"}}>
            <ReactPlayer
                ref={playerRef}
                url="https://i.pinimg.com/originals/b7/83/a3/b783a38e9a5a87f62162bc1558ed067f.jpg"
                controls={true}
                playing={false}
                width="900px"
                height="400px"
            />




            {/*<iframe width="480" height="270"*/}
            {/*        src="https://dzen.ru/embed/vWxLm7YZ9YkE?from_block=partner&from=zen&mute=0&autoplay=0&tv=0"*/}
            {/*        allow="autoplay; fullscreen; accelerometer; gyroscope; picture-in-picture; encrypted-media"*/}
            {/*        frameBorder="0" scrolling="no" allowFullScreen></iframe>*/}

        </div>
    );
};

export default You;
