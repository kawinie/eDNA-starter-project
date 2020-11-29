import "./styles/global.css";
import { h, render } from "preact";
import { Monitoring } from "./pages/Monitoring";

import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";

const Application = (
	<Router>
		<Switch>
			<Route path="/monitoring" component={Monitoring} />
			<Route path="/" render={() => <Redirect to="/monitoring" />} />
		</Switch>
	</Router>
);

render(Application, document.getElementById("root"));
