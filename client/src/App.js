import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import './styles/global.css'

//Páginas
import NotAuthorized from './pages/NotAuthorized';
import HomePage from './pages/HomePage';
import RealizarCompra from './pages/RealizarCompra';
import TotalCompras from './pages/TotalCompras';
//Páginas fin

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/notAuthorized" component={NotAuthorized} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/realizarCompra" component={RealizarCompra} />
                    <Route exact path="/totalCompras" component={TotalCompras} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;