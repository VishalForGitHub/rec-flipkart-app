import React from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
export default function Navigators(){
    return(
        <Router>
            <NavBar/>
             <Routes>
                 <Route path="/" element={<Home/>}/>
             </Routes>   
        </Router>    
    )
}