import React, {useContext, useState} from "react";
import "./Many.scss";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import line from "../img/Line 7.png"
import {LanguageContext} from "../../../components/Context";


const Many = () => {
    const {fakeBackend} = useContext(LanguageContext)
    const {getKG} = useContext(LanguageContext)
    const {getRU} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)

    const [selectTab, setSelectTab] = useState(1);
    const [add, setAdd] = useState(false);
    const [showPrevButton, setShowPrevButton] = useState(false);

    const handleClick = (index) => {
        const selectedTab = Math.floor(index / 7) + 1;
        handleTab(selectedTab);
    };

    const handleTab = (value) => {
        setSelectTab(value);
        scrollToTop();
    };
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    const settings = {
        slidesToShow: 7,
        slidesToScroll: 7,
        infinite: true,
        arrows: false, // Убираем кнопки влево и вправо, поставляемые компонентом Slider
    };

    const handleNextClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickNext();
            setShowPrevButton(true);
        }
    };

    const handlePrevClick = () => {
        if (sliderRef.current) {
            sliderRef.current.slickPrev();
            setShowPrevButton(false);
        }
    };

    const sliderRef = React.useRef(null);

    return (
        <div id="many">
            <div className="container ">
                <div className="row  justify-content-center">

                    <p>Наши курсы</p>
                    <h1> Статьи</h1>

                    <div className="many">
                        <div className="many--tab">
                            <div className="many--right  ">
                                {fakeBackend.map((el) => (
                                    <div
                                        key={el.id}
                                        className={`tab ${selectTab === el.id ? "active" : ""}`}
                                        onClick={() => {
                                            handleTab(el.id);
                                        }}
                                    >
                                        <button>{language ? el.titleKg : el.title}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="many__many" >
                        <div className="many--all" >
                            <div className="row gap-0.4 "  style={{ "--bs-gutter-x": "5.5rem" }}>
                                {fakeBackend.map((el) =>
                                    selectTab === el.id ? (
                                        el.books.map((book, value) => (
                                            <div
                                                key={book.id}
                                                className=" "
                                                onClick={() => setAdd(true)}
                                                style={{
                                                    "--bs-gutter-x": "2rem",
                                                    width: "30.5%",
                                                    margin: "10px 16px ",
                                                    height: "100%",
                                                    borderRadius: "5px",
                                                    background: "rgba(255, 255, 255, 0.1)",
                                                    border: "1px solid white",
                                                }}
                                            >
                                                <div>
                                                    <div className="title">
                                                        <div className=" d-flex align-items-center justify-content-between">
                                                                <h5 style={{ fontSize: language ? "16px" : "" }}>{language ? book.titleKg : book.title}</h5>
                                                            <button style={{background:book.id === 1 || book.id === 4 || book.id === 7 ? "#fff":" " }} className="buttons">{book.id === 1 || book.id === 4 || book.id === 7 ? "Новое" : " "}</button>
                                                            </div>
                                                        <div className="many--text">
                                                            <h6 style={{fontSize:language?"11px":""}}>{language?book.textKg: book.text}</h6>
                                                            <button>{language?book.textAllKg:book.textAll}</button>
                                                            <button>{language?book.textNewKg :book.textNew}</button>
                                                            <button>{language?book.textBooksKg:book.textBooks}</button>
                                                        </div>
                                                    </div>
                                                    <div className="many--img">
                                                        <img
                                                            src={book.images}
                                                            alt=""
                                                            style={{ width: "100%", display: "block" }}
                                                        />
                                                    </div>
                                                    <img src={line} alt="" className=" pt-2"/>
                                                    <div className="tabs__img--bottom">
                                                        <h6>{language?book.authorKg : book.author}</h6>
                                                        <h6>{ book.data}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    ) : null
                                )}
                            </div>
                        </div>
                        <div className="wrapper">
                            <div className="wrapper--all">
                                {showPrevButton && (
                                    <button className="slider-arroww" onClick={handlePrevClick}>{'<'}</button>
                                )}
                                <Slider ref={sliderRef} {...settings}>
                                    {Array.from({ length: 51 }).map((el, index) => (
                                        <div key={index}>
                                            <button onClick={()=>{ handleClick(index)}} className="slider-button">{index + 1}</button>
                                        </div>
                                    ))}
                                </Slider>
                                <button className="slider-arrow" onClick={handleNextClick}>{'>'}</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Many;



