import React from "react";
import Header from "./Header/Header";
import NewReleases from "./NewReleases/NewReleases"
import PreOrder from "./PreOrder/PreOrder";
import Services from "./Services/Services";

const Home = ( ) => {
 
 return (
    <div className="homeContainer">
      <Header />
      <NewReleases />
      <PreOrder />
      <Services />
      {/* <Novedades /> */}
    </div>
  );
};

export default Home;