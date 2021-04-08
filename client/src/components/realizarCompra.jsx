import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import swal from "sweetalert2";
import '../styles/realizarCompra.css';

const RealizarCompra = () => {
    //Declaración de variables
    const [orderData, setOrderData] = useState({ numeroOrden: 2 });
    let [fechaHora, setFechaHora] = useState({});
    let [subTotalNumber, setSubTotalNumber] = useState(0);
    let products = []
    const formulario = useRef();
    const recibo = useRef();
    //Declaración de variables fin

    useEffect(() => {
        getCurrentDateAndHour();
    }, []);

    //Generar fecha y hora actual
    const getCurrentDateAndHour = () => {
        //fecha
        let date = new Date();
        let mm = '' + (date.getMonth() + 1);
        let dd = '' + date.getDate();
        let yyyy = date.getFullYear();
        if (dd < 10) dd = "0" + dd;
        if (mm < 10) mm = "0" + mm;

        //hora
        let HH = '' + (date.getHours() - 5);
        let MM = '' + date.getMinutes();
        if (HH < 10) HH = "0" + HH;
        if (MM < 10) MM = "0" + MM;

        setFechaHora((state) => ({
            ...fechaHora,
            fecha: dd + "/" + mm + "/" + yyyy,
            fechaInput: yyyy + "-" + mm + "-" + dd,
            hora: HH + ":" + MM,
        }));
    }

    const tableBody = <tr>
        <td>Tipo de producto</td>
        <td>Cantidad del producto</td>
    </tr>;

    const handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == 'nombre') {
            setOrderData((state) => ({
                ...orderData,
                nombre: value,
            }));
        } else {
            products.push(``) //Aquí quiero emplear arrays para los productos, tal cual pidieron
        }
        
    }

    const add = () => {
        if (orderData.nombre == "" || orderData.nombre == undefined) {
            swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, ingrese el nombre del comprador",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red",
            });
        } else {
            getCurrentDateAndHour();
            recibo.current.style = { display: "block" }
            reset("add")
        }
    }

    const reset = (param) => {
        if (param == "add") {
            formulario.current.reset()
        } else {
            swal.fire({
                title: 'Advertencia',
                text: '¿Cancelar el registro actual?',
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'No',
                confirmButtonText: 'Sí',
                confirmButtonColor: "#51C2D5",
                cancelButtonColor: "#fa1e0e",
            }).then((result) => {
                if (result.value) {
                    formulario.current.reset()
                }
            })
        }
    }

    return (
        <div className="realizarCompra" >
            <Container className="text-left mt-2 mx-auto my-3 p-2 bosy w-50" >
                <Form ref={formulario}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Número de la orden</Form.Label>
                        <Form.Control type="number" readOnly value={orderData.numeroOrden} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Nombre</Form.Label>
                        <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" onChange={handleChange} value={orderData.nombre || ''} />
                    </Form.Group>

                    <Row>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Fecha</Form.Label>
                                <Form.Control type="date" readOnly value={fechaHora.fechaInput || ''} />
                            </Form.Group>
                        </Col>
                        <Col>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Hora</Form.Label>
                                <Form.Control type="time" readOnly value={fechaHora.hora || ''} />
                            </Form.Group>
                        </Col>
                    </Row>

                    <Form.Group controlId="exampleForm.ControlSelect2">
                        <Form.Label>Artículo</Form.Label>
                        <Form.Control as="select" name="articulo" onChange={handleChange}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" placeholder="Unidades del producto" name="unidades" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Subtotal</Form.Label>
                        <Form.Control type="number" readOnly />
                    </Form.Group>

                    <Button variant="primary" onClick={add} className="mx-2 my-1">
                        Agregar
                    </Button>
                    <Button variant="primary" onClick={reset} className="mx-2 my-1">
                        Cancelar
                    </Button>
                </Form>

                <div className="card my-4" style={{ display: "none" }} ref={recibo}>
                    <div className="card-body">
                        <h5 className="card-title mb-2">Recibo de compra</h5>
                        <h5 className="card-title mb-2">GEEK Cosmetics</h5>
                        <hr />
                        <p className="card-text">Orden número: {orderData.numeroOrden || ''}</p>
                        <p className="card-text">Cliente: {orderData.nombre || ''}</p>
                        <p className="card-text">Fecha y hora: {fechaHora.fecha || ''} - {fechaHora.hora || ''}</p>

                        <table className="table table-bordered table-striped table-sm table-hover .table-responsive">
                            <thead>
                                <tr>
                                    <th scope="col">Producto</th>
                                    <th scope="col">Cantidad</th>
                                </tr>
                            </thead>
                            <tbody>
                                {tableBody}
                            </tbody>
                        </table>
                    </div>
                    <div className="card-footer text-left">
                        <p className="total">Subtotal: {subTotalNumber || ''}</p>
                        <hr/>
                    </div>
                </div>
            </Container>
        </div>
    );
}

export default RealizarCompra;