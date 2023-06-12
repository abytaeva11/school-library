import './App.css';

import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Course from "./Pages/Course/course";
import Course2 from "./Pages/Course/course2";

function App() {
    return (
        <div className="App">
            <Header/>
            <Routes>
                <Route path='/' element={<Global/>}/>
                <Route path='/we' element={<Course/>}/>

                <Route path="/photo" element={<Course2/>}/>
            </Routes>



            <Footer/>
        </div>
    );
}

export default App;
