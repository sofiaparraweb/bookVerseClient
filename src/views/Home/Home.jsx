import React, { useEffect, useState } from "react";
import Header from "./Header/Header";
import NewReleases from "./NewReleases/NewReleases";
import PreOrder from "./PreOrder/PreOrder";
import Services from "./Services/Services";
import Suscription from "./Suscription/Suscription";
import { createUser, getUser, getUserId } from "../../Redux/actions.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch, useSelector } from "react-redux";
import { useRef } from 'react';

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const userProfile = useSelector((state) => state.LocalPersist.userProfile);
  const allbooks = useSelector((state) => state.LocalPersist.allbooks);
  const [isLoading, setIsLoading] = useState(false);
  const isProfileCreatedRef = useRef(false);

  // useEffect(() => {
  //   console.log(userProfile)
  //   if (isAuthenticated && user && userProfile==null) {
  //     console.log("se cumple primer if", user.email)
  //     dispatch(getUser(user.email));
  //     if (userProfile!==null) {
  //       isProfileCreatedRef = true;
  //     }
  //   } 
  //   if (isAuthenticated && user && !isProfileCreatedRef) {
  //     console.log("se cumple segundo if", user.email)
  //         const newUser = {
  //           name: user.name,
  //           email: user.email,
  //         };
  //         dispatch(createUser(newUser));
  //         isProfileCreatedRef = true;
  //       }
  // }, [dispatch, isAuthenticated, user, userProfile]);

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
      dispatch(getUser(user.email));
      dispatch(getUserId(user.email));
      console.log(user.email);
    }
  }, [dispatch, isAuthenticated, user]);
  
  return (
    <div className="homeContainer">
      <Header />
      <NewReleases allbooks={allbooks}/>
      <PreOrder />
      <Services />
      <Suscription />
    </div>
  );
};

export default Home;
