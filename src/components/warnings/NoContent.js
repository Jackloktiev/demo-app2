import React from "react";
import "./NoContent_style.css";

function Warning(){
    
    return (
        <div className = "Warning">
           <img src = "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQqdntEXXwqNXw9NdFPlguDFCu-hCVJ64Vu_95JmS30NQYmZ66g" alt = "Racoon" />
           <h1>OOOPPPSS... Looks like nothing was found.</h1>
           <h3>Please, try more specific search.</h3> 
        </div>
    )
}

export default Warning;