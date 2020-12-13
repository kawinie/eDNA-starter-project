import { h, FunctionalComponent } from "preact";
import { useState } from "preact/hooks";
import { Card } from "components/modules/Card";

import styles from "./ValveStatus.module.css";

import cx from "classnames";

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

export const ValveCollection: FunctionalComponent<{ valves: ValveType[] }> = ({ valves }) => {
    const valveCx = (status: boolean) =>
        cx("px-4 py-2 flex items-center justify-center text-primary font-bold hover:bg-teal-100", {
            "bg-teal-500 animate-pulse": status,
            "bg-white text-secondary": !status,
        });

    return (
        <div className="grid h-24 grid-flow-row grid-cols-12 grid-rows-2 overflow-hidden shadow rounded-xl">
            {valves.map(v => (
                <div key={v.id} className={valveCx(v.status)}>
                    {v.id}
                </div>
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
            <div className="grid grid-flow-col gap-8 auto-cols-max">
                <div className="flex items-center mt-8">
                    <div className="w-4 h-4 mr-2 bg-teal-400 rounded-md"></div>
                    <div className="text-sm text-secondary">Current Valve</div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-4 h-4 mr-2 bg-yellow-400 rounded-md"></div>
                    <div className="text-sm text-secondary">Next</div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-4 h-4 mr-2 rounded-md bg-trueGray-900"></div>
                    <div className="text-sm text-secondary">Scheduled</div>
                </div>

                <div className="flex items-center mt-8">
                    <div className="w-4 h-4 mr-2 rounded-md bg-trueGray-300"></div>
                    <div className="text-sm text-secondary">Disabled</div>
                </div>
            </div>
        </Card>
    );
};
