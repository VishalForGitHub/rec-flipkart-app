import React, { useState } from "react";
import {BrowserRouter as Router,Routes,Route } from "react-router-dom";
import NavBar from "./component/NavBar";
import Home from "./pages/Home";
import SectionResult from "./pages/SectionResult";
import ProductView from "./pages/ProductView";
export default function Navigators(){

    let [cartCount,setCartCount]=useState([]);
    let [floatingMessage,setFloatingMessage]=useState(false);

    let handleCartCount=(id)=>{
        // setCartCount(cartCount ++);
        // if(cartCount.length==0)
            setCartCount([...cartCount,id]);
            setFloatingMessage(true);

            setTimeout(()=>{
                setFloatingMessage(false)
            },3000);
    }

    return(
        <Router>
            <NavBar cartCount={cartCount} floatingMessage={floatingMessage}/>
             <Routes>
                 <Route path="/" element={<Home handleCartCount={handleCartCount} floatingMessage={floatingMessage}/>}/>
                 <Route path="/section/:sectionName" element={<SectionResult/>}/>
                 <Route path="/product/:id" element={<ProductView/>}/>
             </Routes>   
        </Router>    
    )
}