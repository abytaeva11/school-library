import React from "react"
import Tabs from "../Pages/Tabs/Tabs";
import Hero from "../Pages/hero/Hero";
import Questions from "../Pages/Questions/Questions";


const Global=()=>{
    return(
        <div>
            <Hero/>
            <Tabs/>
            {/*<InfoFollowers/>*/}
            <Questions/>
        </div>
    )
}
export default Global;