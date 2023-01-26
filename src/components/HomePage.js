import React from 'react'
import { Link } from 'react-router-dom'
//import ContactUs from './ContactUs'
export default function HomePage() {
    return (
        <>
         <div>     
         <div className="text-left">
            <h1 className="main-title home-page-title">welcome to charity app</h1>

            <Link to="/">
                <button className="primary-button">Log out</button>
            </Link>
            <Link to='/AboutUs'>ABOUT US</Link>
            {/* <link to='/ContactUs'>CONTACT US</link> */}


        </div>
        
        </div>
    </>
    )
}
