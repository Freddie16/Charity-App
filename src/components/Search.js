import React from "react";
import '../App.css'

const Search = ({keyword, onChange}) => {
    const BarStyle = {width:"20rem",background:"#F0F0F0", border:"solid", padding:"0.5rem"};
    return (
      <input 
       style={BarStyle}
       key="search-bar"
       value={keyword}
       placeholder={"SEARCH FUND"}
       onChange={(e) => onChange(e.target.value)}
      />
    );
  }
  
  export default Search;