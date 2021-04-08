import React from "react";

import { Container } from "react-bootstrap";
import '../styles/totalCompras.css';

const TotalCompras = () => {
    return (
        <div className="totalCompras" >
            <Container className="text-center mt-2 mx-auto my-3 p-1" >
                <h1>Historial de compras</h1>
                <div className="historial">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {/*orderData.map((item) =>*/
                            <div className="col">
                                <div className="card h-100" /*key={item._id}*/>
                                    <div className="card-body">
                                        <div className="h-25">
                                            <h5 className="card-title" id="nombre">Número de orden: 1</h5>
                                        </div>
                                        <p className="card-text">Nombre del cliente: Nombre</p>
                                        <p className="card-text">Fecha: Fecha - Hora</p>
                                        <p className="card-text">Subtotal: subtotal</p>
                                        <p className="card-text">IVA: IVA</p>
                                        <p className="card-text">Total: Total</p>
                                    </div>
                                </div>
                            </div>
                    /*)*/}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default TotalCompras;