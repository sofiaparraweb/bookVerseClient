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
  const userInfo = useSelector((state) => state.LocalPersist.userInfo);
  const allbooks = useSelector((state) => state.LocalPersist.allbooks);
  const [isLoading, setIsLoading] = useState(false);
  const isProfileCreatedRef = useRef(false);

  useEffect(() => {
    if (isAuthenticated && user && !isProfileCreatedRef.current) {
      setIsLoading(true);
      // Verificar si el correo electrónico ya existe en la base de datos
      dispatch(getUserId(user.email))
        .then((existingUser) => {
          if (!existingUser) {
            // Si el correo electrónico no existe, crear el usuario en la base de datos
            const newUser = {
              name: user.name,
              email: user.email,
            };
            return dispatch(createUser(newUser));
          } else {
            // Si el correo electrónico ya existe, obtener el usuario
            return dispatch(getUser(existingUser.userId));
          }
        })
        .then(() => {
          setIsLoading(false);
        })
        .catch((error) => {
          setIsLoading(false);
          console.log(error);
        });

      isProfileCreatedRef.current = true;
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
