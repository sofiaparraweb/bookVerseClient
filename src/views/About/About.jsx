import React from "react";
import style from "./About.module.css";
import Equipo from "./Equipo/Equipo";
import imgabout from "../../assets/imgGral/sobreNosotros.webp"


const About = () => {
  return (
    <div className={style.container}>
      <header className={style.headerAboutLaGruta}>
        <h1>Sobre Nosotros</h1>
        <p>Un espacio para construir juntos</p>
      </header>
      <img
            src={imgabout}
            alt="logo"
            className={style.imgBV}
          />
      <div className={style.TextoAbout}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus eget elementum quam. 
          Etiam et urna vitae ex faucibus facilisis ac ac neque. 
          Suspendisse potenti. Nullam quis tellus sed risus malesuada euismod. 
          In sit amet sem vel purus efficitur laoreet. 
          Quisque malesuada euismod nulla, in sagittis arcu vulputate eu. 
          Sed facilisis lectus eu dui fringilla, a posuere lorem facilisis. 
          Nullam elementum nec justo ut fermentum. 
          Cras tincidunt consectetur odio nec vestibulum. 
          Maecenas blandit, libero vel ullamcorper congue, ligula lacus sodales odio, vitae congue mi erat a ligula. 
          Maecenas maximus, odio id posuere convallis, purus tellus euismod ligula, eget euismod libero risus et eros. Sed nec risus ultricies, tincidunt orci nec, sollicitudin odio. Mauris nec semper metus.
        </p>
      </div>
      <Equipo />
    </div>
  );
};

export default About;