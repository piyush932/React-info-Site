import React from "react"; 
import  ReactDOM from "react";
import logo from './react-logo.png'

export default Headers = ()=>{
    return(
        <div className="header">
            <div className="header-sub">
            <img src={logo} alt="logo" className="react-logo"></img>
            <h2>ReactFacts</h2>
            </div>
            <h3>React Course - Project 1</h3>
        </div>
    )
}