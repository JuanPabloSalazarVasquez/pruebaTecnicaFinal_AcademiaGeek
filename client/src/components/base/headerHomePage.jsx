import React, { useEffect } from 'react';
import { getFromLocal, remove } from '../../functions/functions'

import '../../styles/header.css';

class HeaderHomePage extends React.Component {
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
                <div className="headerHomePage">
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <div className="container-fluid">
                            <a className="navbar-brand" href="#"><img src="./img/Logo_2.png" alt="" /></a>
                            <p className="titulo">GEEK Cosmetics</p>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                                aria-label="Toggle navigation" >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                        </div>
                    </nav>
                </div>
            )
        }
    }

}

export default HeaderHomePage;