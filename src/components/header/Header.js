import React from "react";
import header_image from "./header_image_cut.png";
import "./header_style.css";

function Header(){
    return (
        <div className = "Header">
            <div className = "Text_div">
            <h1 className="Header_h1" >Movie Finder - all the info about movies</h1>
            </div>
            <img src={header_image} alt = "" className = "Header_image"/>
        </div>
    )
}

export default Header;