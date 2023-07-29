import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./Confirmation.css"

const Confirmation = () =>{

    const navigate = useNavigate();
    const secondsToRedirect = 5;
    const [secondsRemaining, setSecondsRemaining] = useState(secondsToRedirect);

    const redirectToHome = () => {
        navigate('/');
    };
    
    useEffect(() => {
        const redirectTimer = setInterval(() => {
            setSecondsRemaining((prevSeconds) => prevSeconds - 1);
        }, 1000);

        if (secondsRemaining === 0) {   // Redirigimos al home cuando el tiempo llega a cero
        redirectToHome();
        clearInterval(redirectTimer);
        }

        return () => clearInterval(redirectTimer);  // Limpiamos el temporizador cuando el componente se desmonta
    }, [secondsRemaining]);

    return(
        <div className="ConfirmationContainer">
            <div className="titleContainer">
                <p className="titleContainerLine"></p>
                <h1 className="titleContainerTexto">Purchase confirmed.</h1>
            </div>
            <div className="MessageConfirmation">
                <p style={{paddingBottom:"2rem"}}> Thank you very much for trusting us.</p>
                <p style={{paddingBottom:"2rem"}}> You will be redirected to the home page in {secondsRemaining} seconds.</p>
            </div>
        </div>
    )
}

export default Confirmation;