import React from 'react';
import "./Third.scss"
import self1 from "../../assets/img/img1.png"
import self2 from "../../assets/img/img2.png"
import self3 from "../../assets/img/img4.png"



const Third = () => {
    return (
        <div id="third">
<div className="container">
    <div className="third">
        <h1 style={{padding:"50px 0"}}>SELF DEVELOPING SCHOOL</h1>
        <h4>“Само развитие лучше чем школьное обучение”</h4>
        <p>Наша короная фраза, ведь эта платформа создавалась именно с этой целью.
            Так как чтобы быть успешным в жизни не обязательно быть бакалавром, ведь столько богатых людей которые даже не ходили в университет.
            A наш логотип прозрачный так как у нас все легко и понятно.</p>
    </div>

    <div className="self">
        <img className="self1" src={self1} alt=""/>
        <img className="self2" src={self2} alt=""/>
        <img className="self3" src={self3} alt=""/>
    </div>

</div>
        </div>
    );
};

export default Third;