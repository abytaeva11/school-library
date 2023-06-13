import React, {useEffect, useState} from 'react';
import log1 from "../Login/img/logo1.png"
import './login.scss'
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [email, setEmail ] = useState( '')
    const [password, setPassword ] = useState( '')
    const [emailDirty, setEmailDirty] =  useState(false)
    const [passwordDirty, setPasswordDirty] =  useState(false)
    const [emailError, setEmailError] = useState('Поле не может быть пустым')
    const [passwordError, setPasswordError] = useState('Поле не может быть пустым')
    const [formValid, setFormValid] = useState(false)
    const navigate = useNavigate()

    useEffect( () => {
        if (emailError || passwordError) {
            setFormValid(false)
        }else {
            setFormValid(true)
        }
    },[emailError,passwordError])






    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
        if (!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некорректный емейл')
        }else {
            setEmailError("")
        }
    }


    const blurHundler = (e) => {
        switch (e.target.name) {
            case 'email' :
                setEmailDirty(true)
                break
            case 'password' :
                setPasswordDirty(true)
                break
        }

    }


    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 8 || e.target.value.length > 15) {
            setPasswordError('Пароль должен быть длиннее 8 и меньше 15')
            if (!e.target.value) {
                setPasswordError('Поле не может быть пустым')
            }
        }else {
            setPasswordError("")
        }
    }



    return (
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero flex flex-column">
                        <center className={'mt-2 '}>
                            <img src={log1} alt="img"/>
                            <h1 className={''}>SELF DEVELOPING SCHOOL</h1>
                        </center>
                        <center>
                            <div className="hero-block">
                                <h1>Войти в аккаунт</h1>
                                {(emailDirty && emailError) && <div style={{color:'red'}}>{emailError}</div>}
                                <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHundler(e)} className="hero-in" name='email' type="email" placeholder="Email" required/>
                                {(passwordDirty && passwordError) && <div style={{color:'red'}}>{passwordError}</div>}
                                <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHundler(e)} className="hero-in" name='password'  type="password" placeholder="Password" required/>
                                <button onClick={() => navigate('/')} disabled={!formValid} className="hero-btn" type="submit">Войти</button>
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