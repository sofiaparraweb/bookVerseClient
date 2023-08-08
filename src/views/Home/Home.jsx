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
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated } = useAuth0();
  const userProfile = useSelector((state) => state.LocalPersist.userProfile);
  const allbooks = useSelector((state) => state.LocalPersist.allbooks);
  const [isProfileCreated, setIsProfileCreated] = useState(false);

  const url = "https://bookverse-m36k.onrender.com";
//  const url = "http://localhost:3001";

  useEffect(() => {
    if (isAuthenticated && user && !isProfileCreated) {
      // Primero veo si el usuario ya existe en la bdd
      axios.get(`${url}/user/email/${user.email}`)
        .then(response => {
          const existingUser = response.data;
          if (!existingUser) {
            // Si el usuario no existe en el back crea el perfil
            const newUser = {
              name: user.name,
              email: user.email,
            };
            dispatch(createUser(newUser))
            .then(() => {
              // LCuando ya esta creado lo traigo asi se ponene los datos en el userprfoile/useriD
              dispatch(getUser(user.email));
              dispatch(getUserId(user.email));
              setIsProfileCreated(true);
            })
            .catch(error => {
              console.log(error);
            });
        } else {
          // Si el usuario ya existe traigo los datitos
          dispatch(getUser(user.email));
          dispatch(getUserId(user.email));
          setIsProfileCreated(true);
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
}, [dispatch, isAuthenticated, user, isProfileCreated]);

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
