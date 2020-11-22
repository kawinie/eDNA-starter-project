import { h } from "preact";
import styles from "./Button.module.css";

type ButtonProps = {
	text: string;
};

export const Button = ({ text }: ButtonProps) => {
	return (
		<button className="p-1 text-center bg-white rounded shadow-md text-grey-800">
			{text}
		</button>
	);
};
