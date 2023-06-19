import React, {useContext, useState} from 'react';
import {Link, useNavigate, NavLink} from 'react-router-dom';
import {CiUser} from 'react-icons/ci';
import Head from '../header/img/img1.png';
import './Header.scss';
import UserContext from '../HukContext/UserContext';
import {LanguageContext} from "../Context";


const Header = ({login, setLogin}) => {
    const {loggedIn} = useContext(UserContext);
    const navigate = useNavigate();
    const {language} = useContext(LanguageContext);
    const {nail} = useContext(LanguageContext);
    const [showLogin, setShowLogin] = useState(false)


    login = login.slice(0, 1).map(el => el.name)
    console.log(showLogin)


    console.log(login)

    return (
        <div id="header">
            <div className="container">
                <div>
                    {nail.map((el) => (<div className="header">
                        <div className="header-logo">
                            <Link to="/"> <img src={Head} alt="img" className="ml-10"/>
                                <h1>SELF DEVELOPING SCHOOL</h1></Link>
                        </div>
                        <ul className="header-title flex items-center pb-4">
                            <li>
                                <NavLink to={'/'} className={'link-t px-4 text-amber-50'}>
                                    {language ? el.hero.bosKG : el.hero.bos}
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to={'/courses'}
                                      className={'link-t px-4 text-amber-50'}>
                                    {language ? el.hero.bos1KG : el.hero.bos1}
                                </NavLink>
                            </li>

                            <li>
                                <NavLink to={'/third'} className={'link-t px-4 text-amber-50'}>
                                    {language ? el.hero.bos2KG : el.hero.bos2}
                                </NavLink>
                            </li>
                        </ul>
                        <button
                            onClick={() => navigate('/login')}
                            className={'rounded-tr-md rounded-br-md rounded-bl-md w-32 h-10 rounded-sm flex items-center bg-white text-blue-500 flex justify-center items-center mb-4 '}
                        ><CiUser className="header-icon"/>
                            {
                                login.length > 0 ? login : 'войти'
                            }
                        </button>
                    </div>))}
                </div>
            </div>
        </div>
    );
};
export default Header;