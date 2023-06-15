import React, { useState, useContext } from 'react';
import { LanguageContext } from "../../../components/Context";
import "../Subscribing/Subscribe.scss";
import {BsCheckLg} from "react-icons/bs";
import book1 from "../../Questions/Subscribing/book1.svg"
import book2 from "../../Questions/Subscribing/book2.svg"

const Subscribing = () => {
    const { subscribe } = useContext(LanguageContext);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentChange = (event) => {
        setSelectedPayment(event.target.value);
    };
    const handlePaymentChange2 = (event) => {
        setSelectedPayment(event.target.value);
    };

    return (
        <div>
            {subscribe.map((el) => (
                <div id="sub" key={el.id}>
                    <div className="cribe">
                        <div className="registration">
                            <h3>{el.decor}</h3>
                            <h2>{el.name.title}</h2>
                            <input className="registration--login" type="text" placeholder={el.name.input} />
                            <h2>{el.email.title}</h2>
                            <input className="registration--login" type="email" placeholder={el.email.input} />
                            <h2>{el.number.title}</h2>
                            <input className="registration--login" type="tel" placeholder={el.number.input} />
                            <h2>{el.password.title}</h2>
                            <input className="registration--login" type="password" placeholder={el.password.input} />
                            <div className="registration--master">
                                <h2>{el.pay.title}</h2>
                                <div className="registration--master__payment">
                                    <div className="registration--master__payment--radios">
                                        <input
                                            type="checkbox"
                                            value={el.pay.visa}
                                            checked={selectedPayment === el.pay.visa}
                                            onChange={handlePaymentChange}
                                            className="checkbox-input"
                                        />
                                        <h3>{el.pay.visa}</h3>
                                    </div>
                                    <div className="registration--master__payment--radios">
                                        <input
                                            type="checkbox"
                                            value={el.pay.card}
                                            checked={selectedPayment === el.pay.card}
                                            onChange={handlePaymentChange}
                                            className="checkbox-input"
                                        />
                                        <h3>{el.pay.card}</h3>
                                    </div>
                                </div>
                                <div className="registration--master__numbercart">
                                    <div className="registration--master__numbercart--date1">
                                        <h4>{el.cart.title}</h4>
                                        <input type="tel" placeholder="1234 4567 7788 9210"/>
                                    </div>
                                    <div className="registration--master__numbercart--date2">
                                        <h4>{el.cart.term}</h4>
                                        <input type="text" placeholder="12/25" />
                                    </div>
                                    <div className="registration--master__numbercart--date3">
                                        <h4>{el.cart.time}</h4>
                                        <input type="text" placeholder="398"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="cribe--level">
                            {
                                subscribe.map((el)=>(
                                    <div className="cribe--level__just">
                                        <h2>{el.average.title}</h2>
                                        <div className="cribe--level__just--column">
                                            <div className="cribe--level__just--column__usual">
                                                <img className="cribe--level__just--column__usual--book1" src={book1} alt=""/>
                                                <img className="cribe--level__just--column__usual--book2" src={book2} alt=""/>
                                                <div className="cribe--level__just--column__usual--marge">
                                                    <h1>{el.average.usual}</h1>
                                                    <div className="cribe--level__just--column__usual--marge__input">
                                                        <input
                                                            type="checkbox"
                                                            value={el.average.usual}
                                                            checked={selectedPayment === el.average.usual}
                                                            onChange={handlePaymentChange}
                                                            className="checkbox-input"
                                                        />
                                                        <h3 className="cribe--level__just--column__usual--marge__input--year">{el.average.usual2}</h3>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__input2">
                                                        <input
                                                            type="checkbox"
                                                            value={el.average.usual2}
                                                            checked={selectedPayment === el.average.usual2}
                                                            onChange={handlePaymentChange}
                                                            className="checkbox-input"
                                                        />
                                                        <h5>{el.average.usual3}</h5>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__check1">
                                                        <BsCheckLg className="iconka1"/>
                                                        <h4>{el.average.usual4}</h4>
                                                    </div>
                                                    <div className="cribe--level__just--column__usual--marge__check2">
                                                        <BsCheckLg className="iconka2"/>
                                                        <h4>{el.average.usual5}</h4>
                                                    </div>
                                                    <h2>{el.average.usual6}</h2>
                                                    <button>{el.average.usual7}</button>
                                                </div>

                                            </div>
                                            <div className="cribe--level__just--column__intensive">
                                              <div className="cribe--level__just--column__intensive--marge">
                                                  <h1>{el.intensive.title2}</h1>
                                                  <div className="cribe--level__just--column__intensive--marge__input">
                                                      <input
                                                          type="checkbox"
                                                          value={el.intensive.careful2}
                                                          checked={selectedPayment === el.intensive.careful2}
                                                          onChange={handlePaymentChange2}
                                                          className="checkbox-input2"
                                                      />
                                                      <h3 className="cribe--level__just--column__intensive--marge__input--year">{el.average.usual2}</h3>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__input2">
                                                      <input
                                                          type="checkbox"
                                                          value={el.intensive.careful3}
                                                          checked={selectedPayment === el.intensive.careful3}
                                                          onChange={handlePaymentChange2}
                                                          className="checkbox-input2"
                                                      />
                                                      <h5>{el.intensive.careful}</h5>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__check1">
                                                      <BsCheckLg className="iconka1"/>
                                                      <h4>{el.intensive.careful2}</h4>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__check2">
                                                      <BsCheckLg className="iconka2"/>
                                                      <h4>{el.intensive.careful3}</h4>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__check3">
                                                      <BsCheckLg className="iconka3"/>
                                                      <h4>{el.intensive.careful4}</h4>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__check4">
                                                      <BsCheckLg className="iconka4"/>
                                                      <h4>{el.intensive.careful5}</h4>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__check5">
                                                      <BsCheckLg className="iconka5"/>
                                                      <h4>{el.intensive.careful6}</h4>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__check6">
                                                      <BsCheckLg className="iconka6"/>
                                                      <h4>{el.intensive.careful7}</h4>
                                                  </div>
                                                  <div className="cribe--level__just--column__intensive--marge__coin">
                                                      <h2>{el.intensive.coin} </h2><h6>{el.intensive.coin2}</h6>
                                                  </div>
                                                  <button>{el.intensive.Choose}</button>
                                              </div>
                                            </div>
                                        </div>
                                        <div className="cribe--level__just--agree">
                                            <button>{el.btn}</button>
                                            <div className="cribe--level__just--agree__put">
                                                <input type="checkbox" className="checkbox-put"/>
                                                <h3>{el.agree}</h3>
                                            </div>
                                        </div>

                                    </div>
                                ))

                            }
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Subscribing;