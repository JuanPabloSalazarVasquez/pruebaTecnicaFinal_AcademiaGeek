import React from 'react';
import { Button } from "react-bootstrap";

import '../../styles/header.css';

class Header extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoading: true
        };
    }

    comprobation() {
        /*
        if (this.state.nombre == null || this.state.nombre == "") {
            window.location.href = '/notAuthorized';
        } else {
            this.state.nombre = this.state.nombre.toUpperCase();

            this.setState({ isLoading: false })
        }*/

        this.setState({ isLoading: false })
    }

    componentDidMount() {
        this.comprobation()
    }

    render() {
        if (this.state.isLoading) { return null } else {
            return (
                <div className="header">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src="./img/Logo_2.png" alt="" /></a>
                            <p className="titulo">GEEK Cosmetics</p>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation" >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <a className="nav-link active" aria-current="page" href="#"></a>
                                    </li>
                                </ul>
                                <a href="/"><button className="btn btn-primary mx-2">Inicio</button></a>
                                <a href="/realizarCompra"><button className="btn btn-primary mx-2">Realizar Compra</button></a>
                                <a href="/totalCompras"><button className="btn btn-primary mx-2">Total Compras</button></a>
                            </div>
                        </div>
                    </nav>
                    {/*</Navbar>*/}
                </div>
            )
        }
    }

}

export default Header;