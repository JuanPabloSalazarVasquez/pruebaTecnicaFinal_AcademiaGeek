import React from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

//Páginas
import HomePage from './pages/HomePage';
import NotAuthorized from './pages/NotAuthorized';
//Páginas fin

function App() {

    return (
        <div className="App">
            <BrowserRouter>
                <Switch>
                    <Route exact path="/" component={HomePage} />
                    <Route exact path="/notAuthorized" component={NotAuthorized} />
                </Switch>
            </BrowserRouter>
        </div>
    )
}
export default App;