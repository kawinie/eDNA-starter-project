import { h, FunctionalComponent } from "preact";
import { Card } from "components/modules/Card";
import { Badge } from "components/units/Badge";

import cx from "classnames";

const HeaderCell: FunctionalComponent<{ className?: string }> = ({ className, children }) => {
	return (
		<th
			scope="col"
			className={`px-6 py-3 text-sm font-bold tracking-wider text-left bg-gray-100 text-primary ${className}`}>
			{children}
		</th>
	);
};

const StateTableHeader: FunctionalComponent<{}> = () => {
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

const TableCell: FunctionalComponent<{ className?: string }> = ({ className, children }) => {
	return <td className={`px-6 py-4 text-sm bg-white text-primary ${className}`}>{children}</td>;
};

const StateTableRow: FunctionalComponent<{
	status: string;
	name: string;
	timeElapsed: number;
}> = ({ status, name, timeElapsed }) => {
	const badgeStyle = cx("px-2 text-xs font-semibold leading-5 bg-gray-100 rounded-full", {
		"text-primary": status.toLowerCase() === "active",
	});

	return (
		<tr className="rounded-md shadow">
			<TableCell className="rounded-l-md">
				<Badge className={badgeStyle} text={status} />
			</TableCell>
			<TableCell>{name}</TableCell>
			<TableCell className="text-right rounded-r-md">{timeElapsed}</TableCell>
		</tr>
	);
};

export const StateTable: FunctionalComponent<{}> = () => {
	const stateNames = ["Idle", "Flushing", "Sampling", "Decontamination", "Stop"];
	const states = Array.from({ length: 5 }, (_, id) => ({
		name: stateNames[id],
		status: id === 2 ? "active" : "inactive",
		timeElapsed: id * 5,
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
