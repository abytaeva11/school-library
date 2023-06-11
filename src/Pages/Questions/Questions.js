import React, {useContext, useState} from "react";
import sub1 from "../../Pages/Questions/img/sub1.png"
import sub2 from "../../Pages/Questions/img/sub2.png"
import query from "../../Pages/Questions/img/bigQuery.png"
import ques from "../../Pages/Questions/img/ques.png"
import {LanguageContext} from "../../components/Context";

const Questions = () => {
    const {language} =  useContext(LanguageContext)
const {data} = useContext(LanguageContext)
    function AccordionItem({title, content}) {
        const [isExpanded, setIsExpanded] = useState(false);

        const toggleAccordion = () => {
            setIsExpanded(!isExpanded);
        };

        return (
            <div className={` relative border-b border-gray-300 mb-2 ${isExpanded ? 'expanded' : ''}`}>
                <h2 className=" ">
                    <button
                        className=" flex items-center relative   justify-between w-full p-[0.4rem]  text-left  "
                        onClick={toggleAccordion}
                        aria-expanded={isExpanded}
                    >
                        <span className="text-white font-[300] text-[25px] font-sans w-[540px] ">{title}</span>
                        <svg
                            className={`accordion-icon w-9 h-9 rotate-0 shrink-0 text-white mb-[30px] ${isExpanded ? 'rotate-[-180deg] duration-500 ' : ' rotate-0 duration-500'}`}
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
                    <div className="accordion-content p-[0.7rem] text-white text-[16px] w-[570px] font-sans  ">
                        {content}
                    </div>
                )}
            </div>

        );
    }

    return (
        <div className="question  pt-[90px] pb-[200px]  px-[0]">
            <div className="container mx-auto">
                {
                    data?.map((el) => (
                        <div
                            className=" py-[50px] backdrop-blur-lg relative px-[53px] flex  rounded-[10px] border border-indigo-50">
                            <img src={sub1} className="absolute top-0 left-0 w-[80px]" alt=""/>
                            <div className="flex flex-col  mr-[210px]">
                                <h2 className="text-white font-[500] text-[32px] mb-[5px]   ">{ language ?  el.card.titleKG : el.card.title }</h2>
                                <h4 className="text-white font-[400] text-[25px] space-x-0.5  font-sans w-[635px]">{ language ?  el.card.descKG : el.card.desc}</h4>
                            </div>
                            <div className="flex flex-col ">
                                <button
                                    className="py-[8px] px-[17px] mt-[10px] mb-[20px] text-[16px]  font-sans font-[700] bg-white rounded-[10px] " style={{
                                        color: "#595FEB",

                                }}>{ language ?  el.card.subKG : el.card.sub}</button>
                                <button
                                    className="py-[8px] px-[17px]  text-white border text-[16px] font-sans font-[800] border-fuchsia-50 rounded-[10px]  ">{language ?  el.card.knowKG : el.card.know}</button>
                            </div>
                            <img src={sub2} className="absolute bottom-0 right-[250px] w-[200px] " alt=""/>
                        </div>
                    ))
                }
                {
                    data.map((el) => (
                        <div className="pt-[230px]  items-center ">
                            <h2 className="text-white text-[30px] font-[500] font-sans ">{language ?  el.accord.nameKG : el.accord.name}</h2>
                            <div className="flex  ">
                                <div className="relative">
                                    {/*<img src={ques} className='absolute left-0 top-[120px]' alt=""/>*/}
                                    <img src={query} className="ml-[150px] mt-[50px] " width={280} alt=""/>
                                </div>
                                <div className="ml-[120px] mt-[17px] ">

                                    <div id="accordion-collapse" className="accordion ">
                                        <AccordionItem
                                            title={language ?  el.accord.question1KG : el.accord.question1}
                                            content={language ?  el.accord.titleKG : el.accord.title}
                                        />
                                        <AccordionItem
                                            title={language ?  el.accord.question2KG : el.accord.question2}
                                            content={language ?  el.accord.titleKG : el.accord.title}
                                        />
                                        <AccordionItem
                                            title={language ?  el.accord.question3KG : el.accord.question3}
                                            content={language ?  el.accord.titleKG : el.accord.title}
                                        />
                                        <AccordionItem
                                            title={language ?  el.accord.question4KG : el.accord.question4}
                                            content={language ?  el.accord.titleKG : el.accord.title}
                                        />
                                    </div>
                                </div>
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    );
}

export default Questions;