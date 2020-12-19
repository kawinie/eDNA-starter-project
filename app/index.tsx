import { render } from "preact";
import { GlobalStyles } from "twin.macro";
import { Application } from "./app";

render(
    <>
        <GlobalStyles />
        <Application />
    </>,
    document.getElementById("root")
);
