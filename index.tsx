import "./styles/global.css";
import { h, render } from "preact";
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import { Monitoring } from "pages/Monitoring";
import { Badge } from "components/units/Badge";
import { Sidebar } from "components/modules/Sidebar";

const Application = (
	<Router>
		{/* <div className=""></div>
		<Sidebar /> */}

		<Switch>
			<Route path="/monitoring" component={Monitoring} />
			<Route path="/" render={() => <Redirect to="/monitoring" />} />
		</Switch>

		<Badge
			className="absolute px-4 py-2 text-sm bg-gray-100 border rounded-full right-8 bottom-4 text-primary"
			text="Sun Nov 22, 2020 13:27 GMT +7"
		/>
	</Router>
);

render(Application, document.getElementById("root"));
