import React from 'react';
import Course from "../Pages/Course/course";
import Reviews from "../Pages/Rewiew/Reviews";
import Tell from "../Pages/Telegram/Tell";
import Paket from "../Pages/Paket/paket";
const WeAre = () => {
    return (
        <div>
            <Paket/>
            <Course/>
            <Reviews/>
            <Tell/>
            <Reviews/>


        </div>
    );
};

export default WeAre;