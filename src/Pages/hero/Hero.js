import React from "react"
import book from "./img/books.png"
import img1 from "./img/book1.png"
import img2 from "./img/bookMin.png"
import img3 from "./img/book3.png"
import img4 from "./img/book4.png"
import "./Hero.scss"
const Hero = () => {
    return(
        <div>
            <section id="hero">
                <div className="container">
                    <div className="hero">
                        <div className="hero--text">
                            <h2 style={{color:"white"}}>Само развитие лучше <br/>чем школьное обучение</h2>
                            <p>Здесь вы найдете все для само-обучения.</p>
                            <button className="hero--text__btn">Подобрать пакет</button>
                        </div>
                        <img className="hero--img" src={book} alt=""/>
                    </div>
                    <div className="line"></div>
                    <img  className="book1" src={img1} alt=""/>
                    <img  className="book2" src={img2} alt=""/>
                    <img  className="book3" src={img3} alt=""/>
                    <img  className="book4" src={img4} alt=""/>
                </div>
            </section>
        </div>

    )
}
export default Hero;