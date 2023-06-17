import './App.css';
import React from "react";
import Subscribing from "./Pages/Questions/Subscribing/Subscribing";
import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/Login/login";
// import Tell from "./Pages/Telegram/Tell";
import Many from "./Pages/Tabs/Many/Many";
import Paket from "./Pages/Paket/paket";
import { Route, Routes, useLocation } from "react-router-dom";
import WeAre from "./components/WeAre";
import Nothing from "./Pages/Nothing/Nothing";
import Third from "./Pages/Third/Third";

// import AccordionWe from "./Pages/accordionWe/AccordionWe";

import AccordionWe from "./Pages/accordionWe/AccordionWe";
import YouTube from "./Pages/YouTube/YouTube";
import Place from "./Pages/Place/place";
import Check from "./Pages/Check/Check";



function App() {
    const location = useLocation();
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Global/>}/>

                {/*<Route path={'/'} element={<Global/>}/>*/}
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/courses'} element={<WeAre/>}/>
                <Route path={'/third'} element={<Third/>}/>


                <Route path={"/subscribe"} element={<Subscribing/>}/>
                <Route path={"/many"} element={<Many/>}/>
                <Route path={"/check"} element={<Check/>}/>
                <Route path={"/many"} element={<Paket/>}/>
                <Route path={"/buttons"} element={<Nothing/>}/>

            </Routes>
            {location.pathname !== "/subscribe" && (
                <>
                    <Routes>
                        <Route path={"/"} element={<Global/>}/>
                    </Routes>
                </>
            )}
            <AccordionWe/>
            <YouTube/>
            <Place/>
            {/*<AccordionWe/>*/}

            {/*<Routes>*/}
            {/*    /!*<Route path={'/'} element={<Global/>}/>*!/*/}
            {/*    <Route path={'/login'} element={<Login/>}/>*/}
            {/*    <Route path={'/courses'} element={<WeAre/>}/>*/}
            {/*    <Route path={'/third'} element={<Third/>}/>*/}


            {/*    <Route path={"/subscribe"} element={<Subscribing/>}/>*/}
            {/*    <Route path={"/many"} element={<Many/>}/>*/}
            {/*    <Route path={"/many"} element={<Paket/>}/>*/}
            {/*    <Route path={"/buttons"} element={<Nothing/>}/>*/}

            {/*</Routes>*/}
            {/*{location.pathname !== "/subscribe" && (*/}
            {/*    <>*/}
            {/*        <Routes>*/}
            {/*            <Route path={"/"} element={<Global/>}/>*/}
            {/*        </Routes>*/}
            {/*    </>*/}
            {/*)}*/}
            {/*<AccordionWe/>*/}

            <YouTube/>

            <Footer/>
        </div>
    );
}
export default App;



