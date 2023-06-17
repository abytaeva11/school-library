import {AiOutlineCheck} from 'react-icons/ai';
import {GoX} from 'react-icons/go';
import React, {useContext, useRef, useState} from "react";
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
    const [selectedPayment, setSelectedPayment] = useState(null);
    const [nameInput, setNameInput] = useState('');
    const [emailInput, setEmailInput] = useState('');
    const [isNameValid, setIsNameValid] = useState(true);
    const [isEmailValid, setIsEmailValid] = useState(true);
    const [telInput, setTelInput] = useState('');
    const [isTelValid, setIsTelValid] = useState(true);
    const passwordInputRef = useRef(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isIntensiveSelected, setIsIntensiveSelected] = useState(false);
    const [cartInput, setCartInput] = useState('');
    const [isCartValid, setIsCartValid] = useState(true);
    const [yearInput, setYearInput] = useState('');
    const [isYearValid, setIsYearValid] = useState(true);
    const [knowInput, setKnowInput] = useState('');
    const [isKnowValid, setIsKnowValid] = useState(true);
    const [selectedMaster, setSelectedMaster] = useState(null)
    const [masterInput, setMasterInput] = useState(true);
    const [isMasterValid, setIsMasterValid] = useState(true);
    const [dateInput, setDateInput] = useState('');
    const [isDateValid, setIsDateValid] = useState(true);
    const [monthInput, setMonthInput] = useState('');
    const [isMonthValid, setIsMonthValid] = useState(true);
    const [numInput, setNumInput] = useState('');
    const [isNumValid, setIsNumValid] = useState(true);

    const handleCartInputChange = (event) => {
        setCartInput(event.target.value);
        setIsCartValid(true); // Reset the validity when the input changes
        const { value } = event.target;
        const formattedValue = value.replace(/\s/g, '').slice(0, 16); // Удалить все пробелы и ограничить ввод до 16 символов

        let formattedCart = '';
        for (let i = 0; i < formattedValue.length; i++) {
            formattedCart += formattedValue[i];
            if (i === 3 || i === 7 || i === 11) {
                formattedCart += ' '; // Добавить отступ после 4, 8 и 12 символов
            }
        }

        setCartInput(formattedCart);
    };

    const handleKnowInputChange = (event) => {
        setKnowInput(event.target.value);
        setIsKnowValid(true); // Reset the validity when the input changes
    };


    const handleDateInputChange = (event) => {
        setDateInput(event.target.value);
        setIsDateValid(true); // Reset the validity when the input changes
        const { value } = event.target;
        const formattedValue = value
            .replace(/\D/g, '') // Удалить все нецифровые символы
            .slice(0, 4); // Ограничить ввод до 4 символов

        let formattedDate = '';
        if (formattedValue.length >= 3) {
            // Добавить слеш после ввода двух символов
            formattedDate = `${formattedValue.slice(0, 2)}/${formattedValue.slice(2)}`;
        } else {
            formattedDate = formattedValue;
        }

        setDateInput(formattedDate);
    };


    const handleNumInputChange = (event) => {
        setNumInput(event.target.value);
        setIsNumValid(true); // Reset the validity when the input changes
        const { value } = event.target;
        const formattedValue = value.slice(0, 3); // Ограничить ввод до 3 символов

        setNumInput(formattedValue);
    };



    const handleIntensiveChooseClick = () => {
        setIsIntensiveSelected(true);
        setInChoose(false)
    };

    const [choose, setChoose] = useState(false)
    const [inChoose, setInChoose] = useState(true)
    const handleUsualChooseClick = () => {
        setIsIntensiveSelected(false);
        setInChoose(true)

    };
    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
        setYearInput(event.target.value);
        setIsYearValid(true); // Reset the validity when the input changes


    };

    const handlePaymentChange2 = (event) => {
        setSelectedPayment(event.target.value);
        setMonthInput(event.target.value);
        setIsMonthValid(true); // Reset the validity when the input changes
    };
    const handleMasterChange = (event) => {
        setSelectedMaster(event.target.value)
        setIsMasterValid(true)
    };


    const handleNameInputChange = (event) => {
        setNameInput(event.target.value);
        setIsNameValid(true); // Reset the validity when the input changes
    };

    const handleTelInputChange = (event) => {
        setTelInput(event.target.value);
        setIsTelValid(true); // Reset the validity when the input changes
    };

    const handleEmailInputChange = (event) => {
        setEmailInput(event.target.value);
        setIsEmailValid(true); // Reset the validity when the input changes
    };
    const handlePasswordInputChange = (event) => {
        const passwordValue = event.target.value.trim();
        setIsLoading(passwordValue === 'M83h82d');

        if (passwordValue === '') {
            passwordInputRef.current.style.border = '1px solid red';
        } else if (passwordValue !== 'M83h82d') {
            passwordInputRef.current.style.border = '1px solid red';
        } else {

            setIsLoading(true);

            setTimeout(() => {
                setIsLoading(false);
            }, 3000);

            setTimeout(() => {
                setIsLoading(false);
                passwordInputRef.current.style.border = '1px solid #60FF66';
            }, 3500);
        }
    };
    const handleSubscribeClick = () => {
        if (knowInput.trim() !== '') {
            setIsKnowValid(false)
        }
        if (nameInput.trim() === '') {
            setIsNameValid(false);
        }

        if (dateInput.trim() === '') {
            setIsDateValid(false);
        }
        if (numInput.trim() === '') {
            setIsNumValid(false);
        }
        if (yearInput.trim() === '') {
            setIsYearValid(false);
        }
        if (monthInput.trim() === '') {
            setIsMonthValid(false);
        }


        if (!emailInput.endsWith('@gmail.com')) {
            setIsEmailValid(false);
        }

        if (telInput.trim() === '') {
            setIsTelValid(false);
        }

        const passwordValue = passwordInputRef.current.value.trim();

        if (passwordValue === '') {
            passwordInputRef.current.style.border = '1px solid red';
        }

        if (
            nameInput.trim() !== '' &&
            knowInput.trim() !== '' &&
            dateInput.trim() !== '' &&
            numInput.trim() !== '' &&
            yearInput.trim() !== '' ||
            monthInput.trim() !== '' &&
            cartInput.trim() !== '' &&
            emailInput.endsWith('@gmail.com') &&
            telInput.trim() !== '' &&
            passwordValue === 'M83h82d'
        ) {
            console.log('Subscribe clicked!');
        }
    };

    const isFormValid =
        nameInput.trim() !== '' &&
        knowInput.trim() !== '' &&
        dateInput.trim() !== '' &&
        numInput.trim() !== '' &&
        yearInput.trim() !== '' ||
        monthInput.trim() !== '' &&
        cartInput.trim() !== '' &&
        emailInput.endsWith('@gmail.com') &&
        telInput.trim() !== '' &&
        passwordInputRef.current?.value === 'M83h82d';
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
                                        <div className="cribe--level__just--column">
                                            <div style={{
                                                margin: isIntensiveSelected ? " 0 100px 0 0" : "0 0 0 100px "
                                            }} className={isIntensiveSelected ? "cribe--level__just--column__intensive2" : "cribe--level__just--column__usual2" }>
                                                <img className="cribe--level__just--column__usual2--book1" src={book1}
                                                     alt=""/>
                                                <img className="cribe--level__just--column__usual2--book2" src={book2}
                                                     alt=""/>
                                                <div className="cribe--level__just--column__usual2--marge">
                                                    <h1>{el.average.usual}</h1>
                                                    <div className="cribe--level__just--column__usual2--marge__input">
                                                        <input
                                                            type="checkbox"
                                                            value={el.average.usual}
                                                            checked={selectedPayment === el.average.usual}
                                                            onChange={handlePaymentChange}
                                                            className={`checkbox-input ${!isYearValid ? 'invalid' : ''}`}

                                                        />


                                                        <h3 className="cribe--level__just--column__usual2--marge__input--year">{el.average.usual2}</h3>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual2--marge__input2">
                                                        <input
                                                            type="checkbox"
                                                            value={el.average.usual2}
                                                            checked={selectedPayment === el.average.usual2}
                                                            onChange={handlePaymentChange}
                                                            className={`checkbox-input ${!isYearValid ? 'invalid' : ''}`}

                                                        />
                                                        <h5>{el.average.usual3}</h5>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual2--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{el.average.usual4}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual2--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{el.average.usual5}</h4>
                                                    </div>
                                                    <h2>{el.average.usual6}</h2>
                                                    <Link to={"/subscribe"}>
                                                        {
                                                            isIntensiveSelected ? <button  onClick={handleUsualChooseClick}
                                                                                           className="choose1">{el.sub}</button>
                                                                : <button  onClick={handleUsualChooseClick}
                                                                           className="choose">{el.sub}</button>
                                                        }
                                                    </Link>

                                                </div>

                                            </div>
                                            <div   className={isIntensiveSelected ? "cribe--level__just--column__usual2" : "cribe--level__just--column__intensive2"}>
                                                <div className="cribe--level__just--column__intensive2--marge">
                                                    <h1>{el.intensive.title2}</h1>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__input">
                                                        <input style={{border: !isMonthValid ? "1px solid red" : ""}}
                                                               type="checkbox"
                                                               value={el.intensive.careful2}
                                                               checked={selectedPayment === el.intensive.careful2}
                                                               onChange={handlePaymentChange2}
                                                               className={`checkbox-input2 ${!isMonthValid ? 'invalid' : ''}`}
                                                        />
                                                        <h3 className="cribe--level__just--column__intensive2--marge__input--year">{el.average.usual2}</h3>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__input2">
                                                        <input
                                                            style={{border: !isMonthValid ? "1px solid red" : ""}}
                                                            type="checkbox"
                                                            value={el.intensive.careful3}
                                                            checked={selectedPayment === el.intensive.careful3}
                                                            onChange={handlePaymentChange2}
                                                            className={`checkbox-input2 ${!isMonthValid ? 'invalid' : ''}`}
                                                        />
                                                        <h5>{el.intensive.careful}</h5>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{el.intensive.careful2}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{el.intensive.careful3}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__check3">
                                                        <BsCheckLg className="iconka3"/>
                                                        <h4>{el.intensive.careful4}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__check4">
                                                        <BsCheckLg className="iconka4"/>
                                                        <h4>{el.intensive.careful5}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__check5">
                                                        <BsCheckLg className="iconka5"/>
                                                        <h4>{el.intensive.careful6}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive2--marge__check6">
                                                        <BsCheckLg className="iconka6"/>
                                                        <h4>{el.intensive.careful7}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__intensive2--marge__coin">
                                                        <h2>{el.intensive.coin} </h2><h6>{el.intensive.coin2}</h6>
                                                    </div>
                                                    <Link to={"/subscribe"}>
                                                        {
                                                            isIntensiveSelected ?
                                                                <button  onClick={handleIntensiveChooseClick}
                                                                         className="choose">{el.sub}</button> :
                                                                <button onClick={handleIntensiveChooseClick}
                                                                        className="choose1">{el.sub}</button>
                                                        }

                                                    </Link>

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