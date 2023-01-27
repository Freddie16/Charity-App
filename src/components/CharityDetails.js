import React from 'react'

function CharityDetails({details}) {

  
    
  return (
    <div>
    <h4>CharityDetails</h4>
    <p>{details.mission}</p>
    <h4>Themes</h4>
    <p>{details.themes.theme.map((theme)=>{
            return(<ul style={{ display: "inline-block", listStyleType:"none" }}> 
              <li>{theme.name}</li>
            </ul>)
          })}</p>
    <p>country : {details.country}</p>
    <p> Total projects : {details.totalProjects}</p>
    <p> Active projects : {details.activeProjects}</p>
    <a href={details.url}target="_blank" rel="noreferrer"><button className='button'> Donate </button></a>
    
      
    
    </div>
  )
}

export default CharityDetails