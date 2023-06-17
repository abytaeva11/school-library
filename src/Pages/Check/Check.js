import React, { useContext, useState, useEffect } from 'react';
import center from "../Check/center.svg";
import { LanguageContext } from "../../components/Context";
import "../Check/Check.scss";
import { useNavigate } from 'react-router-dom';

const Check = () => {
    const { check } = useContext(LanguageContext);
    const [displayResult, setDisplayResult] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDisplayResult(true);
            setTimeout(() => {
                navigate('/'); // Переход на главную страницу через две секунды
            }, 3000);
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    return (
        <div>
            {check.map((el) => (
                <div id="check" key={el.self}>
                    <img src={center} alt="" />
                    <div className="seredina">
                        <h1>{el.self}</h1>
                        {displayResult ? <div className="texts"><h2 className="result">{el.result}</h2> <h3 className="chek">{el.chek}</h3></div> : <div className="loading"><h2 className="panding">{el.panding}

                            <svg className="spinner" width="20px" height="20px" viewBox="0 0 66 66"
                                 xmlns="http://www.w3.org/2000/svg">
                                <circle className="path" fill="none" strokeWidth="6" strokeLinecap="round"
                                        cx="33" cy="33" r="30"></circle>
                            </svg>

                        </h2>  </div>}
                    </div>

                </div>
            ))}
        </div>
    );
};

export default Check;
