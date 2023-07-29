import { useState } from 'react'
//import './App.css'
import { Route, Routes } from 'react-router-dom'
import React from 'react'
import {useAuth0} from "@auth0/auth0-react"

import Home from "./views/Home/Home";
import NavBar from "./views/NavBar/NavBar";
import Footer from "./views/Footer/Footer";
import Store from "./views/Store/Store";
import BookDetail from "./views/Detail/BookDetail";
import CartContainer from "./components/Store/CartContainer/CartContainer"
import Profile from './views/Profile/Profile';
import Qa from './views/Q&A/Q&A';
import WishlistItem from "./components/WishlistContainer/WishlistContainer";
import Confirmation from "./views/Confirmation/Confirmation"

const App = () => {
  const [count, setCount] = useState(0)
  const { isAuthenticated, isLoading } = useAuth0();
  
    // if (isLoading) {
    //   return (
    //     <div className="loading-container">
    //       <img
    //         src={logo}
    //         alt="Loading..."
    //         className="loading-image"
    //       />
    //     </div>
    //   );
    // }
  
  return (
    <>
      <div className='App'>
        <NavBar isAuthenticated={isAuthenticated} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/qa" element={<Qa/>}/>
          <Route path="/store" element={<Store />} />
          <Route path="/detail/:id" element={<BookDetail />} /> 
          <Route path="/cart" element={<CartContainer />} /> 
          <Route path="/wishlist" element={<WishlistItem />} /> 
          <Route path="/profile" element={<Profile />} />
          <Route path="/confirmation" element={<Confirmation />} />
        </Routes>
        <Footer />
      </div>
    </>
  )
}

export default App;