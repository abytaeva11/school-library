import React, {useContext} from "react"
import book from "./img/tea.png"
import "./paket.css"
import {Link} from "react-router-dom";
import {LanguageContext} from "../../components/Context";

import book1 from "../../assets/img/img1.png"
import book2 from "../../assets/img/img2.png"
import book3 from "../../assets/img/img3.png"
import book4 from "../../assets/img/img4.png"


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
                </div>
<div>
    <img className="books2" src={book4} alt=""/>
</div>

            </section>

            <div className="book">
                {/*<img className="books1" src={book1} alt=""/>*/}
                {/*<img className="books2" src={book2} alt=""/>*/}
                {/*<img className="books3" src={book3} alt=""/>*/}

            </div>
        </div>


    )
}
export default Paket;