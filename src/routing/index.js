import React from 'react';
import { Route, Switch } from 'react-router-dom'

import Home from '../home'
import Clients from '../clients';

const Routing = (props) => ( 
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/clients" component={Clients} />
        <Route render={ () => <h1>404 Error</h1> } />
    </Switch>
)

 
export default Routing;