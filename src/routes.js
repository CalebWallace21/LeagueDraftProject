import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Login from './components/Login'
import About from './components/About'
import ChampSelect from './components/ChampSelect'


export default (
    <Switch>
        <Route component={ChampSelect} exact path="/" />
        <Route component={About} path="/about" />
        <Route component={Login} path="/login"/>        
    </Switch>
);