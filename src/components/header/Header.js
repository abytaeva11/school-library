import React, {useState} from 'react';
import {Link, useNavigate} from "react-router-dom";
import Head from "../header/img/img1.png"
import {CiUser} from "react-icons/ci";
import "./Header.scss"
import {AiOutlineCloseCircle, AiOutlineMenu} from "react-icons/ai";

const Header = () => {

    const [burger, setBurger] = useState(false)

    const navigate = useNavigate()
    return (

        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header-logo ">
                        <Link to={'/'}>
                            <center>
                                <img src={Head} alt="img"/>
                                <h1>SELF DEVELOPING SCHOOL</h1>
                            </center>
                        </Link>
                    </div>
                <div className="header-title flex items-center">
                           <Link to={'/'} className={'link-t px-4 text-amber-50'}>Главная</Link>
                           <Link to={'/tellegram'} className={'link-t px-4 text-amber-50'}>Наши курсы</Link>
                           <Link to={'/'} className={'link-t px-4 text-amber-50'}>О нас</Link>
                </div>
                    <button onClick={() => navigate('/login')} className={'rounded-tr-md rounded-br-md rounded-bl-md w-32 h-10 rounded-sm flex items-center bg-white text-blue-500 flex justify-center items-center '}><CiUser className="header-icon"/>Войти</button>
                    <div className="Menu">
                        <button onClick={() => setBurger(!burger)} className="menu-icon">{burger? <AiOutlineCloseCircle/> : <AiOutlineMenu/>}</button>
                        <div className="burger" style={{display: burger? "block" : "none" }}>
                            <Link to={'/'} className={'link-t px-4 text-amber-50'}>Главная</Link>
                            <Link to={'/tellegram'} className={'link-t px-4 text-amber-50'}>Наши курсы</Link>
                            <Link to={'/'} className={'link-t px-4 text-amber-50'}>О нас</Link>
                        </div>

                    </div>
                </div>


            </div>
                </div>


    );
};



export default Header;