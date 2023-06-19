
import React, {useContext, useState} from 'react';
import "./accordionWe.scss"
import {LanguageContext} from "../../components/Context";
import book from "./img/book.png"
import book1 from "../../assets/img/img4.png"


const AccordionWe = () => {
    const {accordion} = useContext(LanguageContext);
    const {getKG} = useContext(LanguageContext)
    const {getRU} = useContext(LanguageContext)
    const {language} = useContext(LanguageContext)
    const [img, setImg] = useState(false)
    const getImg = () => {
        setImg(true)
    }

    const [selected,setSelected]=useState(null)

    const toggle=(i)=>{

if(selected===i){
    return setSelected(null)
}
    setSelected(i)
    }

    return (
        <div className="container">
                <h1 className="lemon" style={{borderLeft:"10px solid white",
                    padding: "0 20px",marginLeft:"-23px"
                }}>{ language? "КУРСТУН ПРОГРАММАСЫ"  :"ПРОГРАММА КУРСА"} </h1>
            <div className="accordion">
                {
                    accordion.map((item, i) => (
                       <div className="item">
                           <div className="apple" onClick={()=>toggle(i)}>
                              <div className="d-flex align-items-center justify-content-between ">
                                  <h3 style={{margin:"5px"}}> {item.btn1}</h3>
                                  <h2 style={{marginLeft:"60px"}}> {language ? item.titleKG: item.title }</h2>
                              </div>
                              <div className="content-all">
                                  <button style={{margin:" 5px 66px"}}> {language? item.btn2KG: item.btn2}</button>
                                  <div className="d-flex align-items-center flex-column">
                                      <h4 >{item.main}</h4>
                                      <span onClick={getImg} className="material-symbols-outlined">{selected===i?"expand_less":"expand_more"}</span>
                                  </div>
                              </div>

                           </div>
                           <div className={selected===i ? "content show":"content" }
                          style={{marginLeft:"220px" }}
                           >
                              <div>
                                  <h5> {language?item.task1KG : item.task1}</h5>
                                  <h5>{ language?item.task2KG :  item.task2}</h5>
                                  <h5>{language?item.task3KG :  item.task3}</h5>
                              </div>
                               <p>{language?item.textKG :  item.text}</p>
                           </div>

                       </div>
                    ))
                }

                <div >
                    <img className="good" src={book} alt=""/>
                    <img className="good1" src={book1} alt=""/>

                </div>

            </div>


        </div>
    );
};

export default AccordionWe;





