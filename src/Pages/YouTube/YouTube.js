import React, {useContext} from 'react';
import "./youtube.css"
import Place from "../Place/place";
import AccordionWe from "../accordionWe/AccordionWe";
import {LanguageContext} from "../../components/Context";
import But from "../but/but";
import Kurse from "../kurse/kurse";
import Bolot from "../bolot/bolot";
import Muslim from "../musli/muslim";
import You from "../You/You";

import third1 from "../../assets/img/img1.png"
import third4 from "../../assets/img/img4.png"



const YouTube = () => {
    const { language } = useContext(LanguageContext);
    const { hero } = useContext(LanguageContext);
    return (
        <div>

            <div id="effect">
                {
                    hero.map((el) => (
                        <div className="container">
                            <a className="link" href="">{language ? el.you.textKG : el.you.text}</a>
                            <div className="effect">
                                <div className="effect-title">
                                    <h1>{language ? el.you.text1KG : el.you.text1}</h1>
                                    <p>{language ? el.you.text2KG : el.you.text2}</p>
                                    <button>{language ? el.you.text3KG : el.you.text3}</button>
                                </div>                           
                             
                            </div>
                        </div>

                    ))
                }

                <div className="third-book">
                    <img className="third1" src={third1} alt=""/>
                    <img className="third4"  src={third4} alt=""/>


                </div>

            </div>

 

<You/>

<Place/>
            <AccordionWe/>
            <But/>
            <Kurse/>
            <Bolot/>
            <Muslim/>

        </div>

    );
};

export default YouTube;