import React from 'react';
import  styles from "./Equipo.module.css";

const Equipo = () => {
  const members = [
    {
      id: 1,
      name: 'FEDE',
      position: 'BACKEND',
      description: 'Encargado de la parte técnica y desarrollo de la plataforma del comedor infantil. Responsable de asegurar el funcionamiento eficiente del sistema y de implementar mejoras en la infraestructura',
      image: 'https://img.freepik.com/foto-gratis/hombre-joven-guapo-nuevo-corte-pelo-estilo_176420-19636.jpg?w=2000',
    },
    {
        id: 2,
        name: 'GIAN',
        position: 'BACKEND ',
        description: 'Colaborador en el área de backend. Apoya en el desarrollo de funcionalidades y en la resolución de problemas técnicos. Siempre dispuesto a ayudar y colaborar con el equipo',
        image: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
      },
      {
        id: 3,
        name: 'FIDEL',
        position: 'FRONT',
        description: 'Colaboradora en el área de front-end. Apoya en el desarrollo de la interfaz de usuario y en la implementación de nuevas funcionalidades. Se enfoca en la creación de un panel de control intuitivo y eficiente',
        image: 'https://img.freepik.com/foto-gratis/cierrese-encima-retrato-cara-joven-hombre-barbudo_171337-2887.jpg?w=2000',
      },
      {
        id: 4,
        name: 'GONZA',
        position: 'FRONT',
        description: 'Experto en el desarrollo de interfaces de usuario. Diseña y crea la parte visual de la plataforma, asegurándose de que sea atractiva y fácil de usar para los usuarios. Especializado en comercio electrónico',
        image: 'https://i.pinimg.com/236x/c0/de/d9/c0ded90793b6dd263a4bb3e3450d377a.jpg',
      },
      {
        id: 5,
        name: 'PEDRO',
        position: 'FRONT',
        description: 'Responsable de la parte front-end de la plataforma. Trabaja en la mejora de la experiencia de usuario y la usabilidad de la interfaz. Promueve la donación y la participación de los usuarios',
        image: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1',
      },
    //   {
    //       id: 6,
    //       name: 'MALE',
    //       position: 'FRONT ',
    //       description: 'Especialista en el área de backend. Se encarga de la gestión de usuarios y la implementación de la lógica de negocio en la plataforma. Soluciona problemas relacionados con el manejo de datos y la seguridad de la información',
    //       description: 'Colaboradora en el área de front-end. Apoya en el desarrollo de la interfaz de usuario y en la implementación de nuevas funcionalidades. Se enfoca en la creación de un panel de control intuitivo y eficiente',
    //       image: 'https://hips.hearstapps.com/ellees.h-cdn.co/assets/15/37/original/original-por-ti-rostros-activos-personas-luchadoras-12718597-1-esl-es-rostros-activos-personas-luchadoras-jpg.jpg?resize=480:*',
    //     },
        {
          id: 7,
          name: 'SOFI',
          position: 'FRONT',
          description: 'Encargada de la integración con Auth0 y la gestión de la autenticación de usuarios en la plataforma. Brinda soporte técnico en temas relacionados con la seguridad y el acceso a la plataforma',
          image: 'https://media.glamour.es/photos/616faf06be7fea11c55d7f55/4:3/w_1200,h_900,c_limit/569953.jpg',
        },
  ];
  

  return (
    <div className={styles.equipo}> 
      <h2 className={styles.equipoTitle}>Nuestro Equipo</h2> 
      <div className={styles.equipoCards}> 
        {members.map((member) => (
          <div className={styles.equipoCard} key={member.id}>
            <div className={styles.equipoCardFront}> 
              <img className={styles.equipoCardImage} src={member.image} alt={member.name} /> 
              <div className={styles.equipoCardContent}> 
                <h3 className={styles.equipoCardName}>{member.name}</h3> 
                <p className={styles.equipoCardPosition}>{member.position}</p> 
              </div>
            </div>
            <div className={styles.equipoCardBack}> 
              <p className={styles.equipoCardDescription}>{member.description}</p> 
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Equipo;
