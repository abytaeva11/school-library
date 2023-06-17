import {AiOutlineCheck} from 'react-icons/ai';
import {GoX} from 'react-icons/go';
import React, {useContext, useState} from "react";
import query from "../../Pages/Questions/img/bigQuery.png";
import {LanguageContext} from "../../components/Context";
import {Link, useNavigate} from "react-router-dom";
import "./Nothing.scss"
import book1 from "../Questions/Subscribing/book1.svg";
import book2 from "../Questions/Subscribing/book2.svg";
import {BsCheckLg} from "react-icons/bs";

const Nothing = () => {
    const {language} = useContext(LanguageContext);
    const {data} = useContext(LanguageContext);
    const {subscribe} = useContext(LanguageContext)
    const [expandedItems, setExpandedItems] = useState(null);
    const [isIntensiveSelected, setIsIntensiveSelected] = useState(false);
    const handleIntensiveChooseClick = () => {
        setIsIntensiveSelected(true);

    };
    const handleUsualChooseClick = () => {
        setIsIntensiveSelected(false);
    }
        function AccordionItem({ id, title, content, activeItemId }) {
            const isExpanded = expandedItems === id;

            const toggleAccordion = () => {
                setExpandedItems(isExpanded ? null : id);
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

                        {/*<div className="nothing--all__left">*/}
                        {/*    <div className="nothing--all__right ">*/}
                        {/*        <h4>Обычный</h4>*/}
                        {/*        <div className="ordinary">*/}
                        {/*            <input type="checkbox" id="check1" className="round-checkbox"/>*/}
                        {/*            <h6>Ежемесячно</h6>*/}
                        {/*        </div>*/}
                        {/*        <div className="ordinary">*/}
                        {/*            <input type="checkbox" id="check2" className="round-checkbox-transparent"/>*/}
                        {/*            <h6>Ежегодно</h6>*/}
                        {/*        </div>*/}
                        {/*        <div className="ordinary--span"> <span><AiOutlineCheck*/}
                        {/*            style={{fontSize: " 22px"}}/></span><h2> Все новые статьи</h2></div>*/}
                        {/*        <div className="ordinary--span"> <span><AiOutlineCheck*/}
                        {/*            style={{fontSize: "22px"}}/></span> <h2> Все мастер классы по саморазвитию</h2>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}


                        {/*    <div className="baby--btn">*/}
                        {/*        <h4>Цена: 225$</h4>*/}
                        {/*        <button>Подписаться</button>*/}
                        {/*    </div>*/}
                        {/*</div>*/}

                        {/*<div className="second--all">*/}
                        {/*    <div className="second">*/}
                        {/*        <div className="second--all">*/}
                        {/*            <h4>Интенсив</h4>*/}
                        {/*            <div className="second--baby">*/}
                        {/*                <input type="checkbox" id="check1" className="round-checkbox"/>*/}
                        {/*                <h6>Ежемесячно</h6>*/}
                        {/*            </div>*/}
                        {/*            <div className="second--baby">*/}
                        {/*                <input type="checkbox" id="check2" className="round-checkbox-transparent"/>*/}
                        {/*                <h6>Ежегодно</h6>*/}
                        {/*            </div>*/}
                        {/*            <div className="aiOut"><span><AiOutlineCheck/> </span><h2> Все новые статьи</h2>*/}
                        {/*            </div>*/}
                        {/*            <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Все мастер классы по*/}
                        {/*                саморозвитию</h2></div>*/}
                        {/*            <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Курс по чтению языка*/}
                        {/*                тела</h2>*/}
                        {/*            </div>*/}
                        {/*            <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Курс по накоплению средств*/}
                        {/*                с*/}
                        {/*                выполотой долгов</h2></div>*/}
                        {/*            <div className="aiOut"><span><AiOutlineCheck/> </span><h2> Курс по быстрому*/}
                        {/*                карьерному*/}
                        {/*                росту</h2></div>*/}
                        {/*            <div className="aiOut"><span><AiOutlineCheck/> </span><h2>Курс по одолеванию страха*/}
                        {/*                потери</h2></div>*/}
                        {/*        </div>*/}
                        {/*        <div className="baby--btn">*/}
                        {/*            <h5>Цена: 750$</h5>*/}
                        {/*            <button>Подписаться</button>*/}
                        {/*        </div>*/}

                        {/*    </div>*/}
                        {/*</div>*/}
                        <div className="cribe--level">
                            {
                                subscribe.map((el) => (
                                    <div className="cribe--level__just">
                                        <h2>{el.average.title}</h2>
                                        <div className="cribe--level__just--column">
                                            <div style={{
                                                marginRight: isIntensiveSelected ? "20px" : "20px"
                                            }} className={isIntensiveSelected ? "cribe--level__just--column__intensive" : "cribe--level__just--column__usual" }>
                                                <img className="cribe--level__just--column__usual--book1" src={book1}
                                                     alt=""/>
                                                <img className="cribe--level__just--column__usual--book2" src={book2}
                                                     alt=""/>
                                                <div className="cribe--level__just--column__usual--marge">
                                                    <h1>{el.average.usual}</h1>
                                                    <div className="cribe--level__just--column__usual--marge__input">
                                                        <input
                                                            type="checkbox"
                                                            className={`checkbox-input`}
                                                        />


                                                        <h3 className="cribe--level__just--column__usual--marge__input--year">{el.average.usual2}</h3>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__input2">
                                                        <input
                                                            type="checkbox"
                                                            className={`checkbox-input`}

                                                        />
                                                        <h5>{el.average.usual3}</h5>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{el.average.usual4}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{el.average.usual5}</h4>
                                                    </div>
                                                    <h2>{el.average.usual6}</h2>
                                                    {
                                                        isIntensiveSelected ? <button  onClick={handleUsualChooseClick}
                                                                                       className="choose1">{el.sub}</button>
                                                            : <button  onClick={handleUsualChooseClick}
                                                                       className="choose">{el.sub}</button>
                                                    }
                                                </div>

                                            </div>
                                            <div  className={isIntensiveSelected ? "cribe--level__just--column__usual" : "cribe--level__just--column__intensive"}>
                                                <div className="cribe--level__just--column__intensive--marge">
                                                    <h1>{el.intensive.title2}</h1>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__input">
                                                        <input
                                                               className={`checkbox-input2`}
                                                        />
                                                        <h3 className="cribe--level__just--column__intensive--marge__input--year">{el.average.usual2}</h3>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__input2">
                                                        <input
                                                            className={`checkbox-input2`}
                                                        />
                                                        <h5>{el.intensive.careful}</h5>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{el.intensive.careful2}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{el.intensive.careful3}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check3">
                                                        <BsCheckLg className="iconka3"/>
                                                        <h4>{el.intensive.careful4}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check4">
                                                        <BsCheckLg className="iconka4"/>
                                                        <h4>{el.intensive.careful5}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check5">
                                                        <BsCheckLg className="iconka5"/>
                                                        <h4>{el.intensive.careful6}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check6">
                                                        <BsCheckLg className="iconka6"/>
                                                        <h4>{el.intensive.careful7}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__intensive--marge__coin">
                                                        <h2>{el.intensive.coin} </h2><h6>{el.intensive.coin2}</h6>
                                                    </div>
                                                    {
                                                        isIntensiveSelected ?
                                                            <button  onClick={handleIntensiveChooseClick}
                                                                     className="choose">{el.sub}</button> :
                                                            <button onClick={handleIntensiveChooseClick}
                                                                    className="choose1">{el.sub}</button>
                                                    }

                                                </div>
                                            </div>
                                        </div>


                                    </div>
                                ))

                            }
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
                            {data.map((el, index) => (
                                <div className="pt-12 items-center" key={el.accord.name}>
                                    <h2 className="text-white text-3xl font-semibold">
                                        {language ? el.accord.nameKG : el.accord.name}
                                    </h2>
                                    <div className="flex">
                                        <div className="relative">
                                            <img src={query} className="ml-20 mt-8" width={280} alt="" />
                                        </div>
                                        <div className="ml-12 mt-4">
                                            <div id={`accordion-${index}`} className="accordion">
                                                <AccordionItem
                                                    id={`accordion-item-${index}-1`}
                                                    title={language ? el.accord.question1KG : el.accord.question1}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                    activeItemId={expandedItems}
                                                />
                                                <AccordionItem
                                                    id={`accordion-item-${index}-2`}
                                                    title={language ? el.accord.question2KG : el.accord.question2}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                    activeItemId={expandedItems}
                                                />
                                                <AccordionItem
                                                    id={`accordion-item-${index}-3`}
                                                    title={language ? el.accord.question3KG : el.accord.question3}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                    activeItemId={expandedItems}
                                                />
                                                <AccordionItem
                                                    id={`accordion-item-${index}-4`}
                                                    title={language ? el.accord.question4KG : el.accord.question4}
                                                    content={language ? el.accord.titleKG : el.accord.title}
                                                    activeItemId={expandedItems}
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