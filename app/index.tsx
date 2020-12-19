import { render } from "preact";
import { GlobalStyles } from "twin.macro";
import { Application } from "./app";

if (typeof window !== "undefined") {
    render(
        <>
            <GlobalStyles />
            <Application />
        </>,
        document.getElementById("root")
    );
}
