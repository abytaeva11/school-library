import React, {useContext} from 'react';
import {Link, useNavigate} from 'react-router-dom';
import Head from '../header/img/img1.png';
import {CiUser} from 'react-icons/ci';
import './Header.scss';
import UserContext from '../HukContext/UserContext';
import {LanguageContext} from "../Context";

const Header = () => {
    const {loggedIn} = useContext(UserContext);
    const navigate = useNavigate();
    const {language} = useContext(LanguageContext);
    const {nail} = useContext(LanguageContext);
    return (<div id="header">
        <div className="container">
            <div>
                {nail.map((el) => (<div className="header">
                        <div className="header-logo">
                            <Link to="/"> <img src={Head} alt="img" className="ml-10"/>
                                <h1>SELF DEVELOPING SCHOOL</h1></Link>
                        </div>
                        <div className="header-title flex items-center pb-4"><Link to={'/'}
                                                                                   className={'link-t px-4 text-amber-50'}>
                            {language ? el.hero.bosKG : el.hero.bos}                                    </Link>
                            <Link to={'/courses'}
                                  className={'link-t px-4 text-amber-50'}>                                        {language ? el.hero.bos1KG : el.hero.bos1}
                            </Link> <Link to={'/third'} className={'link-t px-4 text-amber-50'}>
                                {language ? el.hero.bos2KG : el.hero.bos2}                                    </Link>
                        </div>
                        <button
                            onClick={() => navigate('/login')}
                            className={'rounded-tr-md rounded-br-md rounded-bl-md w-32 h-10 rounded-sm flex items-center bg-white text-blue-500 flex justify-center items-center mb-4 '}
                        ><CiUser className="header-icon"/>
                            {loggedIn ? `${loggedIn}` : ''} {language ? "Кирүү" : "войти"}
                        </button>
                    </div>))}
            </div>
        </div>
    </div>);
};
export default Header;