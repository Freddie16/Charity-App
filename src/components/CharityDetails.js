import React from 'react'

function CharityDetails({details, handleClick}) {

  
    
    return (
    <div onClick={handleClick}>
    <img  src={details.logoUrl} alt="" />
    <p>{details.mission}</p>
    <h4>Themes</h4>
    <p>{details.themes.theme.map((theme)=>{
            return(<ul style={{ display: "inline-block", listStyleType:"none" }}> 
              <li>{theme.name}</li>
            </ul>)
          })}</p>
   
    <p> Total projects : {details.totalProjects}</p>
    <p> Active projects : {details.activeProjects}</p>
    <a href={details.url} target="_blank"><button className='button'> Donate </button></a>
    
      
    
    </div>
  )
}

export default CharityDetails