import './App.css';
import React from "react";
import Subscribing from "./Pages/Questions/Subscribing/index";
import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/Login/login";
import Tell from "./Pages/Telegram/Tell";
import Many from "./Pages/Tabs/Many/Many";
import Paket from "./Pages/Paket/paket";
import { Route, Routes, useLocation } from "react-router-dom";
import WeAre from "./components/WeAre";
import Nothing from "./Pages/Nothing/Nothing";


function App() {
    const location = useLocation();
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={'/'} element={<Global/>}/>
                <Route path={'/login'} element={<Login/>}/>
                <Route path={'/tellegram'} element={<WeAre/>}/>
                <Route path={"/subscribe"} element={<Subscribing/>}/>

                <Route path={"/many"} element={<Many/>}/>
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
            <Footer/>
        </div>
    );
}
export default App;



