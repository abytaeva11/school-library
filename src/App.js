import './App.css';
import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import Login from "./components/Login/login";
import Subscribing from "./Pages/Questions/Subscribing/index";
import { Route, Routes, useLocation } from "react-router-dom";
import Many from "./Pages/Tabs/Many/Many";
import Paket from "./Pages/Paket/paket";
import React from "react";

function App() {
    const location = useLocation();
    return (
        <div className="App">
            <Header/>
            {/*<Routes>*/}
            {/*    <Route path={'/login'} element={<Login/>}/>*/}
            {/*</Routes>*/}
            <Routes>
                <Route path={"/subscribe"} element={<Subscribing/>}/>

                <Route path={"/many"} element={<Many/>}/>
                <Route path={"/many"} element={ <Paket/> }/>
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
