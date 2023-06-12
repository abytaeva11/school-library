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
                        <div className="foot--title">
                            <img className="foot--title__img" src={logo} alt=""/>
                            <h1>SELF DEVELOPING SCHOOL</h1>
                            <div className="foot--title__lang">
                                <h2 className="foot--title__lang--h" onClick={getKG}>KG</h2>
                                <p onClick={getRU}>РУ</p>
                            </div>
                        </div>
                        <div className="foot--link">
                            <h2>Быстрые ссылки</h2>
                            <div className="foot--link__line1"></div>
                            <a href="">Главная</a>
                            <a href="">Школа</a>
                            <a href="">О нас</a>
                        </div>

                        <div className="foot--wifi">
                            <h2>Социальные сети</h2>
                            <div className="foot--link__line1"></div>
                            <div className="foot--wifi__ion" style={{
                                width: '180px'
                            }}>
                                < AiOutlineInstagram className="foot--wifi__icon"/>
                                < AiOutlineYoutube className="foot--wifi__icon"/>
                                < BsFacebook className="foot--wifi__icon"/>
                                < BsTwitter className="foot--wifi__icon"/>
                                < FaTiktok className="foot--wifi__icon"/>
                                < SlSocialVkontakte className="foot--wifi__icon"/>
                                < BsTelegram className="foot--wifi__icon"/>
                            </div>


                        </div>
                        <div className="foot--call">
                            <h2>Контакты</h2>
                            <div className="foot--link__line1"></div>
                            <p><BsTelephone className="foot--call__icon2"/>0500 678 876</p>
                            <p>< AiOutlineMail className="foot--call__icon2"/>Self_dev_school@gmail.com</p>
                        </div>
                        <div className="foot--location">
                            <h1>Адрес</h1>
                            <div className="foot--link__line1"></div>
                            <p><BiLocationPlus className="foot--location__icon3"/> ИП Сейсембай, г.Алматы, <br/>мкр.
                                Нурлытау, ул. Мерген, <br/>93.</p>
                            <p><Tb123 className="foot--location__icon3"/>Идентификационный код: <br/>661102300013</p>
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