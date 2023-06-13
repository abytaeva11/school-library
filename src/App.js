import './App.css';

import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/login";
import Tell from "./Pages/Telegram/Tell";

function App() {
  return (
    <div className="App">
<Header/>
        <Routes>
            <Route path={'/'} element={<Global/>}/>
            <Route path={'/login'} element={<Login/>}/>
            <Route path={'/tellegram'} element={<Tell/>}/>
        </Routes>
        <Footer/>
    </div>
  );
}
export default App;
