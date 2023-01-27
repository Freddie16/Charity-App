import React from 'react'
import CharityList from './CharityList'
import { Link } from 'react-router-dom'
import '../Homepage.css'
export default function HomePage() {
    return (
        
         <div className="Home">     
         <div className="text-left">
            <h1 className="main-title home-page-title">welcome to charity app</h1>

            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <Link to='/AboutUs'>ABOUT US</Link>
            <Link to = "/CharityList">PICK A CHARITY</Link>
            {/* <link to='/ContactUs'>CONTACT US</link> */}


        </div>
        
        </div>
    
    )
}
