import React from "react";
import { NavLink } from "react-router-dom";
import "./PageNavigation.css"

const PageNavigation = ({title}) =>{
    return(
        <div className="PageNavigationContainer">
            <NavLink to="/" style={{fontWeight:"400", color:"#17424b"}}>Home </NavLink> 
            <p style={{padding:"0 0.5rem"}}>/</p>
            <NavLink to="/store" style={{ontWeight:"400", color:"#17424b"}}>Store </NavLink> 
            <p style={{padding:"0 0.5rem"}}>/</p>
            <p>{title}</p>
        </div>
    )
}

export default PageNavigation;