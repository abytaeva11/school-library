import React, { useState } from "react";
import fakeBackend from "./TabsCard";

import book1 from "../Tabs/img/book1.png";
import book2 from "../Tabs/img/book2.png";
import book3 from "../Tabs/img/book3.png";
import book4 from "../Tabs/img/book4.png";
import 'bootstrap/dist/css/bootstrap.css';
import "./Tabs.scss"


const Tabs = () => {
    const [selectedTab, setSelectedTab] = useState(1);
    const [addBooks, setAddBooks] = useState(false);
    const [count, setCount] = useState(false)

    const handleTabClick = (index) => {
        setSelectedTab(index);
    };

    const handleButtonClick = (index) => {
        handleTabClick(index + 1);
    };



    return (
        <div id="tabs">
            <div className="container">
                <div className="">
                    <div className="tabs__left">
                        <div className="tab--global">
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
                                        <button>{el.title}</button>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>


                    <div className="">
                        <div className="tabs--img">
                            <div className="row justify-content-between w-90     --bs-gutter-x: 3.5rem;">
                                {fakeBackend.map((el) =>
                                    selectedTab === el.id ? (
                                        el.books.map((book, index) => (
                                            <div
                                                key={book.id}
                                                className="tabs__img--left"
                                                onClick={() => setAddBooks(true)}
                                                style={{
                                                    width: "100%",
                                                    margin: "15px",
                                                    borderRadius: "5px",
                                                    background: "rgba(0, 0, 0, 0.1)",
                                                }}
                                            >
                                                <div className="" style={{margin:"15px"}}>
                                                    <div>
                                                        <h5>{book.title}</h5>
                                                        <div className="tabs__img--top">
                                                            <h6>{book.text}</h6>
                                                            <button style={{ border: "2px solid white" }}>{book.textAll}</button>
                                                            <button style={{ border: "2px solid white" }}>{book.textNew}</button>
                                                            <button style={{ border: "2px solid white" }}>{book.textBooks}</button>
                                                        </div>
                                                    </div>

                                                    <div className="tabs--img__right">
                                                        <img src={book.images} alt="" style={{ width: "100%", display: "block" }} />
                                                        <img className="px-2 py-3" src={book.img} alt="" />
                                                    </div>
                                                    <hr />
                                                    <div className="tabs__img--bottom text-white d-flex align-items-center justify-content-between">
                                                        <h6>{book.author}</h6>
                                                        <h6>{book.data}</h6>
                                                    </div>
                                                </div>
                                            </div>
                                        )).reduce((acc, curr, index) => {
                                            const chunkIndex = Math.floor(index / 2.5);
                                            if (!acc[chunkIndex]) {
                                                acc[chunkIndex] = [];
                                            }
                                            acc[chunkIndex].push(curr);
                                            return acc;
                                        }, []).map((chunk, index) => (
                                            <div key={index} className={`col-md-4${index === 2? ' mb-4' : ''}`}>
                                                {chunk}
                                            </div>
                                        ))
                                    ) : null
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="baby__face">
                        <img className="baby__face1" src={book1} alt=""/>
                        <img className="baby__face2" src={book2} alt=""/>
                        <img className="baby__face3" src={book3} alt=""/>
                        <img className="baby__face4" src={book4} alt=""/>

                    </div>

                    <button   className="buttonTabs"> показать больше</button>
                    <h1>vyidwasjbhcj</h1>
                </div>
            </div>
        </div>
    );
};

export default Tabs;