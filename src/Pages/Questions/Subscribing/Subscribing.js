import React, {useState, useContext, useRef} from 'react';
import {LanguageContext} from "../../../components/Context";
import "../Subscribing/Subscribe.scss";
import {BsCheckLg} from "react-icons/bs";
import book1 from "../../Questions/Subscribing/book1.svg";
import book2 from "../../Questions/Subscribing/book2.svg";
import {Link} from "react-router-dom";


const Subscribing = () => {
    const {language} = useContext(LanguageContext)
    const {subscribe} = useContext(LanguageContext);
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

    return (
        <div>
            {subscribe.map((el) => (
                <div className="sub" key={el.id}>
                    <div className="cribe">
                        <div className="registration">
                            <h3>{ language ? el.decorKG : el.decor  }</h3>
                            <h2>{ language ? el.name.titleKG : el.name.title}</h2>
                            <input
                                style={{
                                    border: !isNameValid ? "1px solid red" : ""
                                }}
                                className={`registration--login ${!isNameValid ? 'invalid' : ''}`}
                                type="text"
                                placeholder={el.name.input}
                                value={nameInput}
                                onChange={handleNameInputChange}
                            />
                            {!isNameValid && <p className="error-message">Please enter a valid name.</p>}
                            <h2>{ language ? el.email.titleKG : el.email.title}</h2>
                            <input style={{
                                border: !isEmailValid ? "1px solid red" : ""
                            }}
                                   className={`registration--login ${!isEmailValid ? 'invalid' : ''}`}
                                   type="email"
                                   placeholder={el.email.input}
                                   value={emailInput}
                                   onChange={handleEmailInputChange}
                                   disabled={!nameInput}
                            />
                            {!isEmailValid &&
                                <p className="error-message">Please enter a valid email ending with '@gmail.com'.</p>}
                            <h2>{ language ? el.number.titleKG : el.number.title}</h2>
                            <input
                                style={{
                                    border: !isTelValid ? '1px solid red' : '',
                                }}
                                className={`registration--login ${!isTelValid ? 'invalid' : ''}`}
                                value={telInput}
                                onChange={handleTelInputChange}
                                type="tel"
                                placeholder={el.number.input}
                                disabled={!emailInput}
                            />
                            {!isTelValid && <p className="error-message">Please enter a valid phone number.</p>}

                            <h2>{ el.password.title}</h2>
                            <div className="password-input">
                                <input
                                    ref={passwordInputRef}
                                    className="registration--login"
                                    type="password"
                                    placeholder="if you do have"
                                    onChange={handlePasswordInputChange}
                                    disabled={!telInput}
                                />

                                {isLoading && (
                                    <div className="loading">
                                        <svg className="spinner" width="20px" height="20px" viewBox="0 0 66 66"
                                             xmlns="http://www.w3.org/2000/svg">
                                            <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round"
                                                    cx="33" cy="33" r="30"></circle>
                                        </svg>
                                    </div>
                                )}
                            </div>
                            <div className="registration--master">
                                <h2>{ language ? el.pay.titleKG : el.pay.title}</h2>
                                <div className="registration--master__payment">
                                    <div className="registration--master__payment--radios">
                                        <input style={{border: !isMasterValid ? "1px solid red" : ""}}
                                               type="checkbox"
                                               value={el.pay.visa}
                                               checked={selectedMaster === el.pay.visa}
                                               onChange={handleMasterChange}
                                               className={`checkbox-input ${!isMasterValid ? "invalid" : "" } `}
                                               disabled={!numInput}
                                        />
                                        <h3>{el.pay.visa}</h3>
                                    </div>
                                    <div className="registration--master__payment--radios">
                                        <input
                                            type="checkbox"
                                            value={el.pay.card}
                                            checked={selectedMaster === el.pay.card}
                                            onChange={handleMasterChange}
                                            className={`checkbox-input ${!isMasterValid ? "invalid" : "" }  `}
                                            disabled={!numInput}
                                        />
                                        <h3>{el.pay.card}</h3>
                                    </div>
                                </div>
                                <div className="registration--master__numbercart">
                                    <div className="registration--master__numbercart--date1">
                                        <h4>{language ? el.cart.titleKG : el.cart.title}</h4>
                                        <input
                                            type="tel"
                                            style={{ border: !isCartValid ? '1px solid red' : '' }}
                                            className={`registration--login ${!isCartValid ? 'invalid' : ''}`}
                                            value={cartInput}
                                            onChange={handleCartInputChange}
                                            placeholder="1234 4567 7788 9210"
                                            disabled={!numInput}
                                        />
                                    </div>
                                    <div className="registration--master__numbercart--date2">
                                        <h4>{language ? el.cart.termKG : el.cart.term}</h4>
                                        <input type="text" style={{border: !isDateValid ? "1px solid red" : ""}}
                                               className={`registration--login ${!isDateValid ? 'invalid' : ''}`}
                                               value={dateInput} onChange={handleDateInputChange}
                                               placeholder="12/25"
                                               disabled={!cartInput}/>

                                    </div>
                                    <div className="registration--master__numbercart--date3">
                                        <h4>{language ? el.cart.timeKG : el.cart.time}</h4>
                                        <input
                                            type="text"
                                            style={{ border: !isNumValid ? '1px solid red' : '' }}
                                            className={`registration--login ${!isNumValid ? 'invalid' : ''}`}
                                            value={numInput}
                                            onChange={handleNumInputChange}
                                            placeholder="398"
                                            disabled={!dateInput}
                                        />
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="cribe--level">
                        
                            {
                                subscribe.map((el) => (
                                    <div className="cribe--level__just">
                                        <h2>{language ? el.average.titleKG : el.average.title}</h2>
                                        <div className="cribe--level__just--column">
                                            <div style={{
                                                marginRight: isIntensiveSelected ? "20px" : "20px",
                                                border: isIntensiveSelected ? "1px solid white" : '1px solid #dfac4d'
                                            }} className=  "cribe--level__just--column__usual" >
                                                <img className="cribe--level__just--column__usual--book1" src={book1}
                                                     alt=""/>
                                                <img className="cribe--level__just--column__usual--book2" src={book2}
                                                     alt=""/>
                                                <div className="cribe--level__just--column__usual--marge">
                                                    <h1>{language ?  el.average.usualKG : el.average.usual}</h1>
                                                    <div className="cribe--level__just--column__usual--marge__input">
                                                        <input
                                                               type="checkbox"
                                                               value={el.average.usual}
                                                               checked={selectedPayment === el.average.usual}
                                                               onChange={handlePaymentChange}
                                                               className={`checkbox-input ${!isYearValid ? 'invalid' : ''}`}
                                                               disabled={!inChoose}
                                                        />


                                                        <h3 className="cribe--level__just--column__usual--marge__input--year">{el.average.usual2}</h3>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__input2">
                                                        <input
                                                            type="checkbox"
                                                            value={el.average.usual2}
                                                            checked={selectedPayment === el.average.usual2}
                                                            onChange={handlePaymentChange}
                                                            className={`checkbox-input ${!isYearValid ? 'invalid' : ''}`}
                                                            disabled={!inChoose}
                                                        />
                                                        <h5>{language ? el.average.usual3KG : el.average.usual3}</h5>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{language ? el.average.usual4KG : el.average.usual4}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{language ?  el.average.usual5KG :el.average.usual5}</h4>
                                                    </div>
                                                    <h2>{language ? el.average.usual6 : el.average.usual6KG }</h2>
                                                    {
                                                        isIntensiveSelected ? <button style={{background: isIntensiveSelected ? "transparent" : "", color: isIntensiveSelected ? "white" : ''}}  onClick={handleUsualChooseClick}
                                                                                      className="choose1"> {
                                                                isIntensiveSelected ? el.intensive.Choose : el.average.usual7
                                                            } </button>
                                                            : <button style={{background: isIntensiveSelected ? "" : "white" , color: isIntensiveSelected ? "" : '#595FEB'}} onClick={handleUsualChooseClick}
                                                                      className="choose1">{ isIntensiveSelected ?  el.intensive.Choose : el.average.usual7   }</button>
                                                    }
                                                </div>

                                            </div>
                                            <div style={{
                                                border: isIntensiveSelected ? "1px solid #dfac4d" : "1px solid white"
                                            }}  className= "cribe--level__just--column__intensive">
                                                <div className="cribe--level__just--column__intensive--marge">
                                                    <h1>{ language ? el.intensive.title2KG : el.intensive.title2}</h1>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__input">
                                                        <input style={{border: !isMonthValid ? "1px solid red" : ""}}
                                                               type="checkbox"
                                                               value={el.intensive.careful2}
                                                               checked={selectedPayment === el.intensive.careful2}
                                                               onChange={handlePaymentChange2}
                                                               className={`checkbox-input2 ${!isMonthValid ? 'invalid' : ''}`}
                                                               disabled={inChoose}
                                                        />
                                                        <h3 className="cribe--level__just--column__intensive--marge__input--year">{language ? el.average.usual2KG : el.average.usual2}</h3>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__input2">
                                                        <input
                                                            style={{border: !isMonthValid ? "1px solid red" : ""}}
                                                            type="checkbox"
                                                            value={ el.intensive.careful3}
                                                            checked={selectedPayment === el.intensive.careful3}
                                                            onChange={handlePaymentChange2}
                                                            className={`checkbox-input2 ${!isMonthValid ? 'invalid' : ''}`}
                                                            disabled={inChoose}
                                                        />
                                                        <h5>{language ? el.intensive.carefulKG : el.intensive.careful}</h5>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{ language ? el.intensive.careful2KG : el.intensive.careful2}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{language ? el.intensive.careful3KG :  el.intensive.careful3}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check3">
                                                        <BsCheckLg className="iconka3"/>
                                                        <h4>{language ? el.intensive.careful4KG :  el.intensive.careful4}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check4">
                                                        <BsCheckLg className="iconka4"/>
                                                        <h4>{language ? el.intensive.careful5KG :  el.intensive.careful5}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check5">
                                                        <BsCheckLg className="iconka5"/>
                                                        <h4>{language ? el.intensive.careful6KG :  el.intensive.careful6}</h4>
                                                    </div>
                                                    <div
                                                        className="cribe--level__just--column__intensive--marge__check6">
                                                        <BsCheckLg className="iconka6"/>
                                                        <h4>{language ? el.intensive.careful7KG :  el.intensive.careful7}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__intensive--marge__coin">
                                                        <h2>{language ? el.intensive.coinKG :  el.intensive.coin} </h2><h6>{language ? el.intensive.coin2KG : el.intensive.coin2}</h6>
                                                    </div>
                                                    {
                                                        isIntensiveSelected ?
                                                            <button style={{
                                                                background: isIntensiveSelected ? "white" : "",
                                                                color: isIntensiveSelected ?  "#595FEB" : ""
                                                            }} onClick={handleIntensiveChooseClick}
                                                                    className="choose1   ">{isIntensiveSelected ? el.average.usual7  : el.intensive.Choose}</button> :
                                                            <button onClick={handleIntensiveChooseClick}
                                                                    className="choose1">{language ?  el.average.usual7 : el.intensive.Choose}</button>
                                                    }

                                                </div>
                                            </div>
                                        </div>
                                        <div className="cribe--level__just--agree">
                                            <Link to={'/check'} className={!isFormValid ? 'disabled-link' : ''} disabled={!isFormValid}>
                                                {isIntensiveSelected ? (
                                                        <button
                                                            disabled={!isFormValid}
                                                            onClick={handleSubscribeClick}
                                                        >
                                                            {language ? el.btnKG : el.btn}
                                                            {el.intensive.dollar}
                                                        </button>
                                                    )
                                                    : (
                                                        <button
                                                            disabled={!isFormValid}
                                                            onClick={handleSubscribeClick}>
                                                            {language ? el.btnKG : el.btn}{el.average.usualCoin}
                                                        </button>
                                                    )

                                                }

                                            </Link>
                                            <div className="cribe--level__just--agree__put">

                                                <input style={{border: !isKnowValid ? "1px solid red" : ""}}
                                                       type="checkbox" onChange={handleKnowInputChange}
                                                       className={`checkbox-put ${!isKnowValid ? 'invalid' : ''}`}/>
                                                <h3>{language ? el.agreeKG : el.agree}</h3>
                                            </div>
                                        </div>

                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};
export default Subscribing;

