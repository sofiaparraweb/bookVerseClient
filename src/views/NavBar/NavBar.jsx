import { useState} from "react";
import { NavLink, useLocation  } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import bookVerse from "../../assets/imgNavbar/logoBook.svg";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import style from "./NavBar.module.css";
import { BiSolidCartAdd, BiSolidUser, BiLogoShopify } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import iconbookclose from "../../assets/imgNavbar/iconbookclose.png"
import iconbookopen from "../../assets/imgNavbar/iconbookopen.png"
import Profile from '../../views/Profile/Profile'


const NavBar = ({ isAuthenticated }) => {

  const location = useLocation();
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);
  
  const isWishlistPage = location.pathname === '/wishlist';

  const handleLoginAlert = () => {
    alert('You need to log in to access this function.');
  };

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { targetUrl: "/perfil" } });
    setIsLoggingIn(true);
  };

  // const handleMouseEnter = () => {
  //   setIsHovered(true);
  // };

  // const handleMouseLeave = () => {
  //   setIsHovered(false);
  // };

  // const handleOptionMouseEnter = () => {
  //   setIsOptionHovered(true);
  // };

  // const handleOptionMouseLeave = () => {
  //   setIsOptionHovered(false);
  // };

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  const isAdmin = isAuthenticated && user.email === "bookverseweb@gmail.com";
  return (
    <>
      <nav className={style.navContainer} >
        <div className={style.LeftSection}>
          <NavLink to="/">
            <img
              src={bookVerse}
              alt="logo"
              className={style.logoNavBar}
              onClick={handleClick}
            />
          </NavLink>

            <NavLink
              to="/qa" // Ruta a la que redirige el enlace
              className={style.linkNavBar}
              id="tiendaNav"
              onClick={handleClick}
            >
              Q&A
            </NavLink>

            <NavLink
              to="/store"
              className={style.linkNavBar}
              id="tiendaNav"
              onClick={handleClick}
            >
              OUR BOOKS
            </NavLink>

            {isAuthenticated ? (
              <NavLink
                to="/profile"
                className={style.linkNavBar}
                id="perfilNav"
                onClick={handleClick}
              >
                PROFILE
              </NavLink>
            ) : null}
            {isAdmin && (
              <NavLink
                to="/dashboard"
                className={style.linkNavBar}
                id="administradorNav"
                onClick={handleClick}
              >
                DASHBOARD
              </NavLink>
            )}
        </div>
        <div className={style.rightSection}>
          {isAuthenticated ? (
            <div className={style.linkNavBar} id="tiendaNav" >
              <button onClick={handleLogout} style={{ fontWeight:"500", border:"none", backgroundColor:"transparent"}}> LOG OUT </button>
            </div>
          ) : (
            <button onClick={handleLogin} className={style.linkNavBar} style={{ border:"none", backgroundColor:"transparent"}}>
              <BiSolidUser className={style.IconRightNavBar} /> 
            </button>
          )}
          {isAuthenticated ? (  
            <>
            <NavLink to="/cart">
              <BiSolidCartAdd className={style.IconRightNavBar}/>
            </NavLink>
            <div><Profile></Profile></div>

            <div className={style.wishlistNav}>
              <NavLink to="/wishlist" style={{ textDecoration: "none", color: "#17424b", textAlign:"center" }}>
                {isWishlistPage ? (
                  <img src={iconbookopen} className={style.IconRightNavBar} alt="open" id="OpenBook"/>
                ) : (  
                  <img src={iconbookclose} alt="close" className={style.IconRightNavBar} />
                )}
                <p style={{ fontSize:"0.8rem" }}>Wishlist</p>
              </NavLink>
            </div>
            </>
          ) : (  
            <>
            <button onClick={handleLoginAlert} style={{border:"none", backgroundColor:"transparent"}}>
              <BiSolidCartAdd className={style.IconRightNavBar}/>
            </button>
            <div className={style.wishlistNav}>
              <button onClick={handleLoginAlert} style={{border:"none", backgroundColor:"transparent"}}>
                <img src={iconbookclose} alt="close" className={style.IconRightNavBar}/>
                <p style={{ fontSize:"0.8rem" }}>Wishlist</p>
              </button>
            </div>
            </>
          )}
        </div>
        {/* <button
          className={`${style["nav-btn"]} ${style["nav-close-btn"]}`}
          onClick={showNavbar}
        >
          <FaTimes />
        </button> */}
      </nav>
      {/* <button className={style["nav-btn"]} onClick={toggleNavbar}>
        <FaBars />
      </button> */}
    </>
  );
};

export default NavBar;





