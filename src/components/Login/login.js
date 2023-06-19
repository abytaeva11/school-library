import React, { useEffect, useState } from 'react';
import log1 from "../Login/img/logo1.png"
import './login.scss'
import { useNavigate } from "react-router-dom";

const Login = ({ login, setLogin, setShowLogin }) => {

    const [user, setUser] = useState({
        id: Math.round(Math.random() * 1000),
        name: '',
        email: '',
        password: ''
    });

    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [passwordDirty, setPasswordDirty] = useState(false);
    const [nameError, setNameError] = useState('Поле не может быть пустым');
    const [emailError, setEmailError] = useState('Поле не может быть пустым');
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым');
    const [formValid, setFormValid] = useState(false);
    const [headerText, setHeaderText] = useState('Войти');
    const navigate = useNavigate();

    const handleChange = (e) => {
        setUser({
            ...user,
            [e.target.name]: e.target.value
        });
    }

    useEffect(() => {
        validateForm();
    }, [user.name, user.email, user.password]);

    const validateForm = () => {
        setFormValid(user.name.trim() !== '' && user.email.trim() !== '' && user.password.trim() !== '');
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'name':
                setNameDirty(true);
                setNameError(user.name.trim() === '' ? 'Поле не может быть пустым' : '');
                break;
            case 'email':
                setEmailDirty(true);
                setEmailError(user.email.trim() === '' ? 'Поле не может быть пустым' : '');
                break;
            case 'password':
                setPasswordDirty(true);
                setPasswordError(user.password.trim() === '' ? 'Поле не может быть пустым' : '');
                break;
            default:
                break;
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (formValid) {
            const newUser = {
                id: user.id,
                name: user.name,
                email: user.email,
                password: user.password
            };

            localStorage.setItem('userL', JSON.stringify([{ ...newUser }, ...login]));
            setLogin([{ ...newUser }, ...login]);
            navigate('/');
        }
    }

    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero flex flex-column">
                        <center className="mr-4">
                            <img src={log1} alt="img" className="pl-16" />
                            <h1>SELF DEVELOPING SCHOOL</h1>
                        </center>
                        <center className="mt-2">
                            <form onSubmit={handleSubmit} onBlur={e => blurHandler(e)} className="hero-block ml-16">
                                <h1>{headerText}</h1>
                                {nameDirty && nameError && <div style={{ color: 'red' }}>{nameError}</div>}
                                <input
                                    onChange={handleChange}
                                    value={user.name}
                                    className="hero-in"
                                    name="name"
                                    type="text"
                                    placeholder="Name"
                                    required
                                />
                                {emailDirty && emailError && <div style={{ color: 'red' }}>{emailError}</div>}
                                <input
                                    onChange={handleChange}
                                    onBlur={e => blurHandler(e)}
                                    value={user.email}
                                    className="hero-in"
                                    name="email"
                                    type="email"
                                    placeholder="Email"
                                    required
                                />
                                {passwordDirty && passwordError && <div style={{ color: 'red' }}>{passwordError}</div>}
                                <input
                                    onChange={handleChange}
                                    onBlur={e => blurHandler(e)}
                                    value={user.password}
                                    className="hero-in"
                                    name="password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                />
                                <button
                                    className="hero-btn"
                                    type="submit"
                                    disabled={!formValid}
                                >
                                    Войти
                                </button>
                                <a href="#">Забыли пароль?</a>
                            </form>

                        </center>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Login;
