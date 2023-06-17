import React, {useContext} from 'react';
import "./place.css"
import {LanguageContext} from "../../components/Context";

const Place = () => {
    const { language } = useContext(LanguageContext);
    const { place } = useContext(LanguageContext);
    return (
        <section id="place">
            <div className="container">
                <div>
                    {
                      place.map((el) =>(
                          <div className="place">
                              <div className="place-text">
                                  <h1>{language ? el.text.title1KG : el.text.title1}</h1>
                                  <p>{language ? el.text.title2KG : el.text.title2}</p>
                                  <p>{language ? el.text.title3KG : el.text.title3}</p>
                                  <p>{language ? el.text.title4KG : el.text.title4}</p>
                                  <p>{language ? el.text.title5KG : el.text.title5}</p>
                                  <p>{language ? el.text.title6KG : el.text.title6}</p>
                              </div>
                              <div className="place-list1">
                                  <h1>{language ? el.text2.title1KG : el.text2.title1}</h1>
                                  <ul className="place-list">
                                      <li>{language ? el.text2.title2KG : el.text2.title2}</li>
                                      <li>{language ? el.text2.title3KG : el.text2.title3}</li>
                                      <li>{language ? el.text2.title4KG : el.text2.title4}</li>
                                      <li>{language ? el.text2.title5KG : el.text2.title5}</li>
                                      <li>{language ? el.text2.title6KG : el.text2.title6}</li>
                                      <li>{language ? el.text2.title7KG : el.text2.title7}</li>
                                      <li>{language ? el.text2.title8KG : el.text2.title8}</li>
                                      <li>{language ? el.text2.title9KG : el.text2.title9}</li>
                                      <li>{language ? el.text2.title10KG : el.text2.title10}</li>
                                  </ul>
                              </div>
                              <div className="place-list1">
                                  <h1>{language ? el.text3.title1KG : el.text3.title1}</h1>
                                  <ul className="place-list">
                                      <li>{language ? el.text3.title2KG : el.text3.title2}</li>
                                      <li>{language ? el.text3.title3KG : el.text3.title3}</li>
                                      <li>{language ? el.text3.title4KG : el.text3.title4}</li>
                                      <li>{language ? el.text3.title5KG : el.text3.title5}</li>
                                      <li>{language ? el.text3.title6KG : el.text3.title6}</li>
                                      <li>{language ? el.text3.title7KG : el.text3.title7}</li>
                                      <li>{language ? el.text3.title8KG : el.text3.title8}</li>
                                      <li>{language ? el.text3.title9KG : el.text3.title9}</li>
                                  </ul>
                              </div>
                              <div className="place-list1">
                                  <h1>{language ? el.text4.title1KG : el.text4.title1}</h1>
                                  <ul className="place-list">
                                      <li>{language ? el.text4.title2KG : el.text4.title2}</li>
                                  </ul>
                              </div>
                          </div>
                      ))
                    }
                </div>
            </div>
        </section>
    );
};

export default Place;