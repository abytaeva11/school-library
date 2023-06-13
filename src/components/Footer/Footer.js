import logo from "./img/logo1.png"
import visa from "./img/visa.png"
import maestro from "./img/master.png"
import book from "./img/book.png"


import {AiOutlineInstagram, AiOutlineMail, AiOutlineYoutube} from "react-icons/ai";
import {BsFacebook, BsTelegram, BsTelephone, BsTwitter} from "react-icons/bs";
import {SlSocialVkontakte} from "react-icons/sl";
import {FaTiktok} from "react-icons/fa";
import '../Footer/Footer.scss'
import {BiLocationPlus} from "react-icons/bi";
import {Tb123} from "react-icons/tb";
import {useContext} from "react";
import {LanguageContext} from "../Context";

const Footer = () => {
    const {getKG} = useContext(LanguageContext)
    const {getRU} = useContext(LanguageContext)
    return (
        <>
            <div>
                <section id="footer">
                    <div className="container">



                        <div className="foot">
                            <div>
                                <div className="foot-title">
                                    <img className="foot-title-img" src={logo} alt=""/>
                                    <h1>SELF DEVELOPING SCHOOL</h1>
                                    <div className="lang">
                                        <h2 className="foot-title-lang-hh" onClick={getKG}>KG</h2>
                                        <p onClick={getRU}>РУ</p>
                                    </div>
                                </div>
                            </div>

                            <div className="all">
                                <div className="link">
                                    <h2>Быстрые ссылки</h2>
                                    <div className="line1"></div>
                                    <a href="">Главная</a>
                                    <a href="">Школа</a>
                                    <a href="">О нас</a>
                                </div>

                                <div className="wifi m-5 mt-0">
                                    <h2>Социальные сети</h2>
                                    <div className="line1"></div>
                                    <div className="ion mt-3" style={{
                                        width: '180px'
                                    }}>
                                        < AiOutlineInstagram className="icon"/>
                                        < AiOutlineYoutube className="icon"/>
                                        < BsFacebook className="icon"/>
                                        < BsTwitter className="icon"/>
                                        < FaTiktok className="icon"/>
                                        < SlSocialVkontakte className="icon"/>
                                        < BsTelegram className="icon"/>
                                    </div>


                                </div>
                                <div className="call">
                                    <h2>Контакты</h2>
                                    <div className="line1"></div>
                                    <p><BsTelephone className="icon2 mr-2"/>0500 678 876</p>
                                    <p>< AiOutlineMail className="icon2 mr-2"/>Self_dev_school@gmail.com</p>
                                </div>
                                <div className="location">
                                    <h1>Адрес</h1>
                                    <div className="line1"></div>
                                    <p><BiLocationPlus className="icon3"/> ИП Сейсембай, г.Алматы, <br/>мкр.
                                        Нурлытау, ул. Мерген, <br/>93.</p>
                                    <p><Tb123 className="icon3"/>Идентификационный код: <br/>661102300013</p>
                                </div>
                            </div>
                        </div>

                        <img className="logo3" src={visa} alt=""/> <img className="logo4" src={maestro} alt=""/>
                        <img className="books" src={book} alt=""/>
                    </div>
                </section>

            </div>

        </>

    )
}
export default Footer;