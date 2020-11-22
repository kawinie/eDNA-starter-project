import "./styles/global.css";

import { h, Fragment, render } from "preact";
import { Button } from "./components/atoms/Button/Button";

const Application = (
	<Fragment>
		<Button text={"Hey! Everything is working!"}></Button>
	</Fragment>
);

render(Application, document.getElementById("root"));
