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
const YouTube = () => {
    const { language } = useContext(LanguageContext);
    const { hero } = useContext(LanguageContext);
    return (
        <div>

            <div id="effect">
                {
                    hero.map ((el) => (
                        <div className="container">
                            <a className="link" href="">{language ? el.you.textKG : el.you.text}</a>
                            <div className="effect">
                                <div className="effect-title">
                                    <h1>{language ? el.you.text1KG : el.you.text1}</h1>
                                    <p>{language ? el.you.text2KG : el.you.text2}</p>
                                    <button>{language ? el.you.text3KG : el.you.text3}</button>
                                </div>
                                <div className="effect-title2">
                                    <h2>{language ? el.you.text4KG : el.you.text4}</h2>
                                    <p>{language ? el.you.text5KG : el.you.text5}</p>
                                    <p>{language ? el.you.text6KG : el.you.text6}</p>
                                </div>
                            </div>
                        </div>

                    ))
                }
            </div>

            {/*<iframe width="1000" height="536" src="https://www.youtube.com/embed/XZotInPwHHs"*/}
            {/*        title="YouTube video player" frameBorder="0"*/}
            {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"*/}
            {/*        allowFullScreen  style={{marginLeft: "130px"}}></iframe>*/}

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