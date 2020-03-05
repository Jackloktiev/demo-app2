import React, {useState} from "react";
import "./searchBar_style.css";

function SearchBar(props){
    const [searchData, setSearchData] = useState("");

    const searchBarChangehandler = (event)=>{
        event.preventDefault();
        setSearchData(event.target.value);
    }
    const searchClickHandler = (event)=>{
        event.preventDefault();
        if(searchData){
            props.handler(searchData);
        }
        setSearchData("");
        
    }
    return (
        <div className = "SearchBar">
            <form className = "Search-form">
                <input 
                    type = "search" 
                    value = {searchData}
                    onChange = {searchBarChangehandler}
                    placeholder = "Search for a movie..." 
                    className="Search_input" />
                <input 
                    type="submit"
                    className = "Search_button"
                    onClick = {searchClickHandler}
                    value = "Search"
                />
            </form>
        </div>
    )
}

export default SearchBar;