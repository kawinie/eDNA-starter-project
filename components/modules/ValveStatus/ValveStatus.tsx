import { FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Card } from "components/modules/Card";

import tw from "twin.macro";
import styled from "styled-components";

export const partition = <T extends any>(ary: T[], predicate: (elem: T) => boolean) => {
    const a: T[] = [];
    const b: T[] = [];
    ary.forEach(e => (predicate(e) ? a.push(e) : b.push(e)));
    return [a, b] as const;
};

interface ValveType {
    id: number;
    status: boolean;
}

const Valve = styled.div<{ isActive: boolean }>`
    ${tw`flex items-center justify-center px-4 py-2 font-bold text-primary hover:bg-teal-100`}
    ${props => (props.isActive ? tw`bg-teal-500 animate-pulse` : tw`bg-white text-secondary`)}
`;

export const ValveCollection: FunctionalComponent<{ valves: ValveType[] }> = ({ valves }) => {
    return (
        <div tw="grid h-24 grid-flow-row grid-cols-12 grid-rows-2 overflow-hidden shadow rounded-xl">
            {valves.map(v => (
                <Valve key={v.id} isActive={v.status}>
                    {v.id}
                </Valve>
            ))}
        </div>
    );
};

export const ValveStatus: FunctionalComponent<{}> = () => {
    const [valves, _] = useState(
        Array.from({ length: 24 }, (_, id) => ({ id: id, status: id === 2 }))
    );
    const [top, bottom] = partition(valves, ({ id }) => id < 12);
    return (
        <Card title="Valve Status">
            <ValveCollection valves={top.concat(bottom.reverse())} />
            <div tw="grid grid-flow-col gap-8 auto-cols-max">
                <div tw="flex items-center mt-8">
                    <div tw="w-4 h-4 mr-2 bg-teal-400 rounded-md"></div>
                    <div tw="text-sm text-secondary">Current Valve</div>
                </div>

                <div tw="flex items-center mt-8">
                    <div tw="w-4 h-4 mr-2 bg-yellow-400 rounded-md"></div>
                    <div tw="text-sm text-secondary">Next</div>
                </div>

                <div tw="flex items-center mt-8">
                    <div tw="w-4 h-4 mr-2 rounded-md bg-trueGray-900"></div>
                    <div tw="text-sm text-secondary">Scheduled</div>
                </div>

                <div tw="flex items-center mt-8">
                    <div tw="w-4 h-4 mr-2 rounded-md bg-trueGray-300"></div>
                    <div tw="text-sm text-secondary">Disabled</div>
                </div>
            </div>
        </Card>
    );
};
