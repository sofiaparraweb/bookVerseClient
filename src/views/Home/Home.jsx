import React from "react";
import Header from "./Header/Header";
import NewReleases from "./NewReleases/NewReleases"
import PreOrder from "./PreOrder/PreOrder";
import Services from "./Services/Services";
import Suscription from "./Suscription/Suscription";
import { useEffect } from 'react';
import { Link } from "react-router-dom";
import { createUser, getUser, getUserId } from "../../Redux/actions.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux'


const Home = ( ) => {
  const dispatch = useDispatch();
    const { user, isAuthenticated, isLoading } = useAuth0();
    const userInfo = useSelector(state => state.LocalPersist.userInfo?.id);
    console.log(userInfo)
    const isProfileCreatedRef = useRef(false);
  
    useEffect(() => {
      if (isAuthenticated && user && !isProfileCreatedRef.current) {
        const newUser = {
          fullName: user.name,
          mail: user.email,
        };
        dispatch(createUser(newUser));
        isProfileCreatedRef.current = true;
      }
    }, [dispatch, isAuthenticated, user]);
  
    useEffect(() => {
      if (isAuthenticated && user && isProfileCreatedRef.current) {
        dispatch(getUser(user.userId));
        dispatch(getUserId(user.email));
        console.log(user.email);
      }
    }, [dispatch, isAuthenticated, user]);
  
    const handleClick = () => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };
  
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
    <div className="homeContainer">
      <Header />
      <NewReleases />
      <PreOrder />
      <Services />
      <Suscription />
      {/* <Novedades /> */}
    </div>
  );
};

export default Home;

// import { useDispatch, useSelector } from "react-redux";
// import { useEffect } from 'react';
// import LastNews from "../../components/News/HeaderNews/LastNews";
// import { Link } from "react-router-dom";
// import style from "./Home.module.css";
// import DonaHome from "./DonaHome/Dona";
// import SePadrinoHome from "./SePadrino/SePadrino";
// import FotosSlider from "./FotosSlider/FotosSlider";
// import Headerslider from "./FotosSlider/HeaderSlider";
// import lagruta from '../../assets/lagruta.png';
// import PedirInfo from './Informacion/informacion';
// import { getAllActivity, createProfile, getProfile, getUserId } from "../../Redux/actions.jsx";
// import { useAuth0 } from "@auth0/auth0-react";
// import { useRef } from 'react';
// import logo from "../../assets/logo.png";

// const Home = () => {
//   const dispatch = useDispatch();
//   const { user, isAuthenticated, isLoading } = useAuth0();
//   const allActivity = useSelector(state => state.LocalPersist.allActivity);
//   const userInfo = useSelector(state => state.LocalPersist.userInfo?.id);
//   console.log(userInfo)
//   const isProfileCreatedRef = useRef(false);

//   useEffect(() => {
//     if (isAuthenticated && user && !isProfileCreatedRef.current) {
//       const newUser = {
//         fullName: user.name,
//         mail: user.email,
//       };
//       dispatch(createProfile(newUser));
//       isProfileCreatedRef.current = true;
//     }
//   }, [dispatch, isAuthenticated, user]);

//   useEffect(() => {
//     if (isAuthenticated && user && isProfileCreatedRef.current) {
//       dispatch(getProfile(user.userId));
//       dispatch(getUserId(user.email));
//       console.log(user.email);
//     }
//     dispatch(getAllActivity());
//   }, [dispatch, isAuthenticated, user]);

//   const handleClick = () => {
//     window.scrollTo({ top: 0, behavior: 'smooth' });
//   };

//   if (isLoading) {
//     return (
//       <div className="loading-container">
//         <img
//           src={logo}
//           alt="Loading..."
//           className="loading-image"
//         />
//       </div>
//     );
//   }

//   return (
//     <div>
//       <div className={style.Home}>
//         <Headerslider />
//         <div className="imageHomeContainer">
//           <img src={lagruta} alt="lagruta" />
//         </div>
//         <FotosSlider />
//         <p className={style.frase}>“Los científicos dicen que estamos hechos de átomos, pero un pajarito me contó que estamos hechos de historias”</p>
//         <p className={style.frase}>Eduardo Galeano</p>
//         <div className={style.RecuadrosContainer}>
//           <div className={style.BgImage} />
//           <div className={style.GridContainer}>
//             <div className={style.GridItem}>
//               <DonaHome />
//             </div>
//             <div className={style.GridItem}>
//               <SePadrinoHome />
//             </div>
//           </div>
//         </div>
//         <PedirInfo />
//         <div className={style.NoticiasContenedor}>
//           <LastNews className={style.Noticias} allActivity={allActivity} />
//           <Link to="/noticias" className={style.BotonMasNoticias} onClick={handleClick}>Ver más noticias</Link>
//         </div>
//         <div className={style.UbicacionContenedor}>
//           <h3 className={style.UbicacionUbicacion}>Ubicacion</h3>
//           <iframe
//             src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d1310.9655359480112!2d-65.18791653816835!3d-26.866093637318254!3m2!1i1024!2i768!4f13.1!5e1!3m2!1ses!2sar!4v1687909792362!5m2!1ses!2sar"
//             width="100%"
//             height="350"
//             className={style.MapaUbicacion}
//             allowFullScreen=""
//             loading="lazy"
//             referrerPolicy="no-referrer-when-downgrade"
//           ></iframe>
//           <div className={style.ContenedorTextoUbicacion}>
//             <p>- El Barrio A. Los Vallistos es un asentamiento que pertenece al Municipio de La Banda del Río Salí.</p>
//             <p>- Se encuentra ubicado en el conurbano de la ciudad de San Miguel de Tucumán, bajo el empalme con Ruta 302.</p>
//             <p>- El barrio se localiza a la vera del Río Salí y contiguo a la planta del ex basural municipal Pacará Pintado.</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Home;
