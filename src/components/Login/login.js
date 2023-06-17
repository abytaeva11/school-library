import React, { useEffect, useState, useContext } from 'react';
import log1 from "../Login/img/logo1.png"
import './login.scss'
import { useNavigate } from "react-router-dom";
import UserContext from '../HukContext/UserContext';

const Login = () => {
    // const { loggedIn ,  setLoggedIn } = useContext(UserContext);
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым');
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    const [loggedIn, setLoggedIn] = useState(false);
    const [headerText, setHeaderText] = useState('Войти');
    const navigate = useNavigate();

    useEffect(() => {
        if (nameError , emailError , passwordError) {
            setFormValid(false);
        } else {
            setFormValid(true);
        }
    }, [nameError, emailError, passwordError]);


    const nameHandler = (e) => {
        setUserName(e.target.value);
        if (!e.target.value) {
            setNameError('Поле не может быть пустым');
        } else {
            setNameError('');
        }
        setHeaderText(e.target.value ? `Привет, ${e.target.value}` : 'Войти');
    };



    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный email');
        } else {
            setEmailError('');
        }
    };

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'userName':
                setNameDirty(true);
                break;
            case 'email':
                setEmailDirty(true);
                break;
            case 'password':
                setPasswordDirty(true);
                break;
            default:
                break;
        }
    };

    const passwordHandler = (e) => {
        setPassword(e.target.value);
        if (e.target.value.length < 8 || e.target.value.length > 15) {
            setPasswordError('Пароль должен содержать от 8 до 15 символов');
            if (!e.target.value) {
                setPasswordError('Поле не может быть пустым');
            }
        } else {
            setPasswordError('');
        }
    };

    const handleLogin = () => {
        setLoggedIn(true);
        navigate('/');
    };

    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero flex flex-column">
                        <center className={'mr-4'}>
                            <img src={log1} alt="img" className={'pl-16'}/>
                            <h1 className={''}>SELF DEVELOPING SCHOOL</h1>
                        </center>
                        <center className={'mt-2'}>
                            <div className="hero-block ml-16">
                                <h1>{headerText}</h1>
                                {(nameDirty && nameError) && <div style={{ color: 'red' }}>{nameError}</div>}
                                <input
                                    onChange={nameHandler}
                                    value={userName}
                                    onBlur={blurHandler}
                                    className="hero-in"
                                    name='userName'type="text"
                                    placeholder="Name" required
                                />
                                {(emailDirty && emailError) && <div style={{ color: 'red' }}>{emailError}</div>}
                                <input
                                    onChange={emailHandler}
                                    value={email}
                                    onBlur={blurHandler}
                                    className="hero-in"
                                    name='email'
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                                {(passwordDirty && passwordError) && <div style={{ color: 'red' }}>{passwordError}</div>}
                                <input
                                    onChange={passwordHandler}
                                    value={password}
                                    onBlur={blurHandler}
                                    className="hero-in"
                                    name='password'
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    onClick={handleLogin}
                                    disabled={!formValid}
                                    className="hero-btn"
                                    type="submit"
                                >
                                    {loggedIn ? `Привет, ${userName}` : headerText}
                                </button>
                                <a href="#">Забыли пароль?</a>
                            </div>
                        </center>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;