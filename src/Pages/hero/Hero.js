import React, {useContext} from "react"
import book from "./img/books.png"
import img1 from "./img/book1.png"
import img2 from "./img/bookMin.png"
import img3 from "./img/book3.png"
import img4 from "./img/book4.png"
import "./Hero.scss"
import {LanguageContext} from "../../components/Context";
const Hero = () => {
    const { language } = useContext(LanguageContext);
    const { head } = useContext(LanguageContext);
    return(
        <div>
            <section id="hero">
                <div>
                    {head.map((el) => (
                        <div className="container">
                            <div className="hero">
                                <div className="hero--text">
                                    <h2 style={{color:"white"}}>{language ? el.text.alongKG : el.text.along}</h2>
                                    <p>{language ? el.text.along2KG : el.text.along2}</p>
                                    <button className="hero--text__btn">{language ? el.text.along3KG : el.text.along3}</button>
                                </div>
                                <img className="hero--img" src={book} alt=""/>
                            </div>
                            <div className="line"></div>
                            <img  className="book1" src={img1} alt=""/>
                            <img  className="book2" src={img2} alt=""/>
                            <img  className="book3" src={img3} alt=""/>
                            <img  className="book4" src={img4} alt=""/>
                        </div>
                    ))}
                </div>
            </section>
        </div>

    )
}
export default Hero;