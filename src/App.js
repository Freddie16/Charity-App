import React from 'react'
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom'

import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import RegisterPage from './components/RegisterPage'
import ForgetPasswordPage from './components/ForgetPasswordPage'
import HomePage from './components/HomePage'
import CharityList from "./components/CharityList"

import './App.css'
import AboutUs from './components/AboutUs'

export default function App() {
    return (
    <>
        <Router>
            <div>
                <Routes>
                    <Route path="/" element={ <LandingPage/> } />
                    <Route path="/login" element={ <LoginPage/> } />
                    <Route path="/register" element={ <RegisterPage />} />
                    <Route path="/forget-password" element={ <ForgetPasswordPage />} />
                    <Route path="/home" element={< HomePage/> } />
                    <Route path="/AboutUs" element={< AboutUs/> } />
                    <Route path='/CharityList'element={< CharityList/>} />
                    
                        
                    
             





                </Routes>
                <Footer />
            </div>
        </Router>
        </>
    )
}

const Footer = () => {
    return (
        <p className="text-center" style={ FooterStyle }><b>charity app</b></p>
    )
}

const FooterStyle = {
    background: "#222",
    fontSize: ".8rem",
    color: "#fff",
    position: "absolute",
    bottom: 0,
    padding: "1rem",
    margin: 0,
    width: "100%",
    opacity: ".5"
}