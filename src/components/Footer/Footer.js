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
    const { language } = useContext(LanguageContext);
    const { back } = useContext(LanguageContext);
    return (
        <>
            <div>
                <section id="footer">
                    <div>
                        {back.map((el) => (
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
                                            <h2>  {language ? el.text.wifiKG : el.text.wifi}</h2>
                                            <div className="line1"></div>
                                            <a href="">{language ? el.text.bosKG : el.text.bos}</a>
                                            <a href="">{language ? el.text.bos1KG : el.text.bos1}</a>
                                            <a href="">{language ? el.text.bos2KG : el.text.bos2}</a>
                                        </div>

                                        <div className="wifi m-5 mt-0">
                                            <h2>{language ? el.text.wifi2KG : el.text.wifi2}</h2>
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
                                            <h2>{language ? el.text.callingKG : el.text.calling}</h2>
                                            <div className="line1"></div>
                                            <p><BsTelephone className="icon2 mr-2"/>0500 678 876</p>
                                            <p>< AiOutlineMail className="icon2 mr-2"/>Self_dev_school@gmail.com</p>
                                        </div>
                                        <div className="location">
                                            <h1>{language ? el.text.adressKG : el.text.adress}</h1>
                                            <div className="line1"></div>
                                            <p><BiLocationPlus className="icon3"/>{language ? el.text.streetKG : el.text.street}</p>
                                            <p><Tb123 className="icon3"/>{language ? el.text.codeKG : el.text.code}</p>
                                        </div>
                                    </div>
                                </div>
                                <img className="logo3" src={visa} alt=""/>
                                <img className="logo4" src={maestro} alt=""/>
                                <img className="books" src={book} alt=""/>
                            </div>

                        ))}
                    </div>
                </section>

            </div>

        </>

    )
}
export default Footer;