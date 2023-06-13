import React from 'react';
import '../Telegram/tell.scss'

const Tell = () => {
    return (
        <div id='tell'>
            <div className="container">
                <div className="tell flex items-start justify-around mt-10 mb-10">
                    <div className="tell-title">
                        <h1>Оставить отзыв</h1>
                        <p>Если вам понравилась наша <br/>
                            платфрома, вы можете <br/>
                            оставить отзыв, а также <br/>
                            увидеть остальные отзывы в <br/>
                            нашем телеграм канале.</p>
                    </div>
                    <div className="tell-block">
                        <div className="tell-subTitle">
                            <h3>ФИО:</h3>
                            <input className='input' type="text" placeholder='Muslim Bolot Joodarovich'/>
                            <h3>Кем вы работаете? :</h3>
                            <input className='input' type="text" placeholder='Частный предпрениматель'/>
                            <h3>Отзыв</h3>
                            <input className='in' type="text" placeholder='Мне очень понравилась эта школа...'/>
                            <button>Оставить отзыв</button>


                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Tell;