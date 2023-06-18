import React from 'react';
import './bolot.scss'

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
                    <input className='kol text-fuchsia-500' type="file" placeholder='Photo' accept='image/png'/>

                </div>
            </div>


        </div>
    );
};

export default Bolot;