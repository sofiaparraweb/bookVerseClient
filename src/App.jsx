import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

import Home from "./views/Home/Home";
// import NavBar from "./views/NavBar/NavBar";
// import Footer from "./views/Footer/Footer";
import Store from "./views/Store/Store";
import BookDetail from "./views/Detail/BookDetail";

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='App'>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/detail/:detailId" element={<BookDetail />} />
          {/* <Route path="/home" element={<Home />} />
          <Route path="/" element={<Footer />} /> */}
        </Routes>
      </div>
    </>
  )
}

export default App;
