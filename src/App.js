import './App.css';

import Global from "./components/Global";
import Footer from "./components/Footer/Footer";
import Header from "./components/header/Header";
import {Route, Routes} from "react-router-dom";
import Login from "./components/Login/login";

function App() {
  return (
    <div className="App">
<Header/>
        {/*<Routes>*/}
        {/*    <Route path={'/login'} element={<Login/>}/>*/}
        {/*</Routes>*/}
      <Global/>
        <Footer/>
    </div>
  );
}
export default App;
