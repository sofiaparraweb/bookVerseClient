import { useState} from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import bookVerse from "../../assets/imgNavbar/logoBook.svg";
import {HamburgerIcon, CloseIcon} from '@chakra-ui/icons'
import style from "./NavBar.module.css";
import { BiSolidCartAdd, BiSolidUser, BiLogoShopify } from "react-icons/bi";
import { FaBars, FaTimes } from "react-icons/fa";

const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isNavVisible, setIsNavVisible] = useState(false);

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

  const isAdmin = isAuthenticated && user.email === "lagrutacdi@gmail.com";
  return (
    <>
      <nav className={style.navContainer} >
        <div className={style.LeftSection}>
          {/* <h1 style={{ color: "#000804", margin: "50px" }}>Logo BookVerse</h1> */}
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
            activeClassName="active"
            id="conocenosNav"
          >
            ABOUT US
          </NavLink>

            {(isHovered || isOptionHovered) && (
              <div
                className={style.dropdownContent}
                onMouseEnter={handleOptionMouseEnter}
                onMouseLeave={handleOptionMouseLeave}
              >
                <div className={style.sectionOption}>
                  <NavLink
                    to="/historia"
                    className={style.dropdownOption}
                    activeclassname="active"
                    id="nuestraHistoria"
                    onClick={handleClick}
                  >
                    POPULARS
                  </NavLink>
                </div>
              </div>
            )}
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

          {/* {isAuthenticated ? (
            <NavLink
              to="/profile"
              className={`${style.linkContainer} ${style.link}`}
              activeClassName={style.activeLink}
              id="perfilNav"
              onClick={handleClick}
            >
              PROFILE
            </NavLink>
          ) : null} */}
          {isAdmin && (
            <NavLink
              to="/dashboard"
              className={`${style.linkContainer} ${style.link}`}
              activeClassName={style.activeLink}
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
              id="cerrariniciarNav"
              className={`${style.buttonContainer} ${style.link} ${style.logoutButton}`}
            >
              LOG OUT
            </button>
          ) : (
            <button
              onClick={handleLogin}
              id="cerrariniciarNav"
              className={`${style.buttonContainer} ${style.link} ${
                isLoggingIn ? style.loggingIn : style.loginButton
              }`}
            >
              <BiSolidUser className='iconPerson' /> 
            </button>
          )}
          <h1 style={{ color: "#000804", margin: "20px", textAlign: "center" }}>
            <BiSolidCartAdd />
          </h1>
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





