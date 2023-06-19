import React from 'react';
import "./course.css"
import img1 from "../Course/img/image 1.svg"
import {Link, NavLink} from "react-router-dom";
import fin2 from "../hero/img/book3.png"
import fin3 from "../hero/img/Kaif 5.png"



const Course = () => {
    return (
        <section id="course">
            <div className="container">
                <div className="course">
                    <h1  className="bingo">Курсы</h1>
                    <div className="course1">
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                </div>
                                <a href="">Подробнее...</a>

                            </div>
                        <div className="course-block">
                            <h1>Создание команды</h1>
                            <div className="text">
                                <div>
                                    <p>Обучение</p>
                                </div>
                                <div className="btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <div className="text2">
                                <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                            </div>
                            <a href="">Подробнее...</a>

                        </div>
                        <div className="course-block">
                            <h1>Создание команды</h1>
                            <div className="text">
                                <div>
                                    <p>Обучение</p>
                                </div>
                                <div className="btn">
                                    <button>Все</button>
                                    <button>Новое</button>
                                    <button>Книги</button>
                                </div>
                            </div>
                            <div className="text2">
                                <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                            </div>
                            <a href="">Подробнее...</a>

                        </div>
                    </div>

                    <div className="btn2">
                        <button className="btn2-btn">Смотреть все курсы</button>
                    </div>
                    <img className="finish2" src={fin2} alt=""/>
                    <img className="finish3" src={fin3} alt=""/>

                </div>

                <div className="bigmaster">
                    <h1 className="class">Мастер классы</h1>

                    <div className="master">
                        <div className="course1">
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="master">
                        <div className="course1">
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                            <div className="course-block">
                                <h1>Создание команды</h1>
                                <div className="text">
                                    <div>
                                        <p>Обучение</p>
                                    </div>
                                    <div className="btn">
                                        <button>Все</button>
                                        <button>Новое</button>
                                        <button>Книги</button>
                                    </div>
                                </div>
                                <div className="text2">
                                    <NavLink to={"/youtube"}> <img src={img1} alt=""/></NavLink>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                        </div>

                        <div className="btn3">
                            <Link to="/photo">
                                <button>Смотреть все курсы</button>
                            </Link>

                        </div>

                    </div>
                </div>

            </div>
        </section>
    )
}
export default Course;