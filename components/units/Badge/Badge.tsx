import { ComponentChildren, FunctionalComponent, h, JSX, ComponentChild } from "preact";

interface Props {
	text?: string;
}

export const Badge: FunctionalComponent<JSX.HTMLAttributes<HTMLDivElement> & Props> = ({
	className,
	text,
	...props
}) => {
	return (
		<div className={"flex justify-center round-full " + className} {...props}>
			{text}
		</div>
	);
};
