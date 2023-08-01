import { useState } from 'react'
//import './App.css'

import React from 'react'
import {useAuth0} from "@auth0/auth0-react"
import { ColorModeContext,useMode } from "./views/DashBoard/src/theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes,Route } from "react-router-dom";
import Topbar from './views/DashBoard/src/scenes/global/Topbar'
import Dashboard from "./views/DashBoard/src/scenes/dashboard";
import Sidebar from "./views/DashBoard/src/scenes/global/Side-bar"
import Team from './views/DashBoard/src/scenes/team'
import Contacts from './views/DashBoard/src/scenes/contacts'
import Invoices from './views/DashBoard/src/scenes/invoices'
import Form from './views/DashBoard/src/scenes/form'
import Calendar from "./views/DashBoard/src/scenes/calendar" 
import FAQ from './views/DashBoard/src/scenes/faq'
import Bar from './views/DashBoard/src/scenes/bar'
import Pie from './views/DashBoard/src/scenes/pie'
import Line from './views/DashBoard/src/scenes/line'
import Geography from './views/DashBoard/src/scenes/geography/index' 


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
import DashBoard1 from './views/DashBoard/src/DashBoard1';

const App = () => {
  const [count, setCount] = useState(0)
  const { isAuthenticated, isLoading } = useAuth0();
  
  
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
          <Route path="/dashboard1" element={<DashBoard1 />} />

          {/* RUTAS DASH */}
          <Route path='/' element={<Dashboard />}/>
        <Route path='/team' element={<Team />}/>
        <Route path='/contacts' element={<Contacts />}/>
        <Route path='/invoices' element={<Invoices />}/>
        <Route path='/form' element={<Form />}/>
        <Route path='/calendar' element={<Calendar />}/>
        <Route path='/faq' element={<FAQ />}/>
        <Route path='/bar' element={<Bar />}/>
        <Route path='/pie' element={<Pie />}/>
        <Route path='/line' element={<Line />}/>
        <Route path='/geography' element={<Geography />}/>

        </Routes>
        <Footer />
        
      </div>
    </>
  )
}

export default App;