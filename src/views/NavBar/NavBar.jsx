import { useState} from "react";
import { Link, NavLink, useLocation  } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import bookVerse from "../../assets/imgNavbar/logoBook.svg";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import style from "./NavBar.module.css";
import { BiSolidCartAdd, BiSolidUser, BiLogoShopify } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";
import iconbookclose from "../../assets/imgNavbar/iconbookclose.png"
import iconbookopen from "../../assets/imgNavbar/iconbookopen.png"


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

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleOptionMouseEnter = () => {
    setIsOptionHovered(true);
  };

  const handleOptionMouseLeave = () => {
    setIsOptionHovered(false);
  };

  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  const isAdmin = isAuthenticated && user.email === "bookverseweb@gmail.com";
  return (
    <>
      <nav className={style.navContainer} >
        <div className={style.LeftSection}>
          <Link to="/">
            <img
              src={bookVerse}
              alt="logo"
              className={style.logoNavBar}
              onClick={handleClick}
            />
          </Link>

          <div className={style.dropdownContainer}>
            <NavLink
              to="/about" // Ruta a la que redirige el enlace
              className={style.link}
              activenlassname="active"
              id="conocenosNav"
            >
              ABOUT US
            </NavLink>

            {/* {(isHovered || isOptionHovered) && (
              <div
                className={style.dropdownContent}
                onMouseEnter={handleOptionMouseEnter}
                onMouseLeave={handleOptionMouseLeave}
              >
                <div className={style.sectionOption}>
                  <NavLink
                    to="/historia"
                    className={style.dropdownOption}
                    activenlassname="active"
                    id="nuestraHistoria"
                    onClick={handleClick}
                  >
                    POPULARS
                  </NavLink>
                </div>
              </div>
            )} */}
          </div>
          <NavLink
            to="/store"
            className={style.link}
            activeclassname="active"
            id="tiendaNav"
            onClick={handleClick}
          >
            OUR BOOKS
          </NavLink>

          {isAuthenticated ? (
            <NavLink
              to="/profile"
              className={`${style.linkContainer} ${style.link}`}
              activenlassname={style.activeLink}
              id="perfilNav"
              onClick={handleClick}
            >
              PROFILE
            </NavLink>
          ) : null}
          {isAdmin && (
            <NavLink
              to="/dashboard"
              className={`${style.linkContainer} ${style.link}`}
              activeclassname={style.activeLink}
              id="administradorNav"
              onClick={handleClick}
            >
              DASHBOARD
            </NavLink>
          )}
        </div>
        <div className={style.rightSection}>
          {isAuthenticated ? (
            <button
              onClick={handleLogout}
              className={style.link}
              id="conocenosNav"
              style={{border:"none", backgroundColor:"transparent", cursor:"pointer"}}
              onMouseEnter={(e) => e.target.style.backgroundColor = "silver"}
              onMouseLeave={(e) => e.target.style.backgroundColor = "transparent"}
            >
              LOG OUT
            </button>
          ) : (
            <button
              onClick={handleLogin}
              className={style.link}
              style={{border:"none", backgroundColor:"transparent"}}
            >
              <BiSolidUser 
                className='iconPerson' 
                style={{color: "#17424b", width:"1.4rem", height:"1.4rem", margin:"0 2rem", transition: "transform 0.3s"}}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}/> 
            </button>
          )}
          {isAuthenticated ? (  
            <>
            <NavLink to="/cart">
              <BiSolidCartAdd 
                style={{color: "#17424b", width:"1.6rem", height:"1.6rem", margin:"0 2rem", transition: "transform 0.3s"}}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}/>
            </NavLink>

            <div className="wishlistNav">
              <NavLink to="/wishlist" style={{ textDecoration: "none", color: "#17424b", textAlign:"center" }}>
                {isWishlistPage ? (
                  <img src={iconbookopen} alt="open" style={{width:"1.8rem", height:"1.8rem", margin:"0 2rem", transition: "transform 0.3s"}}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}/>
                ) : (  
                  <img src={iconbookclose} alt="close" style={{width:"1.6rem", height:"1.6rem", margin:"0 2rem", transition: "transform 0.3s"}}
                    onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                    onMouseLeave={(e) => e.target.style.transform = "scale(1)"}/>
                )}
                <p style={{ fontSize:"0.8rem" }}>Wishlist</p>
              </NavLink>
            </div>
            </>
          ) : (  
            <>
            <button onClick={handleLoginAlert} style={{border:"none", backgroundColor:"transparent"}}>
              <BiSolidCartAdd style={{color: "#17424b", width:"1.6rem", height:"1.6rem", margin:"0 2rem", transition: "transform 0.3s"}}
                onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                onMouseLeave={(e) => e.target.style.transform = "scale(1)"}/>
            </button>
            <div className="wishlistNav">
              <button onClick={handleLoginAlert} style={{border:"none", backgroundColor:"transparent"}}>
                <img src={iconbookclose} alt="close" style={{width:"1.6rem", height:"1.6rem", margin:"0 2rem", transition: "transform 0.3s"}}
                  onMouseEnter={(e) => e.target.style.transform = "scale(1.2)"}
                  onMouseLeave={(e) => e.target.style.transform = "scale(1)"}/>
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





