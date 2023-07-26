import React from 'react';
import styles from "./Team.module.css";

const Team = () => {
  const members = [
    {
      id: 1,
      name: 'FEDE',
      position: 'BACKEND',
      description: 'In charge of the technical part and development of the children\'s dining platform. Responsible for ensuring the efficient functioning of the system and implementing improvements in the infrastructure.',
      image: 'https://img.freepik.com/free-photo/handsome-young-new-styled-hair-man_176420-19636.jpg?size=500&ext=jpg',
    },
    {
        id: 2,
        name: 'GIAN',
        position: 'BACKEND',
        description: 'Backend collaborator. Supports in the development of functionalities and resolving technical issues. Always willing to help and collaborate with the team.',
        image: 'https://cambiardeimagen.files.wordpress.com/2013/03/moda-masculina-lentes-cara-hombre-carametria-caramorfoligia-consultoria-de-imagen.jpg',
    },
    {
        id: 3,
        name: 'FIDEL',
        position: 'FRONT',
        description: 'Frontend collaborator. Assists in the development of the user interface and the implementation of new functionalities. Focuses on creating an intuitive and efficient control panel.',
        image: 'https://img.freepik.com/free-photo/close-up-portrait-young-bearded-man_171337-2887.jpg?size=500&ext=jpg',
    },
    {
        id: 4,
        name: 'GONZA',
        position: 'FRONT',
        description: 'Expert in frontend development. Designs and creates the visual part of the platform, ensuring it is attractive and easy to use for users. Specialized in e-commerce.',
        image: 'https://i.pinimg.com/236x/c0/de/d9/c0ded90793b6dd263a4bb3e3450d377a.jpg',
    },
    {
        id: 5,
        name: 'PEDRO',
        position: 'FRONT',
        description: 'Responsible for the frontend part of the platform. Works on improving user experience and interface usability. Promotes donation and user participation.',
        image: 'https://i0.wp.com/www.diarlu.com/wp-content/uploads/2019/09/cara-hombre-sonriendo.jpg?resize=500%2C500&ssl=1',
    },
    {
        id: 7,
        name: 'SOFI',
        position: 'FRONT',
        description: 'In charge of integration with Auth0 and user authentication management on the platform. Provides technical support on security and platform access issues.',
        image: 'https://media.glamour.es/photos/616faf06be7fea11c55d7f55/4:3/w_1200,h_900,c_limit/569953.jpg',
    },
  ];

  return (
    <div className={styles.team}>
      <h2 className={styles.teamTitle}>Our Team</h2>
      <div className={styles.teamCards}>
        {members.map((member) => (
          <div className={styles.teamCard} key={member.id}>
            <div className={styles.teamCardFront}>
              <img className={styles.teamCardImage} src={member.image} alt={member.name} />
              <div className={styles.teamCardContent}>
                <h3 className={styles.teamCardName}>{member.name}</h3>
                <p className={styles.teamCardPosition}>{member.position}</p>
              </div>
            </div>
            <div className={styles.teamCardBack}>
              <p className={styles.teamCardDescription}>{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
