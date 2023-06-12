import React from 'react';
import "./course.css"
import img1 from "../Course/img/image 1.svg"
import {Link} from "react-router-dom";


const Course = () => {
    return (
        <section id="course">
            <div className="container">
                <h1>Курсы</h1>
                <div className="course">
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
                                    <img src={img1} alt=""/>
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
                                    <img src={img1} alt=""/>
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
                                    <img src={img1} alt=""/>
                                    <a href="">Подробнее...</a>
                                </div>
                            </div>
                        </div>
                    <div  className="btn2">
                        <button>Смотреть все курсы</button>
                    </div>

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
                    <img src={img1} alt=""/>
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
                    <img src={img1} alt=""/>
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
                    <img src={img1} alt=""/>
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
                    <img src={img1} alt=""/>
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
                    <img src={img1} alt=""/>
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
                    <img src={img1} alt=""/>
                    <a href="">Подробнее...</a>
                </div>
            </div>
        </div>

        <div className="btn3">
            <Link to="/photo">             <button>Смотреть все курсы</button>
            </Link>

        </div>

    </div>
</div>

            </div>
        </section>
    )
}
export default Course;