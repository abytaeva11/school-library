import React from 'react';
import "./youtube.css"
import Place from "../Place/place";
import AccordionWe from "../accordionWe/AccordionWe";
const YouTube = () => {
    return (
        <div>

            <div id="effect">
                <div className="container">
                    <a className="link" href="">Наши курсы / Курсы по созданию команды</a>
                    <div className="effect">
                        <div className="effect-title">
                            <h1>Создание команды</h1>
                            <p>Как правильно строить команду и эффективно ею <br/>управлять, чтобы достигать все
                                поставленные цели.</p>
                            <button>Получить доступ за 500,00 $</button>
                        </div>
                        <div className="effect-title2">
                            <h2>В курс входит</h2>
                            <p>43 материала</p>
                            <p>100% эксклюзив</p>
                        </div>
                    </div>
                </div>
            </div>
            <iframe width="1000" height="536" src="https://www.youtube.com/embed/V0qAq6ZLpic"
                    title="YouTube video player" frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen style={{marginLeft: "130px"}}></iframe>

<Place/>
            <AccordionWe/>


        </div>

    );
};

export default YouTube;