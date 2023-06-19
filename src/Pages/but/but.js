import React from 'react';
import log1 from '../but/img/youtu.svg'
import log2 from '../but/img/log2.svg'
import log3 from '../but/img/log3.svg'
import './but.scss'
import but1 from "../../assets/img/img3.png"
import but2 from "../../assets/img/img5.png"



const But = () => {
    return (
        <div id='but'>
            <div className="container">
                <div className="but mt-24 flex justify-between">
                    <div className="but-block">
                        <img src={log1} alt="img" className='mt-4'/>
                        <h3>43 материала</h3>
                        <p>Только полезная информация,<br/>
                            никакой воды. Применяйте <br/>
                            эти знания первыми!</p>

                    </div>
                    <div className="but-block">
                        <img src={log2} alt="img"/>
                        <h3>100% эксклюзив</h3>
                        <p>Курс записан эксклюзивно <br/>
                            для нашей платформы.</p>

                    </div>
                    <div className="but-block">
                        <img src={log3} alt="img"/>
                        <h3>В любое время, в любом месте</h3>
                        <p>Занимайтесь как вам удобно и <br/>
                            где угодно, на своем <br/>
                            мобильном или компьютере.</p>

                    </div>
                </div>
                <div>
                    <img className="but1" src={but1} alt=""/>
                    <img className="but2" src={but2} alt=""/>

                </div>

            </div>



        </div>
    );
};

export default But;