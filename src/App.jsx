import { useState } from 'react'
//import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
// import {useAuth0} from "@auth0/auth0-react"

// import Home from "./views/Home/Home";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Routes>
        <Route path="/" element={<NavBar/>} />
        {/* <Route path="/home" element={<Home />} /> */}
        <Route path="/footer" element={<Footer />} />
        </Routes>    
    </>
  )
}

export default App
