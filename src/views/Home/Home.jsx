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
          name: user.name,
          email: user.email,
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
