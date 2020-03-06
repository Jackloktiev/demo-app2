import React from "react";
import "./movie-card-style.css";



function MovieCard(props){
    const clickHandler = ()=>{
        props.click("");
    }
    var Content = null;
    if(props.show){
        Content =  (<div className = "Backdrop" onClick = {clickHandler}>
                            <div className = "MovieCard">
                                <div className = "Title_text">
                                    <h1>{props.data.Title}</h1>
                                </div>
                                <img src = {props.data.Poster} alt = "Poster" />
                                <p><span className = "Bold">Plot:</span> {props.data.Plot} </p>
                                <p><span className = "Bold">Genre:</span> {props.data.Genre} </p>
                                <p><span className = "Bold">Actors:</span> {props.data.Actors} </p>
                                <p><span className = "Bold">Date released:</span> {props.data.Released} </p>
                                <p><span className = "Bold">Rating:</span> {props.data.imdbRating} </p>
                            </div>

                        </div>
                       )
    }
    return(
        <div>
            {Content}
        </div>
    )
}

export default MovieCard;