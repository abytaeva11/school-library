import './App.css';

import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Many from "./Pages/Tabs/Many/Many";
import Nothing from "./Pages/Nothing/Nothing";

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
  );
}

export default App;
