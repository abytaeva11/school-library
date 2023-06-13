import {AiOutlineCheck} from 'react-icons/ai';
import {GoX} from 'react-icons/go';
import React, {useContext, useState} from "react";
import query from "../../Pages/Questions/img/bigQuery.png";
import {LanguageContext} from "../../components/Context";
import {useNavigate} from "react-router-dom";
import "./Nothing.scss"

const Nothing = () => {
    const {language} = useContext(LanguageContext);
    const {data} = useContext(LanguageContext);
    const navigate = useNavigate();
    function AccordionItem({title, content}) {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleAccordion = () => {
            setIsExpanded(!isExpanded);
        };
        return (
            <div
                className={`relative border-b border-gray-300 mb-2 ${
                    isExpanded ? "expanded" : ""
                }`}
            >
                <h2 className="">
                    <button
                        className="flex items-center relative justify-between w-full p-[0.4rem] text-left"
                        onClick={toggleAccordion}
                        aria-expanded={isExpanded}
                    >
                <span className="text-white font-[300] text-[25px] font-sans w-[540px]">
            {title}
                </span>
                        <svg
                            className={`accordion-icon w-9 h-9 rotate-0 shrink-0 text-white mb-[30px] ${
                                isExpanded ? "rotate-[-180deg] duration-500 " : "rotate-0 duration-500"
                            }`}
                            fill="currentColor"
                            viewBox=" 0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </h2>
                {isExpanded && (
                    <div className="accordion-content p-[0.7rem] text-white text-[16px] w-[570px] font-sans">
                        {content}
                    </div>
                )}
            </div>
        );
    }

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
                                    style={{fontSize: "22px"}}/></span> <h2> Все мастер классы по саморазвитию</h2>
                                </div>
                            </div>


                            <div className="baby--btn">
                                <h4>Цена: 225$</h4>
                                <button>Подписаться</button>
                            </div>
                        </div>

                        <div className="second--all">
                            <div className="second">
                                <div className="second--all">
                                    <h4>Интенсив</h4>
                                    <div className="second--baby">
                                        <input type="checkbox" id="check1" className="round-checkbox"/>
                                        <h6>Ежемесячно</h6>
                                    </div>
                                    <div className="second--baby">
                                        <input type="checkbox" id="check2" className="round-checkbox-transparent"/>
                                        <h6>Ежегодно</h6>
                                    </div>
                                    <div className="aiOut"><span><AiOutlineCheck/> </span><h2> Все новые статьи</h2>
                                    </div>
                                    <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Все мастер классы по
                                        саморозвитию</h2></div>
                                    <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Курс по чтению языка
                                        тела</h2>
                                    </div>
                                    <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Курс по накоплению средств
                                        с
                                        выполотой долгов</h2></div>
                                    <div className="aiOut"><span><AiOutlineCheck/> </span><h2> Курс по быстрому
                                        карьерному
                                        росту</h2></div>
                                    <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Курс по одолеванию страха
                                        потери</h2></div>
                                </div>
                                <div className="baby--btn">
                                    <h5>Цена: 750$</h5>
                                    <button>Подписаться</button>
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="master">
                        <p>В “Обычный” пакет участия для само-развития включает в себя: </p>
                        <div className="master--all">
                            <div className="aiOut"><span><AiOutlineCheck/> </span><h2> Все новые статьи</h2></div>
                            <div className="aiOut"><span><AiOutlineCheck/> </span><h2> Все мастер классы по
                                саморозвитию</h2>
                            </div>
                            <div className="aiOut"><span><GoX/> </span><h2> Курс по чтению языка тела</h2></div>
                            <div className="aiOut"><span><GoX/> </span><h2> Курс по накоплению средств с выполотой
                                долгов</h2>
                            </div>
                            <div className="aiOut"><span><GoX/> </span><h2> Курс по быстрому карьерному росту</h2></div>
                            <div className="aiOut"><span><GoX/> </span><h2>Курс по одолеванию страха потери</h2></div>

                        </div>

                    </div>
                    <div className="last">
                        <h1>
                            Плюсы пакета
                        </h1>
                        <p> Выбрав этот пакет вы получаете возможность получать неогранниченное количество самых
                            эксклюзивных
                            мастер классов, а также очень много наиполезнейших статей от самых разных успешных людей
                            чтобы
                            получать ежедневные уроки чтобы улучшить жизнь и не только</p>
                    </div>
                    <div className="question pt-[90px] pb-[200px] px-[0]">
                        <div className="container mx-auto">
                            {data.map((el) => (
                                <div className="pt-12 items-center" key={el.accord.name}>
                                    <h2 className="text-white text-3xl font-semibold">{language ? el.accord.nameKG : el.accord.name}</h2>
                                    <div className="flex">
                                        <div className="relative">
                                            <img src={query} className="ml-20 mt-8 " width={280} alt=""/>
                                        </div>
                                        <div className="ml-12 mt-4">
                                            <div id="accordion-collapse" className="accordion">
                                                <AccordionItem
                                                    title={language ? el.accord.question1KG : el.accord.question1}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                />
                                                <AccordionItem
                                                    title={language ? el.accord.question2KG : el.accord.question2}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                />
                                                <AccordionItem
                                                    title={language ? el.accord.question3KG : el.accord.question3}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                />
                                                <AccordionItem
                                                    title={language ? el.accord.question4KG : el.accord.question4}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    );
                    };

                </div>

            </div>

        );

}

export default Nothing;