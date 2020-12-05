import "styles/global.css";
import { h, render, FunctionalComponent, JSX } from "preact";
import { HashRouter as Router, Route, Link, NavLink, Redirect, Switch } from "react-router-dom";
import { Monitoring } from "pages/Monitoring";
import { Badge } from "components/units/Badge";
import { Sidebar } from "components/modules/Sidebar";
import { Breadcrumb } from "components/modules/Breadcrumb";
// import { Toolbar } from "components/modules/Toolbar";

import { Tasks } from "pages/Tasks";
import { TaskConfig } from "pages/TaskConfig";
const Div: FunctionalComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => (
	<div {...props}>{props.children}</div>
);

const LeftPane = Div;
const Toolbar = Div;

const Application = (
	<Router>
		<div className="flex h-full overflow-hidden bg-white">
			<Sidebar />

			<LeftPane
				className="flex flex-col w-full h-screen overflow-y-scroll bg-background"
				style="border-top-left-radius: 3rem; border-bottom-left-radius: 3rem">
				<Toolbar className="sticky top-0 z-40 grid items-center flex-shrink-0 w-full h-8">
					<div className="px-4 text-sm justify-self-end text-primary">{`V${__APPVERSION__}`}</div>
				</Toolbar>
				<Breadcrumb />

				<Switch>
					<Route exact path="/" render={() => <Redirect to="/monitoring" />} />
					<Route exact path="/404" render={() => <div>404 Error</div>} />

					<Route path="/monitoring" render={() => <Monitoring />} />
					<Route path="/tasks/:taskname" render={() => <TaskConfig />} />
					<Route path="/tasks" render={() => <Tasks />} />
					<Route path="*" render={() => <Redirect to="/404" />} />
				</Switch>
			</LeftPane>

			{/* 
			<Badge
				className="absolute px-4 py-2 text-sm bg-gray-100 border rounded-full right-8 bottom-4 text-primary"
				text="Sun Nov 22, 2020 13:27 GMT +7"
			/> */}
		</div>
	</Router>
);

render(Application, document.getElementById("root"));
