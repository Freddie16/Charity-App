import React from "react";
import CharityList from "./CharityList";
import { Link } from "react-router-dom";
//import ContactUs from './ContactUs'
export default function HomePage() {
  return (
    <>
      <div>
        <div className="navbar">
          <Link to="/AboutUs">About Us </Link>
          <Link to="/">
            <button className="primary-button">Log Out</button>
          </Link>
        </div>
        <div className="heading">
          <h1 className="main-title home-page-title">welcome to charity app</h1>

          {/* <link to='/ContactUs'>CONTACT US</link> */}
        </div>
        <div>
        <h2>Pick a Charity</h2>
          <CharityList />
        </div>
      </div>
    </>
  );
}
