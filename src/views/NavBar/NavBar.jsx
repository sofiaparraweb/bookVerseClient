import { useState, useEffect } from 'react';
import { NavLink, useLocation } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import bookVerse from "../../assets/imgNavbar/logoBook.svg";
import { BiSolidCartAdd, BiSolidUser, BiLogoShopify } from "react-icons/bi";
import iconbookclose from "../../assets/imgNavbar/iconbookclose.png";
import iconbookopen from "../../assets/imgNavbar/iconbookopen.png";
import { getCart } from "../../Redux/actions"
import style from "./NavBar.module.css";
import Swal from 'sweetalert2';

const NavBar = ({ isAuthenticated }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const { loginWithRedirect, logout, user } = useAuth0();
  const [isNavVisible, setIsNavVisible] = useState(false);
  const Cart = useSelector((state) => state.LocalPersist.cart);
  const user_id = useSelector((state) => state.LocalPersist.userProfile?.id);
  const isWishlistPage = location.pathname === '/wishlist';
  const isDashboardPage = location.pathname === '/dashboard1';

  const handleLoginAlert = () => {
    Swal.fire({
      icon: 'error',
      title: 'You need to log in to access this function.',
      background: '#f3f3f3',
      confirmButtonColor: '#B9362C',
      customClass: {
        title: 'my-custom-title',
        content: 'my-custom-content',
        confirmButton: 'my-custom-button',
      },
    });
  };  

  const toggleNavbar = () => {
    setIsNavVisible(!isNavVisible);
  };

  const handleLogout = () => {
    logout({ returnTo: window.location.origin });
    localStorage.removeItem('persist:root')
    console.log()
  };

  const handleLogin = () => {
    loginWithRedirect({ appState: { targetUrl: "/perfil" } }); 
  };

  // useEffect(() => {
  //   dispatch(getCart(user_id));
  // }, [user_id]);
  
  const handleClick = () => {
    window.scrollTo({ top: 0 });
  };

  const isAdmin = isAuthenticated && user.email === "bookverseweb@gmail.com";
  
  if (isDashboardPage) {
    return null; // No renderiza nada si estás en la página del panel de control
  }

  return (
    <>
      <nav className={style.navContainer}>
        <div className={style.buttonsNav}>
          <NavLink to="/">
            <img
              src={bookVerse}
              alt="logo"
              className={style.linkNavBar}
              onClick={handleClick}
            />
          </NavLink>
          <NavLink to="/qa" className={style.linkNavBar} id="tiendaNav" onClick={handleClick}>
            Q&A
          </NavLink>
          <NavLink to="/store" className={style.linkNavBar} id="tiendaNav" onClick={handleClick}>
            OUR BOOKS
          </NavLink>
          {isAuthenticated && !isAdmin ? (
            <NavLink to="/profile" className={style.linkNavBar} id="perfilNav" onClick={handleClick}>
              PROFILE
            </NavLink>
          ) : null}
         {isAuthenticated && isAdmin && (
          <NavLink to="/dashboard1" className={style.linkNavBar} id="administradorNav" onClick={handleClick}>
            DASHBOARD
          </NavLink>
         )}
        </div>
        <div className={style.rightSection}>
          {isAuthenticated ? (
            <div className={style.linkNavBar} id="tiendaNav" style={{ cursor:"pointer" }}>
              <button onClick={handleLogout} style={{ fontWeight: "500", border: "none", backgroundColor: "transparent", cursor:"pointer"}}> LOG OUT </button>
            </div>
          ) : (
            <button onClick={handleLogin} className={style.linkNavBar} style={{ border: "none", backgroundColor: "transparent" }}>
              <BiSolidUser className={style.IconRightNavBar} />
            </button>
          )}
          {isAuthenticated ? (
            <>
              <div className={style.cartNavContainer}>
                <NavLink to="/cart">
                  <BiSolidCartAdd className={style.IconRightNavBar} />
                  <p className={style.NumeroChango}>{Cart.Books?.length || 0}</p> 
                </NavLink>
              </div>
              <div className={style.wishlistNav}>
                <NavLink to="/wishlist" style={{ textDecoration: "none", color: "#17424b", textAlign: "center" }}>
                  {isWishlistPage ? (
                    <img src={iconbookopen} className={style.IconRightNavBar} alt="open" id="OpenBook" />
                  ) : (
                    <img src={iconbookclose} alt="close" className={style.IconRightNavBar} />
                  )}
                  <p style={{ fontSize: "0.8rem" }}>Wishlist</p>
                </NavLink>
              </div>
            </>
          ) : (
            <>
              <button onClick={handleLoginAlert} style={{ border: "none", backgroundColor: "transparent" }}>
                <BiSolidCartAdd className={style.IconRightNavBar} />
              </button>
              <div className={style.wishlistNav}>
                <button onClick={handleLoginAlert} style={{ border: "none", backgroundColor: "transparent" }}>
                  <img src={iconbookclose} alt="close" className={style.IconRightNavBar} />
                </button>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default NavBar;




