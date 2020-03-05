import React, {useState, useEffect} from "react";
import SearchBar from "../search-bar/Search-bar";
import Result from "../result-element/Result";
import "./container-style.css";
import StartData from "../result-element/start-data";
import MovieCard from "../movie-card/Movie-card";
import NoContent from "../warnings/NoContent";


function Container(){
    const [Data, setData] = useState(StartData);
    const [MovieData, setMovieData] = useState(StartData);
    const [SearchParam, setSearchParam] = useState("wolverine");//stores value from the searchbar
    const [MovieSelect, setMovieSelect] = useState(false); //to track if result was clicked

    const resultClickHandler = (movieID)=>{
        console.log("Movie ID passed to the container " + movieID);
        setMovieSelect(movieID);
    }

    const backdropClickHandler = (movieID)=>{
        console.log("Movie ID passed to the container " + movieID);
        setMovieSelect(movieID);
    }

    const searchHandler = (data)=>{
        setSearchParam(data);
    }
    
    //fetch search data from the server
    useEffect(()=>{
        fetch("http://www.omdbapi.com/?apikey=77b02eca&s=" + SearchParam,{
            method:"GET",
        }).then(response=>{
            return response.text();
        }).then(result=>{
            setData(JSON.parse(result));
        })
    },[SearchParam])

    //fetch one movie data from the server
    useEffect(()=>{
        fetch("http://www.omdbapi.com/?apikey=77b02eca&i=" + MovieSelect,{
            method:"GET",
        }).then(response=>{
            return response.text();
        }).then(result=>{
            setMovieData(JSON.parse(result));
        })
    },[MovieSelect])
    
    var resultContainer
    if(Data.Search){
        resultContainer = (
            <div className = "Result_container">
                    {Data.Search.map((element)=>{
                        return (<Result 
                            title = {element.Title} 
                            year = {element.Year} 
                            url = {element.Poster} 
                            key = {element.imdbID} 
                            id = {element.imdbID}
                            click = {resultClickHandler}
                            />)
                    })}}
                </div>
        )
    }else{
        resultContainer = (<NoContent />)
    }
 
      
    return (
        <div className = "Container">
            <MovieCard data = {MovieData} show = {MovieSelect} click = {backdropClickHandler}/>
            <SearchBar handler = {searchHandler} />
            {resultContainer}
            


        </div>
    )
   
    
}

export default Container;