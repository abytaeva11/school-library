import React from "react"
import Tabs from "../Pages/Tabs/Tabs";
import Hero from "../Pages/hero/Hero";
import Questions from "../Pages/Questions/Questions";
import Place from "../Pages/Place/place";


const Global=()=>{
    return(
        <div>
            <Hero/>
            <Tabs/>
            <Questions/>
        </div>
    )
}
export default Global;