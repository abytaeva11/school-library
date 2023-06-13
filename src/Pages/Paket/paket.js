import React from "react"
import book from "./img/tea.png"
import "./paket.css"
import {Link} from "react-router-dom";

const Paket = () => {
    return (
        <div>
            <section id="paket">
                <div className="container">
                    <div className="paket">
                        <div className="paket--text">
                            <h2 style={{color: "white"}}>Наши курсы</h2>
                            <p>Получайте новые знания, навыки и <br/>возможности для эффективной жизни..</p>
                            <Link to={"/buttons"}>
                                <button className="paket--text__btn">Подобрать пакет</button>
                            </Link>
                            <button className="paket--text__btn2">Войти</button>
                        </div>
                        <img className="paket--img" src={book} alt=""/>
                    </div>
                </div>
            </section>
        </div>

    )
}
export default Paket;