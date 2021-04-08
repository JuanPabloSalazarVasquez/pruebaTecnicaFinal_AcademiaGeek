import React from "react";

import { Container } from "react-bootstrap";
import '../styles/homePage.css';

const HomePage = () => {

    return (
        <div className="homePage" >
            <Container className="text-center mt-2 mx-auto my-3 p-2 bosy w-50" >
                <h2 className="mx-auto mb-4 mt-5">¡Bienvenid@! <br /> ¿Elija la pestaña a la que quiera acceder?</h2>
                <div className="botones">
                    <a href="/realizarCompra"><button type="button" className="btn btn-primary mx-3">Realizar compra</button></a>
                    <a href="/totalCompras"><button type="button" className="btn btn-primary mx-3">Total compras</button></a>
                </div>
            </Container>
            {/*
            <div className="links">
                <h6>Accede con tus credenciales <a href="/">aquí</a></h6>
                <h6 className="p-2"><a href="https://j3c.co/contact.html" target="_blank" className="solicitarReest">Solicitar reestablecimiento de contraseña</a></h6>
            </div>
            */}


        </div>
    );
}

export default HomePage;