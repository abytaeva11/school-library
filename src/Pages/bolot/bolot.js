import React from 'react';
import './bolot.scss'

import bolot1 from "../../assets/img/img4.png"
import bolot2 from "../../assets/img/img1.png"
import bolot3 from "../../assets/img/img1.png"
import bolot4 from "../../assets/img/img2.png"





const Bolot = () => {
    return (
        <div id='bolot'>
            <div className="container">
                <div className="bolot">
                    <div className="bolot-title">
                        <h3>Спикер</h3>
                        <h1>Muslim Bolot</h1>
                        <p>Милиардер, Филиантроп, Гений, Бизнес мен</p>
                        <div className="bolot-text">
                            <p>Был обычным школьником, но изменился.</p>
                            <p>Молодой гений не признанный обществом.</p>
                            <p>Страрательный парень</p>
                        </div>
                    </div>
                    <input className='kol text-fuchsia-500' type="file" accept='image/png' onChange={(e) => e.target.value = null} />



                </div>
            </div>
            <div>
                <img className="bolot1" src={bolot1} alt=""/>
                <img className="bolot2" src={bolot2} alt=""/>
                <img className="bolot3" src={bolot3} alt=""/>
                <img className="bolot4" src={bolot4} alt=""/>

            </div>

        </div>
    );
};

export default Bolot;