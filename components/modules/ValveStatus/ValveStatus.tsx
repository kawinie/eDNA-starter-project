import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Card } from "components/modules/Card";

import styles from "./ValveStatus.module.css";

import cx from "classnames";

export const partition = <T extends any>(ary: T[], predicate: (elem: T) => boolean) => {
	const a: T[] = [];
	const b: T[] = [];
	ary.forEach((e) => (predicate(e) ? a.push(e) : b.push(e)));
	return [a, b] as const;
};

interface ValveType {
	id: number;
	status: boolean;
}

export const ValveCollection: FunctionalComponent<{ valves: ValveType[] }> = ({ valves }) => {
	const valveCx = (status: boolean) =>
		cx("rounded-md p-1 flex items-center justify-center text-gray-200", {
			"bg-gray-700": status,
			"bg-gray-200": !status,
		});
	return (
		<div className="grid h-24 grid-flow-row grid-cols-12 grid-rows-2 gap-2">
			{valves.map((v) => (
				<div key={v.id} className={valveCx(v.status)}>
					{v.id}
				</div>
			))}
		</div>
	);
};

export const ValveStatus: FunctionalComponent<{}> = () => {
	const [valves, _] = useState(Array.from({ length: 24 }, (_, id) => ({ id: id, status: true })));
	const [top, bottom] = partition(valves, ({ id }) => id < 12);
	return (
		// <div className={cx(styles.valveStatus)}>
		// 	<div className="text-sm text-gray-700 col-span-full">Valve Status</div>
		// 	<div className="content">
		// 		<ValveCollection valves={top.concat(bottom.reverse())} />
		// 	</div>
		// </div>

		<Card title="Valve Status">
			<ValveCollection valves={top.concat(bottom.reverse())} />
		</Card>
	);
};
