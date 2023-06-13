import React from 'react';
import Course from "../Pages/Course/course";
import Reviews from "../Pages/Rewiew/Reviews";
import Tell from "../Pages/Telegram/Tell";
import Paket from "../Pages/Paket/paket";
import Questions from "../Pages/Questions/Questions";

const WeAre = () => {
    return (
        <div>
            <Paket/>
            <Course/>
            <Reviews/>
            <Questions/>
            <Tell/>
        </div>
    );
};

export default WeAre;