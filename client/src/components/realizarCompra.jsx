import React, { useState, useRef, useEffect } from "react";
import { Container, Form, Button, Row, Col } from "react-bootstrap";
import { saveToLocal, remove, getFromLocal } from "../functions/functions";
import api from '../axios/axios';
import swal from "sweetalert2";
import '../styles/realizarCompra.css';
require('dotenv').config({ path: '../.env' });

const RealizarCompra = () => {
    //Declaración de variables
    const [orderData, setOrderData] = useState({});
    let [fechaHora, setFechaHora] = useState({});
    let [articles, setArticles] = useState([]);
    const [tableBody, setTableBody] = useState([]);
    const formulario = useRef();
    const recibo = useRef();
    const btnAñadir = useRef();
    //Declaración de variables fin

    useEffect(() => {
        getCurrentDateAndHour();
        getOrderNumber();
        getArticlesInfo();
        //remove();
    }, []);

    //Generar fecha y hora actual
    const getCurrentDateAndHour = () => {
        try {
            //fecha
            let date = new Date();
            let mm = '' + (date.getMonth() + 1);
            let dd = '' + date.getDate();
            let yyyy = date.getFullYear();
            if (dd < 10) dd = "0" + dd;
            if (mm < 10) mm = "0" + mm;

            //hora
            let HH = '' + (date.getHours());
            let MM = '' + date.getMinutes();
            if (HH < 10) HH = "0" + HH;
            if (MM < 10) MM = "0" + MM;

            setFechaHora((state) => ({
                ...fechaHora,
                fecha: dd + "/" + mm + "/" + yyyy,
                fechaInput: yyyy + "-" + mm + "-" + dd,
                hora: HH + ":" + MM,
            }));
        } catch (err) {
            swal.fire({
                icon: "error",
                title: "¡Vaya!",
                text: `Se presentó un error inesperado: ${err}`,
                confirmButtonText: "Volver a cargar la página",
                confirmButtonColor: "red",
            }).then(() => {
                window.location.reload();
            });
        }
    }

    //Generar número de la orden
    const getOrderNumber = () => {
        api.get('/getOrderCount')
            .then((res) => {
                setOrderData({ numeroDeOrden: res.data[0].numeroDeOrdenes + 1 });
            }).catch(async (err) => {
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

    //Obtener datos de los artículos
    const getArticlesInfo = () => {
        api.get('/getAllArticles')
            .then((res) => {
                setArticles(res.data);
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

    //Actualizar orderData al cambiar campos del formulario
    const handleChange = async (e) => {
        let name = e.target.name;
        let value = e.target.value;
        if (name == 'articulo') {
            setOrderData((state) => ({
                ...orderData,
                articulo: value,
            }));
        } else {
            setOrderData((state) => ({
                ...orderData,
                [name]: value,
            }));
        }

        if (orderData.articulo && name == 'unidades') {
            const articulo = parseInt(orderData.articulo);
            if (value == "") {
                value = 0;
            } else {
                value = parseInt(value);
            }

            for (let i = 0; i < articles.length; i++) {
                let precio = parseInt(articles[i].precio)

                if (articulo == articles[i].id_articulo) {
                    if (value > parseInt(articles[i].existencias)) {
                        swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "La cantidad indicada excede las existencias",
                            confirmButtonText: "Entendido",
                            confirmButtonColor: "red",
                        });
                        break;
                    } else {
                        setOrderData((state) => ({
                            ...orderData,
                            subTotalNumber: precio * value,
                            unidades: value,
                            descripcion: articles[i].descripcion
                        }));
                        break;
                    }
                };
            }
        } else if (name == 'articulo' && orderData.unidades) {
            const articulo = parseInt(value);
            let unidades = parseInt(orderData.unidades);

            for (let i = 0; i < articles.length; i++) {
                let precio = parseInt(articles[i].precio)

                if (value == articles[i].id_articulo) {
                    if (unidades > parseInt(articles[i].existencias)) {
                        swal.fire({
                            icon: "error",
                            title: "Error",
                            text: "La cantidad indicada excede las existencias",
                            confirmButtonText: "Entendido",
                            confirmButtonColor: "red",
                        });
                        break;
                    }
                    setOrderData((state) => ({
                        ...orderData,
                        subTotalNumber: precio * orderData.unidades,
                        articulo: value,
                        descripcion: articles[i].descripcion
                    }));
                    break;
                }
            }
        }
    }

    //Añadir producto a la orden
    const addItem = () => {
        if (!orderData.nombre) {
            swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, ingrese el nombre del comprador",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red",
            });
        } else if (!orderData.articulo) {
            swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, seleccione un artículo",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red",
            });
        } else if (!orderData.unidades) {
            swal.fire({
                icon: "error",
                title: "Error",
                text: "Por favor, seleccione una cantidad",
                confirmButtonText: "Entendido",
                confirmButtonColor: "red",
            });
        } else {
            
            let listaArticulosTemp = getFromLocal('listaArticulos');
            console.log(listaArticulosTemp);
            if (listaArticulosTemp) {
                let listaArticulos = listaArticulosTemp.split(',');
                const found = listaArticulos.find(element => element == orderData.descripcion);
                console.log("Encontró: " + found);

                if (!found) {
                    let strLista = listaArticulos + "," + orderData.descripcion
                    saveToLocal('listaArticulos', strLista)
                    saveToLocal('objArticulos', JSON.stringify(orderData))
                }
            } else {
                saveToLocal('listaArticulos', orderData.descripcion)
                saveToLocal('objArticulos', JSON.stringify(orderData))
            }

            getCurrentDateAndHour();
            reset("addItem");
            recibo.current.style = { display: "block" };
        }
    }

    //Resetear el formulario
    const reset = (param) => {
        if (param == "addItem") {
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

    //Borrar un item de la orden
    const deleteItem = () => {
        alert('¡Funciona!')
        /*swal.fire({
            icon: "success",
            title: "Producto eliminado",
            confirmButtonText: "Entendido",
            confirmButtonColor: "green",
        });*/ //Quita el elemento en cuestión del array y vuelve tirar el map
    }

    //Montar orden a la base de datos y volver al homePage
    const finishOrder = () => {
        swal.fire({
            icon: "success",
            title: "¡Listo!",
            text: "La orden ha sido creada",
            confirmButtonText: "Volver al inicio",
            confirmButtonColor: "green",
        })
            .then(() => {
                window.location.href = '/'
            });
    }

    return (
        <div className="realizarCompra" >
            <Container className="text-left mt-2 mx-auto my-3 p-2 bosy w-50" >
                <Form ref={formulario}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Número de la orden</Form.Label>
                        <Form.Control type="number" readOnly value={orderData.numeroDeOrden || ''} />
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
                        <Form.Control as="select" name="articulo" onChange={handleChange} >
                            <option value="">Elija un artículo</option>
                            {articles.map((data) =>
                                <option key={data.id_articulo} value={data.id_articulo}>{data.descripcion}</option>
                            )}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Cantidad</Form.Label>
                        <Form.Control type="number" placeholder="Unidades del producto" name="unidades" onChange={handleChange} />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Subtotal</Form.Label>
                        <Form.Control type="number" readOnly value={orderData.subTotalNumber || ''} />
                    </Form.Group>

                    <Button variant="primary" onClick={addItem} className="mx-2 my-1" ref={btnAñadir}>
                        Agregar
                    </Button>
                    <Button variant="primary" onClick={reset} className="mx-2 my-1">
                        Cancelar
                    </Button>
                </Form>

                <div style={{ display: "none" }} ref={recibo}>


                    <div className="card my-4">
                        <div className="card-body">
                            <h5 className="card-title mb-2">Recibo de compra</h5>
                            <h5 className="card-title mb-2">GEEK Cosmetics</h5>
                            <hr />
                            <p className="card-text">Orden número: {orderData.numeroDeOrden || ''}</p>
                            <p className="card-text">Cliente: {orderData.nombre || ''}</p>
                            <p className="card-text">Fecha y hora: {fechaHora.fecha || ''} - {fechaHora.hora || ''}</p>

                            <table className="table table-bordered table-striped table-sm table-hover .table-responsive">
                                <thead>
                                    <tr>
                                        <th scope="col">Producto</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Subtotal</th>
                                        <th scope="col">Borrar Item</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {tableBody.map((data) =>
                                        <tr style={{ textAlign: "center", alignItems: "center" }}>
                                            <td>{data.orderData.descripcion}</td>
                                            <td>{data.orderData.unidades}</td>
                                            <td>{data.orderData.subTotalNumber}</td>
                                            <input type="image" src="https://github.com/JuanPabloSalazarVasquez/pruebaTecnicaFinal_AcademiaGeek/blob/master/client/public/img/x.png?raw=true" alt="X" className="x" onClick={deleteItem} />
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                        <div className="card-footer text-left">

                            <tr>
                                <p className="total">Subtotal: {orderData.subTotalNumber || ''}</p>
                            </tr>
                            <tr>
                                <p className="total">Total IVA: {orderData.subTotalNumber * 0.2 || ''}</p>
                            </tr>
                            <tr>
                                <p className="total">Total: {(orderData.subTotalNumber * 0.2) + orderData.subTotalNumber || ''}</p>
                            </tr>
                            <hr />
                        </div>
                    </div>
                    <Button variant="primary" onClick={finishOrder} className="mx-2 my-1">
                        Finalizar
                    </Button>
                </div>
            </Container>
        </div>
    );

}

export default RealizarCompra;