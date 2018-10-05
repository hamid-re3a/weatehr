import React, { Component } from 'react';

import { Route, Switch } from "react-router-dom";

import './styles/style.css';



// Components
import Home from "./components/pages/Home";
import Search from "./components/pages/Search";
import Weather from "./components/pages/Weather";
import NoMatch from "./components/pages/NoMatch";

class App extends Component {
    render() {
        return (

            <Switch>
                <Route path="/" exact={true} component={Home} />
                <Route path="/weather/:woeid" component={Weather} />
                <Route path="/search/:keyword" component={Search} />
                <Route component={NoMatch} />
            </Switch>

        );
    }
}

export default App;
