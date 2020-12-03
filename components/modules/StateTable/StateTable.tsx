import { h, FunctionalComponent, JSX } from "preact";
import { Card } from "components/modules/Card";
import { Badge } from "components/units/Badge";

import cx from "classnames";

interface StateType {
	status: string;
	name: string;
	timeElapsed: number;
}

// const staticData: StateType[] = [{ name: "Idle", status: "Inactive", timeElapsed:  0}];
const HeaderCell: FunctionalComponent<{ className?: string }> = ({ className, children }) => (
	<th
		scope="col"
		className={`px-6 py-3 text-sm font-bold tracking-wider text-left bg-gray-100 text-primary ${className}`}>
		{children}
	</th>
);

const StateTableHeader: FunctionalComponent = () => {
	return (
		<thead>
			<tr className="rounded-md shadow">
				<HeaderCell className="w-1/6 pl-7 rounded-l-md">Status</HeaderCell>
				<HeaderCell>Name</HeaderCell>
				<HeaderCell className="text-right rounded-r-md">Time Elasped</HeaderCell>
			</tr>
		</thead>
	);
};

const TableCell: FunctionalComponent<{ className?: string }> = ({ className, children }) => (
	<td className={`px-6 py-4 text-sm bg-white text-primary ${className}`}>{children}</td>
);

const StateTableRow: FunctionalComponent<StateType> = ({ status, name, timeElapsed }) => {
	const cs = status.toLocaleLowerCase() === "inactive";
	const badgeStyle = cx("px-2 text-xs font-semibold leading-5 rounded-full", {
		"bg-gray-100 text-primary": cs,
		"bg-green-100 text-green-700": !cs,
	});

	return (
		<tr className="rounded-md shadow">
			<TableCell className="rounded-l-md">
				<Badge className={badgeStyle} text={status} />
			</TableCell>
			<TableCell>{name}</TableCell>
			<TableCell className="text-right rounded-r-md">{`${timeElapsed} seconds ago`}</TableCell>
		</tr>
	);
};

export const StateTable: FunctionalComponent = () => {
	const stateNames = ["Idle", "Flushing", "Sampling", "Decontamination", "Stop"];
	const states: StateType[] = Array.from({ length: 5 }, (_, id) => ({
		name: stateNames[id],
		status: id === 2 ? "Active" : "Inactive",
		timeElapsed: (id - 2) * 5,
	}));

	return (
		<Card title="State Information">
			<table
				className="min-w-full border-separate border-gray-200 divide-y divide-gray-200 "
				style="border-spacing: 0 1rem;">
				<StateTableHeader />
				<tbody className="divide-y divide-gray-200">
					{states.map((s) => (
						<StateTableRow {...s} />
					))}
				</tbody>
			</table>
		</Card>
	);
};
