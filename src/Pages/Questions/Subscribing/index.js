
import React, { useState, useContext } from 'react';
import { LanguageContext } from "../../../components/Context";
import "../Subscribing/Subscribe.scss"

const Subscribing = () => {
    const { subscribe } = useContext(LanguageContext);
 const [selectedPayment, setSelectedPayment] = useState(null)
    const handlePaymentChange = (event) => {
     setSelectedPayment(event.target.value)
    }
    return (
        <div>
            {
                subscribe.map((el) => (
                    <div id="sub">
                        <div className="cribe">
                            <div className="registration">
                                <h1>{el.decor}</h1>
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
                                                type="radio"
                                                value={el.pay.visa}
                                                checked={selectedPayment === el.pay.visa}
                                                onChange={handlePaymentChange}
                                                style={{

                                                }}
                                            />
                                            <h3>{el.pay.visa}</h3>
                                        </div>
                                        <div className="registration--master__payment--radios">
                                            <input
                                                type="radio"
                                                value={el.pay.card}
                                                checked={selectedPayment === el.pay.card}
                                                onChange={handlePaymentChange}
                                                style={{

                                                }}
                                            />
                                            <h3>{el.pay.card}</h3>
                                        </div>
                                    </div>
                                <div className="">
                                    <h2>{el.cart.title}</h2>
                                    <input type="tel" />
                                </div>
                                </div>
                            </div>
                            <div className=""></div>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default Subscribing;

// import React, {useContext} from 'react';
// import {LanguageContext} from "../../../components/Context";
// import "../Subscribing/Subscribe.scss"
//
// const Subscribing = () => {
//     const {subscribe} = useContext(LanguageContext)
//
//     return (
//         <div>
//             {
//                 subscribe.map((el) => (
//                     <div id="sub">
//                         <div className="cribe">
//                             <div className="registration">
//                                 <h1>{el.decor}</h1>
//                                 <h2>{el.name.title}</h2>
//                                 <input type="text" placeholder={el.name.input}/>
//                                 <h2>{el.email.title}</h2>
//                                 <input type="email" placeholder={el.email.input}/>
//                                 <h2>{el.number.title}</h2>
//                                 <input type="tel" placeholder={el.number.input}/>
//                                 <h2>{el.password.title}</h2>
//                                 <input type="password" placeholder={el.password.input}/>
//                                 <div className="registration--master">
//                                     <h2>{el.pay.title}</h2>
//                                     <div className="registration--master__payment">
//                                         <div className="registration--master__payment--radios">
//                                             <input className="click" type="radio"/>
//                                             <h3>{el.pay.visa}</h3>
//                                         </div>
//                                         <div className="registration--master__payment--radios">
//                                             <input className="click" type="radio"/>
//                                             <h3>{el.pay.card}</h3>
//                                         </div>
//                                     </div>
//                                     <h2>{el.cart.title}</h2>
//                                     <input type="tel"/>
//                                 </div>
//                             </div>
//                             <div className="">
//
//                             </div>
//                         </div>
//                     </div>))
//             }
//         </div>
//     );
//
// };
//
// export default Subscribing;