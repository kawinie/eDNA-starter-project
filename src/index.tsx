import "./styles/global.css";
import { h, Fragment, render } from "preact";
import { Monitoring } from "./pages/Monitoring";

import cx from "classnames";

const Application = (
	<Fragment>
		<Monitoring />
	</Fragment>
);

render(Application, document.getElementById("root"));
