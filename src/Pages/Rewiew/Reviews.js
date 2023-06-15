import React, {useState, useRef, useContext} from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { BsArrowRight, BsArrowLeft } from 'react-icons/bs';
import "./Review.scss";
import line from "./img/Line 8.png";

import {LanguageContext} from "../../components/Context";

const Reviews = () => {
    const [showButton, setShowButton] = useState(false);
    const sliderRef = useRef(null);
    const [currentSlide, setCurrentSlide] = useState(0);

    const {reviews}=useContext(LanguageContext)
    const {language}=useContext(LanguageContext)
    const {getKG}=useContext(LanguageContext)
    const {getRU}=useContext(LanguageContext)



    const NextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            setShowButton(true);
        }
    };

    const PrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
            setShowButton(true);
        }
    };

    const settings = {
        appendDots: (dots) => (
            <div>
                <ul className="drive">{dots}</ul>
            </div>
        ),
        className: 'center',
        centerMode: true,
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 1.52,
        dots: false,
        speed: 500,
        beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


    return (
        <div className="drive">
            <h2 className="drive--text">{language? "Сын-пикир" : " Отзывы"}</h2>
            <div className="btn--left">
                <button onClick={PrevClick}>
                    <BsArrowLeft />
                </button>
            </div>
            <div className="slicing">
                <Slider ref={sliderRef} {...settings}>
                    {reviews.map((review, index) => (
                        <div className={`slide ${index === currentSlide ? 'active' : ''}`} key={index}>
                            <div className="slide-content">
                                <div>
                                    <p>{language? review.titleKG : review.title}
                                        <span >{language? review.textKG : review.text}</span>
                                    </p>

                                </div>
                                <div className="source">
                                    <h2 style={{fontSize : language ? "17px" : " "}}>{language? review.nameKG: review.name}</h2>
                                    <img src={review.img} alt="" />
                                    <h2 >{language? review.lastTitleKG : review.lastTitle}</h2>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
            <div className="btn--right">
                <button onClick={NextClick}>
                    <BsArrowRight />
                </button>
            </div>
        </div>
    );
};

export default Reviews;
