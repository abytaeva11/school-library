import './App.css';

import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";

import Login from "./components/Login/login";
import Subscribing from "./Pages/Questions/Subscribing/index";
import { Route, Routes, useLocation } from "react-router-dom";

function App() {
    const location = useLocation();
  return (
    <div className="App">
<Header/>
        {/*<Routes>*/}
        {/*    <Route path={'/login'} element={<Login/>}/>*/}
        {/*</Routes>*/}
        <Routes>
            <Route path={"/subscribe"} element={<Subscribing />} />
        </Routes>
        {location.pathname !== "/subscribe" && (
            <>
                <Global />
            </>
        )}
        <Footer />
    </div>
  );

import {Route, Routes} from "react-router-dom";
import Many from "./Pages/Tabs/Many/Many";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path={"/"} element={<Global/>}/>
                <Route path={"/many"} element={<Many/>}/>
            </Routes>
            <Footer/>

        </div>
    )

}

export default App;
