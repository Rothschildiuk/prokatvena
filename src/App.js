import React, {Component} from 'react';
import './App.css';
import {Route, Switch} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import CarReservation from "./components/CarReservation";
import AdditionalServices from "./components/AdditionalServices";
import OurAdvantages from "./components/OurAdvantages";
import Insurance from "./components/Insurance";
import BordersCrossing from "./components/BordersCrossing";
import DamageAssessment from "./components/DamageAssessment";

const ReactRouter = require('react-router-dom');
const Router = ReactRouter.BrowserRouter;





class App extends Component {
    render() {
        return (
            <Router>
                <div className="App">

                    <NavBar/>

                    <Switch>
                        <Route exact path='/Home' component={Home} />
                        <Route exact path='/CarReservation' component={CarReservation} />
                        <Route exact path='/AdditionalServices' component={AdditionalServices} />
                        <Route exact path='/OurAdvantages' component={OurAdvantages} />
                        <Route exact path='/Insurance' component={Insurance} />
                        <Route exact path='/BordersCrossing' component={BordersCrossing} />
                        <Route exact path='/DamageAssessment' component={DamageAssessment} />

                    </Switch>

                </div>
            </Router>
        );
    }
}

export default App;
