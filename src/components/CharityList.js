

import { useEffect, useState } from "react";
import React from "react";
import CharityData from "./CharityData";


//Function to fetch data from server

function CharityList() {
  const url = "http://localhost:5000/organizations";
  const [organizations, setOrganizations] = useState([]);

  useEffect(() => {
     fetch(url)
     .then((response) => response.json())
     .then((data) => {setOrganizations(data.organization)})
      console.log(organizations)
    }, );


  return (
    <div>
    
      <h2>CharityList</h2>
     <ul> {organizations?.map((org) => (
      <CharityData key = {org.id} organizations= {org}/>
      ))}
      </ul>
      </div>
    
  )
}

export default CharityList;
