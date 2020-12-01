import { h, FunctionalComponent } from "preact";
import styles from "./Tile.module.css";
interface Props {
	title?: string;
	value?: string;
}

export const Tile: FunctionalComponent<Props> = ({ title = "UNTITLED", value = "------" }) => {
	return (
		<div className="flex flex-col p-4 bg-gray-100 border border-gray-200 rounded-md shadow">
			<div className="text-gray-500 uppercase">{title}</div>
			<div className="flex items-center self-center flex-grow text-2xl font-bold text-gray-500 ">
				{value}
			</div>
		</div>
	);
};
