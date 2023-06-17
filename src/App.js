import './App.css';
import React, {useState} from "react";
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
import UserContext from './components/HukContext/UserContext';

import YouTube from "./Pages/YouTube/YouTube";
import Check from "./Pages/Check/Check";
import But from "./Pages/but/but";
import Kurse from "./Pages/kurse/kurse";
import Bolot from "./Pages/bolot/bolot";
import Muslim from "./Pages/musli/muslim";



function App() {
    const [loggedIn, setLoggedIn] = useState(false)
    const location = useLocation();
    return (
            <UserContext.Provider value={{loggedIn,setLoggedIn}}>

        <div className="App">
            <Header/>
            <But/>
            <Kurse/>
            <Bolot/>
            <Muslim/>
            {/*<Routes>*/}
            {/*    /!*<Route path={'/'} element={<Global/>}/>*!/*/}
            {/*    /!*<Route path={'/login'} element={<Login/>}/>*!/*/}
            {/*    /!*<Route path={'/courses'} element={<WeAre/>}/>*!/*/}
            {/*    /!*<Route path={'/third'} element={<Third/>}/>*!/*/}
            {/*    */}
            {/*    */}
            {/*    /!*<Route path={"/subscribe"} element={<Subscribing/>}/>*!/*/}
            {/*    /!*<Route path={"/many"} element={<Many/>}/>*!/*/}
            {/*    /!*<Route path={"/check"} element={<Check/>}/>*!/*/}
            {/*    /!*<Route path={"/many"} element={<Paket/>}/>*!/*/}
            {/*    /!*<Route path={"/buttons"} element={<Nothing/>}/>*!/*/}
            {/*    /!*<Route path={"/youtube"} element={<YouTube/>}/>*!/*/}
            {/*    */}


            {/*</Routes>*/}
            {location.pathname !== "/subscribe" && (
                <>
                    <Routes>
                        <Route path={"/"} element={<Global/>}/>
                    </Routes>
                </>
            )}
            <Footer/>
        </div>
</UserContext.Provider>

    );
}
export default App;



