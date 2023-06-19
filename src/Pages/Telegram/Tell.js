import React, { useState } from 'react';
import axios from 'axios';


function Tell() {
    const [input1, setInput1] = useState('');
    const [input2, setInput2] = useState('');
    const [input3, setInput3] = useState('');

    const handleInputChange1 = (event) => {
        setInput1(event.target.value);
    };

    const handleInputChange2 = (event) => {
        setInput2(event.target.value);
    };

    const handleInputChange3 = (event) => {
        setInput3(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        // Отправка данных в Telegram-бота с использованием Axios или другой библиотеки
        axios.post('https://api.telegram.org/bot6248791960:AAGODEZtFMYeGYo7FWzUthGDb4xiT_N9NnE/sendMessage', {
        chat_id: '6098507124',
            text: input1
    })

        axios.post('https://api.telegram.org/bot6248791960:AAGODEZtFMYeGYo7FWzUthGDb4xiT_N9NnE/sendMessage', {
            chat_id: '6098507124',
            text: input2,
        })
        axios.post('https://api.telegram.org/bot6248791960:AAGODEZtFMYeGYo7FWzUthGDb4xiT_N9NnE/sendMessage', {
            chat_id: '6098507124',
            text: input3,
        })

.then((response) => {
        console.log(response.data);
    })
        .catch((error) => {
            console.error(error);
        });

    // Очистка полей после отправки
    setInput1('');
    setInput2('');
    setInput3('');
};

return (
    <div id="tell">
        <div className="container">
            <div className="tell flex justify-around my-32">
                <div className="tell-title">
                    <h1 style={{
                        marginLeft: '-11px',
                        marginBottom:' 47px',
                    }} >Оставить отзыв</h1>
                    <p>Если вам понравилась наша <br/>
                        платфрома, вы можете <br/>
                        оставить отзыв, а также <br/>
                        увидеть остальные отзывы в <br/>
                        нашем телеграм канале.</p>
                </div>
                <div className="tell-block" style={{
                    width: '555px',
                    height:' 484px',
                    background:' rgba(255, 255, 255, 0.1)',
                    border: '1px solid #FFFFFF',
                    backdropFilter: 'blur(12px)',
                    borderRadius: '10px',

                }}>
                    <form className='px-4 py-4' onSubmit={handleSubmit}>
                        <h3 style={{
                            margin:'5px 0 15px 0',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight:' 20px',
                            color: '#FFFFFF',
                        }}>ФИО:</h3>
                            <input style={{
                                width: '495px',
                                height: '40px',
                                border: '1px solid #FFFFFF',
                                borderRadius: '10px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.99)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                padding: '0 10px',
                            }} type="text" placeholder='Muslim Bolot Joodarovich' value={input1} onChange={handleInputChange1} />
                        <h3 style={{
                            margin:'5px 0 15px 0',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight:' 20px',
                            color: '#FFFFFF',
                        }}>Кем вы работаете? :</h3>
                            <input style={{
                                width: '495px',
                                height: '40px',
                                border: '1px solid #FFFFFF',
                                borderRadius: '10px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.99)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                padding: '0 10px',
                            }}  type="text" placeholder='Частный предпрениматель' value={input2} onChange={handleInputChange2} />
                        <h3 style={{
                            margin:'5px 0 15px 0',
                            fontStyle: 'normal',
                            fontWeight: '500',
                            fontSize: '16px',
                            lineHeight:' 20px',
                            color: '#FFFFFF',
                        }}>Отзыв:</h3>
                            <input style={{
                                width: '495px',
                                // height: '150px',
                                border: '1px solid #FFFFFF',
                                borderRadius: '10px',
                                fontStyle: 'normal',
                                fontWeight: '400',
                                fontSize: '14px',
                                color: 'rgba(255, 255, 255, 0.99)',
                                background: 'rgba(255, 255, 255, 0.1)',
                                padding: '10px 10px 130px 10px',

                            }}  type="text" placeholder='Мне очень понравилась эта школа...' value={input3} onChange={handleInputChange3} />
                        <button style={{
                           display:"flex",
                            justifyContent:' center',
                            alignItems: 'center',
                            padding: '10px 24px',
                            margin: '25px 0 0 0',
                            width: '495px',
                            height:' 44px',
                            background:' #FFFFFF',
                            borderRadius: '10px',
                            fontWeight: '400',
                            fontSize:' 16px',
                            color: '#595FEB',

                        }} type="submit">Оставить отзыв</button>
                    </form>
                </div>
            </div>
            {/*<img  className="tal" src={talk1} alt=""/>*/}
            {/*<img className="tal2" src={talk2} alt=""/>*/}

        </div>
    </div>


);
}

export default Tell;