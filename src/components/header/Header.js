import React from "react";
import header_image from "./header_image_cut.png";
import "./header_style.css";

function Header(){
    var style = {
        backgroundImage:`url(${header_image})`
    }
    return (
        <div className = "Header" style = {style} >
            <div className = "Text_div">
            <h1 className="Header_h1" >Movie Finder - all the info about movies</h1>
            </div>
        </div>
    )
}

export default Header;