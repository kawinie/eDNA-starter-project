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
		className={`px-2 py-4 font-normal text-sm text-left text-secondary ${className}`}>
		{children}
	</th>
);

const StateTableHeader: FunctionalComponent = () => {
	return (
		<thead>
			<tr className="">
				<HeaderCell>State Name</HeaderCell>
				<HeaderCell className="text-center">Status</HeaderCell>
				<HeaderCell className="text-right">Time Elasped</HeaderCell>
			</tr>
		</thead>
	);
};

const TableCell: FunctionalComponent<{ className?: string }> = ({ className, children }) => (
	<td
		className={`px-4 py-4 text-sm font-bold bg-white text-primary whitespace-nowrap ${className}`}>
		{children}
	</td>
);

const StateTableRow: FunctionalComponent<StateType> = ({ status, name, timeElapsed }) => {
	const cs = status.toLocaleLowerCase() === "inactive";
	const badgeStyle = cx("py-2 px-4 text-xs font-bold rounded-full", {
		"bg-gray-100 text-primary": cs,
		"bg-teal-100 text-teal-800": !cs,
	});

	return (
		<tr className="shadow">
			<TableCell className="rounded-l-md">{name}</TableCell>
			<TableCell>
				<div className="flex justify-center">
					<Badge className={badgeStyle} text={status} />
				</div>
			</TableCell>
			<TableCell className="pr-4 text-right rounded-r-md">{`${timeElapsed} seconds ago`}</TableCell>
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
				className="min-w-full border-separate"
				style="border-spacing: 0 0.5rem; margin-top: -0.5rem">
				<colgroup>
					<col span={1} style="width: 60%;" />
					<col span={1} style="width: 15%;" />
					<col span={1} style="width: 25%;" />
				</colgroup>

				<StateTableHeader />
				<tbody>
					{states.map((s) => (
						<StateTableRow {...s} />
					))}
				</tbody>
			</table>
		</Card>
	);
};
