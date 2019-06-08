import React from "react";
import { Route, Switch } from "react-router-dom";

import Home from "../home";
import Clients from "../clients";
import Contact from "../contact";
import SpaDevelopment from "../spaDevelopment";
import FrontEndDevelopment from "../frontEndDevelopment";

const Routing = () => (
	<Switch>
		<Route exact path="/" component={Home} />
		<Route path="/clients" component={Clients} />
		<Route path="/contact" component={Contact} />
		<Route path="/spadevelopment" component={SpaDevelopment} />
		<Route path="/frontenddevelopment" component={FrontEndDevelopment} />
		<Route render={() => <h1>404 Error</h1>} />
	</Switch>
);

export default Routing;
