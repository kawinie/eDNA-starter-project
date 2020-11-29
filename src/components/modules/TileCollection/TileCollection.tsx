import { h, FunctionComponent } from "preact";
import styles from "./TileCollection.module.css";

import { Card } from "../Card";

interface Props {
	title?: string;
}

export const TileCollection: FunctionComponent<Props> = ({ title = "UNTITLED", children }) => {
	return (
		<Card title="Sensor Data">
			<div className={styles.tileCollection}>{children}</div>
		</Card>
	);
};
