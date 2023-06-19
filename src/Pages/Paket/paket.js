import React, {useContext} from "react"
import book from "./img/tea.png"
import "./paket.css"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../components/Context";
import oki from ".././hero/img/book1.png"
import okim from ".././hero/img/book3.png"
import okim2 from ".././hero/img/book4.png"
import okim3 from ".././hero/img/bookMin.png"


const Paket = () => {
    const { language } = useContext(LanguageContext);
    const { pack } = useContext(LanguageContext);
    return (
        <div>
            <section id="paket">
                <div className="container">
                    {
                        pack.map((el) => (
                            <div className="paket">
                                <div className="paket--text">
                                    <h2 style={{color: "white"}}>{language ? el.pack.textKG : el.pack.text}</h2>
                                    <p>{language ? el.pack.text1KG : el.pack.text1}</p>
                                    <Link to={"/buttons"}>
                                        <button className="paket--text__btn">{language ? el.pack.text3KG : el.pack.text3}</button>
                                    </Link>
                                    <button className="paket--text__btn2">{language ? el.pack.text4KG : el.pack.text4}</button>
                                </div>
                                <img className="paket--img" src={book} alt=""/>

                            </div>
                        ))
                    }
                    <img className="oksid" src={oki} alt=""/>
                    <img className="oki2" src={okim} alt=""/>
                    <img className="oki3" src={okim2} alt=""/>
                    <img  className="oki4" src={okim3} alt=""/>
                </div>
            </section>
        </div>

    )
}
export default Paket;