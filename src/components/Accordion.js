import React, { useContext, useState } from "react";
import query from "../../Pages/Questions/img/bigQuery.png";
import { LanguageContext } from "../../components/Context";
import { useNavigate } from "react-router-dom";
import "../Questions/Question.scss"
const Questions = () => {
    const { language } = useContext(LanguageContext);
    const { data } = useContext(LanguageContext);
    const navigate = useNavigate();

    function AccordionItem({ title, content }) {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleAccordion = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <div
                className={`relative border-b border-gray-300 mb-2 ${
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
                    <div className="accordion-content p-[0.7rem] text-white text-[16px] w-[570px] font-sans">
                        {content}
                    </div>
                )}
            </div>
        );
    }

    return (
        <div className="question pt-[90px] pb-[200px] px-[0]">
            <div className="container mx-auto">
                {data.map((el) => (
                    <div className="pt-12 items-center" key={el.accord.name}>
                        <h2 className="text-white text-3xl font-semibold">{language ? el.accord.nameKG : el.accord.name}</h2>
                        <div className="flex">
                            <div className="relative">
                                <img src={query} className="ml-20 mt-8 " width={280} alt="" />
                            </div>
                            <div className="ml-12 mt-4">
                                <div id="accordion-collapse" className="accordion">
                                    <AccordionItem
                                        title={language ? el.accord.question1KG : el.accord.question1}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                    />
                                    <AccordionItem
                                        title={language ? el.accord.question2KG : el.accord.question2}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                    />
                                    <AccordionItem
                                        title={language ? el.accord.question3KG : el.accord.question3}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                    />
                                    <AccordionItem
                                        title={language ? el.accord.question4KG : el.accord.question4}
                                        content={language ? el.accord.titleKG : el.accord.title}
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Questions;

