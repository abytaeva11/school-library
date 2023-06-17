import React from 'react';
import {BsDot} from "react-icons/bs";
import './kurse.scss'

const Kurse = () => {
    return (
        <div id='kurse'>
            <div className="container">
                <div className="kurse">
                    <h1>НА КУРСЕ ВЫ НАУЧИТЕСЬ:</h1>
                    <div className="kurse-text">
                        <p className='flex text-start'><BsDot/>Анализировать и устранять типичные ошибки руководителей в управлении <br/>
                            командой</p>
                        <p className='flex'><BsDot/>Внедрять специальные приемы работы с людьми и командой</p>
                        <p className='flex'><BsDot/>Создавать команду и эффективно ею управлять в любом проекте</p>
                        <p className='flex'><BsDot/>Правильно прогнозировать и масштабировать результат работы команды</p>
                        <p className='flex text-start'><BsDot/>Правильно подходить к вопросам увольнения и продвижения по карьерной <br/>лестнице</p>
                    </div>

                </div>
            </div>


        </div>
    );
};

export default Kurse;