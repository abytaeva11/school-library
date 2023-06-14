import React, { useState, useContext } from 'react';
import { LanguageContext } from "../../../components/Context";
import "../Subscribing/Subscribe.scss";

const Subscribing = () => {
    const { subscribe } = useContext(LanguageContext);
    const [selectedPayment, setSelectedPayment] = useState(null);

    const handlePaymentChange = (event) => {
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
                                        <h2>{el.cart.title}</h2>
                                        <input type="tel" placeholder="1234 4567 7788 9210"/>
                                    </div>
                                    <div className="registration--master__numbercart--date2">
                                        <h2>{el.cart.term}</h2>
                                        <input type="text" placeholder="12/25" />
                                    </div>
                                    <div className="registration--master__numbercart--date3">
                                        <h2>{el.cart.time}</h2>
                                        <input type="text" placeholder="398"/>
                                    </div>

                                </div>
                            </div>
                        </div>

                        <div className="">
                            {
                                subscribe.map((el)=>(
                                    <div>
                                        <h2>{el.average.title}</h2>
                                        <div className="">

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