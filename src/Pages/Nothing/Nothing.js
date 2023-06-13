import React from 'react';
import {AiOutlineCheck} from 'react-icons/ai';
import {GoX} from 'react-icons/go';


import "./Nothing.scss"

const Nothing = () => {
    return (
        <div id="nothing">
            <div className="container">
                <div className="nothing--text">
                    <h3>Пакеты / Подробнее о пакетах</h3>
                    <h1>ВЫБЕРИТЕ СВОЙ ПАКЕТ УЧАСТИЯ</h1>
                    <p>Присоединяйтесь к нам и начните свой путь к успеху.</p>
                </div>


                <div className="nothing--all">
                    <div className="nothing--all__left">
                        <div className="nothing--all__right ">
                            <h4>Обычный</h4>
                            <div className="ordinary">
                                <input type="checkbox" id="check1" className="round-checkbox"/>
                                <h6>Ежемесячно</h6>
                            </div>
                            <div className="ordinary">
                                <input type="checkbox" id="check2" className="round-checkbox-transparent"/>
                                <h6>Ежегодно</h6>
                            </div>
                            <div className="ordinary--span"> <span><AiOutlineCheck
                                style={{fontSize: " 22px"}}/></span><h2> Все новые статьи</h2></div>
                            <div className="ordinary--span"> <span><AiOutlineCheck
                                style={{fontSize: "22px"}}/></span> <h2 > Все мастер классы по саморазвитию</h2></div>
                        </div>


                        <div className="baby--btn">
                            <h4>Цена: 225$</h4>
                            <button>Подписаться</button>
                        </div>
                    </div>

                    <div className="second">
                        <div className="second--all">
                            <h4>Интенсив</h4>
                            <div className="second--baby" >
                                <input type="checkbox" id="check1" className="round-checkbox"/>
                                <h6>Ежемесячно</h6>
                            </div>
                            <div className="second--baby">
                                <input type="checkbox" id="check2" className="round-checkbox-transparent"/>
                                <h6>Ежегодно</h6>
                            </div>
                            <div className="aiOut"> <span><AiOutlineCheck/> </span><h2> Все новые статьи</h2></div>
                            <div className="aiOut"> <span><AiOutlineCheck/> </span><h2>Все мастер классы по саморозвитию</h2></div>
                            <div className="aiOut"> <span><AiOutlineCheck/> </span><h2>Курс по чтению языка тела</h2></div>
                            <div className="aiOut"> <span><AiOutlineCheck/> </span><h2>Курс по накоплению средств с выполотой долгов</h2></div>
                            <div className="aiOut"> <span><AiOutlineCheck/> </span><h2> Курс по быстрому карьерному росту</h2></div>
                            <div className="aiOut"> <span><AiOutlineCheck/> </span><h2>Курс по одолеванию страха потери</h2></div>
                        </div>
                        <div className="baby--btn">
                            <h5>Цена: 750$</h5>
                            <button>Подписаться</button>
                        </div>

                    </div>
                </div>
                <div className="master">
                    <p>В “Обычный” пакет участия для само-развития включает в себя: </p>
                    <div  className="master--all">
                        <div className="aiOut"> <span><AiOutlineCheck/> </span><h2> Все новые статьи</h2></div>
                        <div className="aiOut"> <span><AiOutlineCheck/> </span><h2> Все мастер классы по саморозвитию</h2></div>
                        <div className="aiOut"> <span><GoX/> </span><h2> Курс по чтению языка тела</h2></div>
                        <div className="aiOut"> <span><GoX/> </span><h2> Курс по накоплению средств с выполотой долгов</h2></div>
                        <div className="aiOut"> <span><GoX/> </span><h2> Курс по быстрому карьерному росту</h2></div>
                        <div className="aiOut"> <span ><GoX/> </span><h2>Курс по одолеванию страха потери</h2></div>

                    </div>

                </div>
<div className="last">
    <h1>
        Плюсы пакета
    </h1>
    <p> Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых эксклюзивных мастер классов, а также очень много наиполезнейших статей от самых разных успешных людей чтобы получать ежедневные уроки чтобы улучшить жизнь и не только</p>
</div>

            </div>

        </div>
    );
};

export default Nothing;