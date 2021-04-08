import React from "react";

import { Container } from "react-bootstrap";
import '../styles/totalCompras.css';

const TotalCompras = () => {

    return (
        <div className="totalCompras" >
            <Container className="text-center mt-2 mx-auto my-3 p-2 bosy w-50" >
                <h1>¡TotalCompras!</h1>
            </Container>
        </div>
    );
}

export default TotalCompras;