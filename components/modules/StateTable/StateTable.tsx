import { FC } from "react";
import tw, { styled } from "twin.macro";

import { Card } from "components/modules/Card";
import { Badge } from "components/units/Badge";

type THeaderCellProps = {
    text?: string;
    className?: string;
};

const HeaderCell = ({ text, className }: THeaderCellProps) => (
    <th scope="col" tw="py-4 font-normal text-sm text-left text-secondary" className={className}>
        {text}
    </th>
);

const StateTableHeader = () => {
    return (
        <thead>
            <tr>
                <HeaderCell tw="text-xl font-bold text-primary" text="State Information" />
                <HeaderCell tw="text-sm text-center text-secondary" text="Status" />
                <HeaderCell tw="text-sm text-right text-secondary" text="Time Elaped" />
            </tr>
        </thead>
    );
};

const TableCell = tw.td`px-4 py-4 text-sm font-bold bg-white text-primary whitespace-nowrap`;

interface StateType {
    status: string;
    name: string;
    timeElapsed: number;
}

const StateTableRow: FC<StateType> = ({ status, name, timeElapsed }) => {
    const inactive = status.toLowerCase() === "inactive";
    return (
        <tr tw="shadow">
            <TableCell tw="rounded-l-md">{name}</TableCell>
            <TableCell>
                <div tw="flex justify-center">
                    <Badge
                        tw="px-4 py-2 text-xs font-bold rounded-full"
                        css={
                            inactive ? tw`bg-gray-100 text-primary` : tw`text-teal-800 bg-teal-100`
                        }
                        text={status}
                    />
                </div>
            </TableCell>
            <TableCell tw="pr-4 text-right rounded-r-md">{`${timeElapsed} seconds ago`}</TableCell>
        </tr>
    );
};

const StateTableBody = () => {
    const stateNames = ["Idle", "Flushing", "Sampling", "Decontamination", "Stop"];
    const states: StateType[] = Array.from({ length: 5 }, (_, id) => ({
        name: stateNames[id],
        status: id === 2 ? "Active" : "Inactive",
        timeElapsed: (id - 2) * 5,
    }));

    return (
        <tbody>
            {states.map(s => (
                <StateTableRow {...s} />
            ))}
        </tbody>
    );
};

export const StateTable = () => {
    return (
        <Card>
            <table
                tw="min-w-full border-separate"
                css={"border-spacing: 0 0.5rem; margin-top: -0.5rem"}>
                <colgroup>
                    <col span={1} css="width: 60%;" />
                    <col span={1} css="width: 15%;" />
                    <col span={1} css="width: 25%;" />
                </colgroup>

                <StateTableHeader />
                <StateTableBody />
            </table>
        </Card>
    );
};
