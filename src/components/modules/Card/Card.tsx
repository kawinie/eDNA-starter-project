import { h, FunctionalComponent } from "preact";
import styles from "./Card.module.css";
import cx from "classnames";

export const Card: FunctionalComponent<{ title?: string }> = ({
	title = "UNTITILED",
	children,
}) => {
	return (
		<div className={cx(styles.card)}>
			<div className="text-xl font-bold text-gray-700 col-span-full">{title}</div>
			<div className="content">{children}</div>
		</div>
	);
};
