import { useState, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import logoBook from "../../assets/imgNavbar/logoBook.svg";
//import {HamburgerIcon} from '@chakra-ui/icons'
import style from "./NavBar.module.css";
import SearchBar from "../../components/searchBar/SearchBar";
import {BiSolidCartAdd, BiSolidUser, BiLogoShopify} from "react-icons/bi"
import { FaBars, FaTimes } from "react-icons/fa";



const NavBar = ({ isAuthenticated }) => {
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isHovered, setIsHovered] = useState(false);
  const [isOptionHovered, setIsOptionHovered] = useState(false);
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [isNavVisible, setNavVisible] = useState(false);
  const navRef = useRef();

  const showNavbar = () => {
    setNavVisible(!isNavVisible);
  };
 
  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { targetUrl: "/" } });
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
    <header className={style.header}>
    <nav className={style.navContainer} ref={navRef}>
      <div className={style.LeftSection}>
        {/* <h1 style={{color: "#000804", margin: "50px"}}>Logo BookVerse</h1> */}
        <Link to="/">
          <img
            src={logoBook}
            alt="logo"
            className={style.logoNavBar}
            onClick={handleClick}
          />
        </Link>

        <div className={style.dropdownContainer}>
          <div
            className={`${style.link} ${isHovered ? "active" : ""}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            id="conocenosNav">
            Conocenos
          </div>
          {(isHovered || isOptionHovered) && (
           
            <div
              className={style.dropdownContent}
              onMouseEnter={handleOptionMouseEnter}
              onMouseLeave={handleOptionMouseLeave}>
                 <div className={style.sectionOption}>
              <NavLink
                to="/about"
                className={style.dropdownOption}
                activeclassname="active"
                id="nosotros"
                onClick={handleClick}>
                Novedades
              </NavLink>
              <NavLink
                to="/historia"
                className={style.dropdownOption}
                activeclassname="active"
                id="nuestraHistoria"
                onClick={handleClick}>
                Listas Populares
              </NavLink>
              <NavLink
                to="/equipo"
                className={style.dropdownOption}
                activeclassname="active"
                id="nuestroEquipoNav"
                onClick={handleClick}>
                Nuestro Equipo
              </NavLink>
            </div>
            </div>
          )}
        </div>
        

        <NavLink
          to="/noticias"
          className={style.link}
          activeclassname="active"
          id="noticiasNav"
          onClick={handleClick}>
          Noticias
        </NavLink>
        <NavLink
          to="/store"
          className={style.link}
          activeclassname="active"
          id="tiendaNav"
          onClick={handleClick}>
          <BiLogoShopify/> Tienda
        </NavLink>

        <SearchBar/>

        {isAuthenticated ? (
          <NavLink
            to="/profile"
            className={`${style.linkContainer} ${style.link}`}
            activeClassName={style.activeLink}
            id="perfilNav"
            onClick={handleClick}>
            Profile
          </NavLink>
        ) : null}
        {isAdmin && (
          <NavLink
            to="/dashboard"
            className={`${style.linkContainer} ${style.link}`}
            activeClassName={style.activeLink}
            id="administradorNav"
            onClick={handleClick}
          >
            Administrador
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
            Cerrar Sesión
          </button>
        ) : (
          <button
            onClick={handleLogin}
            id="cerrariniciarNav"
            className={`${style.buttonContainer} ${style.link} ${isLoggingIn ? style.loggingIn : style.loginButton}`}>
            <BiSolidUser/> Iniciar sesión 
          </button>
        )}
        <h1 style={{color: "#000804", margin: "20px", textAlign: "center"}}><BiSolidCartAdd/></h1>
        
					
      </div>
      <button
			className={`${style['nav-btn']} ${style['nav-close-btn']}`}
			onClick={showNavbar}>
			<FaTimes />
		</button>
        
    </nav>
    <button
			className={style['nav-btn']}
			onClick={showNavbar}>
			<FaBars />
		</button>
    </header>
  );
};

export default NavBar;



// import { useRef } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import "./NavBar.css";

// function NavBar() {
// 	const navRef = useRef();

// 	const showNavbar = () => {
// 		navRef.current.classList.toggle(
// 			"responsive_nav"
// 		);
// 	};

// 	return (
// 		<header>
// 			<h3>LOGO</h3>
// 			<nav ref={navRef}>
// 				<a href="/#">Home</a>
// 				<a href="/footer">My work</a>
// 				<a href="/#">Blog</a>
// 				<a href="/#">About me</a>
// 				<button
// 					className="nav-btn nav-close-btn"
// 					onClick={showNavbar}>
// 					<FaTimes />
// 				</button>
// 			</nav>
// 			<button
// 				className="nav-btn"
// 				onClick={showNavbar}>
// 				<FaBars />
// 			</button>
// 		</header>
// 	);
// }

// export default NavBar;

