import React, {useContext, useState} from "react";
import book1 from "./img/book1.png"
import book2 from "./img/book2.png"
import book3 from "./img/book3.png"
import book4 from "./img/book4.png"
import 'bootstrap/dist/css/bootstrap.css';
import "./Tabs.scss"
import {NavLink} from "react-router-dom";
import line from "./img/Line 7.png";
import {LanguageContext} from "../../components/Context";
const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [addBooks, setAddBooks] = useState(false);
    const [count, setCount] = useState(false)
    const {fakeBackend} = useContext(LanguageContext)
    const {getKG} = useContext(LanguageContext)
    const {getRU} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const handleButtonClick = (index) => {
        handleTabClick(index + 1);
    };
    return (
        <div id="tabs">
            <div className="container">
                <div className="tabs--tab" >
                    <div className="tab--global__all">
                        {fakeBackend.map((el) => (
                            <div
                                key={el.id}
                                className={`tab ${
                                    selectedTab === el.id ? "active" : ""
                                }`}
                                onClick={() => {
                                    handleTabClick(el.id);
                                }}
                            >
                                <button style={{margin:"0 10px"}}>{ language ? el.titleKg : el.title}</button>
                            </div>
                        ))}
                    </div>

                    <div className="tabs--img">                   <div className="row   " style={{ "--bs-gutter-x": "4.5rem"}}  >
                            {fakeBackend.map((el) =>
                                selectedTab === el.id ? (
                                    el.books.slice(0,8).map((book, index) => (
                                        <div
                                            key={`${el.id}-${index}`}
                                            className="tabs__img--left"
                                            onClick={() => setAddBooks(true)}
                                            style={{
                                                width: "110%",
                                                margin: "20px 1px  0 -20px  ",
                                                borderRadius: "5px",
                                                background: "rgba(255, 255, 255, 0.1)",
                                                border: "1px solid white",
                                            }}
                                        >
                                            <div className="" style={{margin:" 15px"}}>
                                                <div>
                                                    <h5 style={{fontSize:language? "16px":""}}>{ language? book.titleKg:book.title}</h5>
                                                    <div className="tabs__img--top">
                                                        <h6 style={{fontSize:language? "10px":"15px"}}>{language ? "пайдалуу маалыматтар " : book . text}</h6>
                                                        <button  >{ language ? book.textAllKg:book.textAll}</button>
                                                        <button >{ language ? book.textNewKg:book.textNew}</button>
                                                        <button>{ language ? book.textBooksKg:book.textBooks}</button>
                                                    </div>
                                                </div>
                                                <div className="tabs--img__right">
                                                    <img src={book.images} alt="" style={{ width: "100%", display: "block" }} />
                                                    <img className=" py-3" src={book.img} alt="" />
                                                </div>
                                                <img src={line} alt="" className="lines" />
                                                <div className="tabs__img--bottom text-white d-flex align-items-center justify-content-between">
                                                    <h6>{language ? book.authorKg : book.author}</h6>
                                                    <h6>{book.data}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    )).reduce((acc, curr, index) => {
                                        const chunkIndex = Math.floor(index/ 2.5);
                                        if (!acc[chunkIndex]) {
                                            acc[chunkIndex] = [];
                                        }
                                        acc[chunkIndex].push(curr);
                                        return acc;
                                    }, [])
                                        .map((chunk, index) => (
                                        <div key={index} className={`col-md-4${index === 2? ' mb-4' : ''}`}>
                                            {chunk}
                                        </div>
                                    ))
                                ) : null
                            )}
                        </div>
                    </div>
                    <div className="baby__face">
                        <img className="baby__face1" src={book1} alt=""/>
                        <img className="baby__face2" src={book2} alt=""/>
                        <img className="baby__face3" src={book3} alt=""/>
                        <img className="baby__face4" src={book4} alt=""/>

                    </div>
                    <NavLink to="/many">  <button    className="buttonTabs"> { language?"Баардыгын корсотуу" : "показать больше"}</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Tabs;