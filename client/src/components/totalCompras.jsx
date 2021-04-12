import React, { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import api from '../axios/axios';
import swal from "sweetalert2";
import { remove } from "../functions/functions";
import '../styles/totalCompras.css';

const TotalCompras = () => {

    let [orders, setOrders] = useState([]);

    useEffect(() => {
        getOrders();
        remove();
    }, []);

    //Obtener datos de los artículos
    const getOrders = () => {
        api.get('/getAllOrders')
            .then((res) => {
                setOrders(res.data);
            }).catch((err) => {
                swal.fire({
                    icon: "error",
                    title: "¡Vaya!",
                    text: `Se presentó un error inesperado: ${err}`,
                    confirmButtonText: "Volver a cargar la página",
                    confirmButtonColor: "red",
                }).then(() => {
                    window.location.reload();
                });
            });
    }

    return (
        <div className="totalCompras" >
            <Container className="text-center mt-2 mx-auto my-3 p-1" >
                <h1>Historial de compras</h1>
                <div className="historial">
                    <div className="row row-cols-1 row-cols-md-4 g-4">
                        {orders.map((item) =>
                            <div className="col">
                                <div className="card h-100 p-2" key={item.numero_orden}>
                                    <div className="card-body">
                                        <div className="h-25">
                                            <h5 className="card-title" id="nombre">Número de orden: {item.numero_orden}</h5>
                                        </div>
                                        <p className="card-text">Nombre del cliente: {item.nombre_usuario}</p>
                                        <p className="card-text">Fecha: {item.fecha_orden}</p>
                                        <p className="card-text">Subtotal: {item.subtotal_orden}</p>
                                        <p className="card-text">IVA: {item.total_iva}</p>
                                        <hr/>
                                        <p className="card-text">Total: {item.total_orden}</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default TotalCompras;