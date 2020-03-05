import React from "react";
import "./result_style.css";

function Result(props){
    var movieID = props.id;
    const resultClickHandler = () => {
      props.click(movieID);  
    };
    return (
        <div className = "Result" onClick = {resultClickHandler}>
           <p>{props.title}</p>
           <img 
                src = {props.url}
                alt="Poster"
           />
           <p>{props.year}</p>     
        </div>
    )
}

export default Result;