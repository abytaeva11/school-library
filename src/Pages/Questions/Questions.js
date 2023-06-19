import React, { useContext, useState } from "react";
import sub1 from "../../Pages/Questions/img/sub1.png";
import sub2 from "../../Pages/Questions/img/sub2.png";
import query from "../../Pages/Questions/img/bigQuery.png";
import { LanguageContext } from "../../components/Context";
import {Link, useNavigate} from "react-router-dom";
import "../Questions/Question.scss";
import back1 from  "../../assets/img/img2.png"
import back3 from  "../../assets/img/img3.png"



const Questions = () => {
    const { language } = useContext(LanguageContext);
    const { data } = useContext(LanguageContext);
    const navigate = useNavigate();

    const [expandedItem, setExpandedItem] = useState(null);

    function AccordionItem({ id, title, content, activeItemId }) {
        const isExpanded = expandedItem === id;

        const toggleAccordion = () => {
            setExpandedItem(isExpanded ? null : id);
        };

        return (
            <div
                className={`relative border-b border-gray-300 mb-2  ${
                    isExpanded ? "expanded" : ""
                }`}
            >
                <h2 className="">
                    <button
                        className="flex items-center relative justify-between w-full p-[0.4rem] text-left"
                        onClick={toggleAccordion}
                        aria-expanded={isExpanded}
                    >
            <span className="text-white font-[300] text-[25px] font-sans w-[540px]">
              {title}
            </span>
                        <svg
                            className={`accordion-icon w-9 h-9 rotate-0 shrink-0 text-white mb-[30px] ${
                                isExpanded ? "rotate-[-180deg] duration-500 " : "rotate-0 duration-500"
                            }`}
                            fill="currentColor"
                            viewBox=" 0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                fillRule="evenodd"
                                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                                clipRule="evenodd"
                            ></path>
                        </svg>
                    </button>
                </h2>
                {isExpanded && (
                    <div className="accordion-content p-[0.7rem] text-white text-[16px] w-[570px] font-sans ">
                        {content}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="question pt-[90px] pb-[200px] px-[0]">
            <div className="container mx-auto">
                {data?.map((el) => (
                    <div
                        className="back backdrop-blur-lg relative px-6 flex rounded-lg border border-indigo-50 transition-transform duration-300 pt-[41px] pb-[35px]"
                        onMouseEnter={(e) => {
                            const card = e.currentTarget;
                            const images = card.querySelector(".card-image1");
                            images.classList.add("scale-150");
                            const card2 = e.currentTarget;
                            const images2 = card2.querySelector(".card-image2");
                            images2.classList.add("scale-1502");
                        }}
                        onMouseLeave={(e) => {
                            const card = e.currentTarget;
                            const images = card.querySelector(".card-image1");
                            images.classList.remove("scale-150");
                            const card2 = e.currentTarget;
                            const images2 = card2.querySelector(".card-image2");
                            images2.classList.remove("scale-1502");
                        }}
                        key={el.card.title}
                    >
                        <img
                            src={sub1}
                            className="absolute top-0 left-0 w-16 card-image1 animate-card-image1"
                            alt=""
                        />
                        <div className="flex flex-col mr-[2rem] w-[948px] ml-[25px] ">
                            <h2 className="text-white tracking-[1.5px] font-semibold text-[35px] mb-[0.95rem] ">
                                {language ? el.card.titleKG : el.card.title}
                            </h2>
                            <h4 className="text-white tracking-[1.5px] font-[350] text-[28.2px] w-[669px] leading-[28px]  ">
                                {language ? el.card.descKG : el.card.desc}
                            </h4>
                        </div>
                        <div className="flex flex-col">
                            <button
                                className="py-[0.5rem] px-4 mt-2 mb-[23px] text-[16px] font-[600] bg-white rounded font-sans"
                                style={{ color: "#595FEB" }}
                                onClick={() => navigate("/subscribe")}
                            >
                                {language ? el.card.subKG : el.card.sub}
                            </button>
                            <Link to={"/buttons"}>
                                <button className="py-[0.5rem] px-4 text-white border text-[16px] font-bold border-fuchsia-50 font-sans rounded">
                                    {language ? el.card.knowKG : el.card.know}
                                </button>
                            </Link>
                        </div>
                        <img
                            src={sub2}
                            className="absolute bottom-0 right-[15.5rem] w-60 card-image2 animate-card-image2"
                            alt=""
                        />
                    </div>
                ))}
                {data.map((el, index) => (
                    <div className="pt-[8rem] items-center" key={el.accord.name}>
                        <h2 className="text-white text-3xl font-semibold">
                            {language ? el.accord.nameKG : el.accord.name}
                        </h2>
                        <div className="flex">
                            <div className="relative">
                                <img src={query} className="ml-20 mt-8" width={280} alt="" style={{ marginLeft:"2rem" ,}} />
                            </div>
                            <div className="ml-[20px] mt-4">
                                <div id={`accordion-${index}`} className="accordion" style={{width:"700px"}}>
                                    <AccordionItem
                                        id={`accordion-item-${index}-1`}
                                        title={language ? el.accord.question1KG : el.accord.question1}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                        activeItemId={expandedItem}
                                    />
                                    <AccordionItem
                                        id={`accordion-item-${index}-2`}
                                        title={language ? el.accord.question2KG : el.accord.question2}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                        activeItemId={expandedItem}
                                    />
                                    <AccordionItem
                                        id={`accordion-item-${index}-3`}
                                        title={language ? el.accord.question3KG : el.accord.question3}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                        activeItemId={expandedItem}
                                    />
                                    <AccordionItem
                                        id={`accordion-item-${index}-4`}
                                        title={language ? el.accord.question4KG : el.accord.question4}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                        activeItemId={expandedItem}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}

                <div className="back">
                    <img className="back1" src={back1} alt=""/>
                    <img className="back3" src={back3} alt=""/>

                </div>

            </div>
        </div>
    );
};

export default Questions;
