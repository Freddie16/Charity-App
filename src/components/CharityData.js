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
      <div className="charity-data">
        
          
            <img onClick={handleClick} src={organizations.logoUrl} alt="" />
      
          <h2 onClick={handleClick}>{organizations.name}</h2>
          
          {addedDetails ? <CharityDetails details={organizations} /> : ""}
        
      </div>
    );
  

  
 
}

export default CharityData;
