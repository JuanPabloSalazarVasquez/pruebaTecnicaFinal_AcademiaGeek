import React from "react";

import { Container } from "react-bootstrap";
import '../styles/notAuthorized.css';

const NotAuthorized = () => {

    return (
        <div className="notAuthorized" >
            <Container className="text-center mt-2 mx-auto my-3 p-2 bosy w-50" >
                <img src="https://github.com/LeisyVasquez/SEIRC/blob/main/client/public/images/warning.png?raw=true" alt="Warning" className="warning mt-4" />
                <h2 className="mx-auto my-5">Error 430 <br /> ¡No tiene permiso para acceder a este sitio!</h2>
            </Container>
            <div className="links">
                <h6>Accede con tus credenciales <a href="/">aquí</a></h6>
                <h6 className="p-2"><a href="https://j3c.co/contact.html" target="_blank" className="solicitarReest">Solicitar reestablecimiento de contraseña</a></h6>
            </div>
        </div>
    );
}

export default NotAuthorized;