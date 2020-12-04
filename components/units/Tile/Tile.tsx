import { h, FunctionalComponent } from "preact";

interface Props {
	title?: string;
	value?: string;
	unit?: string;
}

export const Tile: FunctionalComponent<Props> = ({
	title = "UNTITLED",
	value = "------",
	unit = "--",
}) => {
	return (
		<div className="flex flex-col p-8 bg-white shadow rounded-xl">
			<div className="flex items-center flex-grow ">
				<div className="mr-1 text-xl font-bold leading-none text-primary">{value}</div>
				<span className="self-end inline-block text-sm font-normal leading-none mb-0.5 text-secondary">
					{unit}
				</span>
			</div>
			<div className="mt-2 text-sm text-secondary">{title}</div>
		</div>
	);
};
