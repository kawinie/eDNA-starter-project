import { h, FunctionalComponent, ComponentChild, JSX } from "preact";
import * as React from "react";

interface Props<T> {
	items: T[];
	render: (item: T) => JSX.Element;
}

export const List = <T extends unknown>({
	items,
	render,
	...elementProps
}: Props<T> & JSX.HTMLAttributes<HTMLDivElement>) => {
	return <div {...elementProps}>{items.map(render)}</div>;
};
