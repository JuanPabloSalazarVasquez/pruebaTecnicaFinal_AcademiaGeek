import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Páginas
import NotAuthorized from './pages/NotAuthorized';
import HomePage from './pages/HomePage';
import RealizarCompra from './pages/RealizarCompra';
//Páginas fin

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/notAuthorized" component={NotAuthorized} />
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/realizarCompra" component={RealizarCompra} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;