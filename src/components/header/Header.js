import React from 'react';
import {Link, useNavigate} from "react-router-dom";
import Head from "../header/img/img1.png"
import {CiUser} from "react-icons/ci";
import "./Header.scss"

const Header = () => {

    const navigate = useNavigate()
    return (

        <div id='header'>
            <div className="container">
                <div className="header">
                    <div className="header-logo ">
                        <Link to='/'>
                            <center>
                                <img src={Head} alt="img"/>
                                <h1>SELF DEVELOPING SCHOOL</h1>
                            </center>
                        </Link>
                    </div>
                    <div className="header-title flex items-center  ">
                        <Link to="/" className={'link-t px-4'}>Главная</Link>
                        <Link to="/we" className={'link-t px-4'}>Наши курсы</Link>
                        <Link to={'/'} className={'link-t px-4'}>О нас</Link>
                    </div>
                    <button onClick={() => navigate('/login')} className={'rounded-tr-md rounded-br-md rounded-bl-md w-32 h-10 rounded-sm flex items-center bg-white text-blue-500 flex justify-center items-center '}><CiUser className="header-icon"/>Войти</button>


                </div>
            </div>
        </div>


    );
};



export default Header;