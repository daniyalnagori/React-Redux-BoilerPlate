import React, { Component } from 'react';
import { Router, Route, Switch } from "react-router-dom"
import { HelloWorld } from "./../Components/Index"
import { HelloWorldContainer } from "./../Container/index"
import history from "./../Config/Hisotry"

class AppRoutes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/" component={HelloWorld} />
                    <Route path="/helloworld" component={HelloWorldContainer} />
                </Switch>
            </Router>
        );
    }
}

export default AppRoutes;
