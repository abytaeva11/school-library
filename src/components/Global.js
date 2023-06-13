import React from "react"
import Tabs from "../Pages/Tabs/Tabs";
import Hero from "../Pages/hero/Hero";
import Questions from "../Pages/Questions/Questions";
import Paket from "../Pages/Paket/paket";


const Global=()=>{
    return(
        <div>
            <Hero/>
            <Tabs/>
            <Questions/>

            <Paket/>

        </div>
    )
}
export default Global;