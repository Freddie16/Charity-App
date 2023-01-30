import React from "react";
import CharityDetails from "./CharityDetails";
import { useState } from "react";

function CharityData({ organizations }) {
  const [addedDetails, setAddedDetails] = useState(false);

  //Function to render additional details about an organization

  function handleClick() {
    setAddedDetails(!addedDetails);
  }

 
    return (
      <div className="charity-data" onClick={handleClick}>
        
        
           
      <div>
      
      <h2 onClick={handleClick}>{organizations.name}</h2>
      <p>{organizations.country}</p>
          
          {addedDetails ? <CharityDetails details={organizations} handleClick= {handleClick} /> : ""}
      </div>
         
        
      </div>
    );
  

  
 
}

export default CharityData;