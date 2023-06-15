import React from 'react';

const YouTube = () => {
    return (
        <div>
            <iframe width="1000" height="536" src="https://www.youtube.com/embed/V0qAq6ZLpic"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen style={{ marginLeft:"130px"}}></iframe>
        </div>
    );
};

export default YouTube;