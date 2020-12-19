import { FunctionalComponent } from "preact";
import tw from "twin.macro";

interface Props {
    title?: string;
    value?: string;
    unit?: string;
}

export const Tile: FunctionalComponent<Props> = ({
    title = "UNTITLED",
    value = "------",
    unit = "--",
}) => {
    return (
        <div tw="flex flex-col p-8 bg-white shadow rounded-xl">
            <div tw="flex items-center flex-grow ">
                <div tw="mr-1 text-xl font-bold leading-none text-primary">{value}</div>
                <span tw="self-end inline-block text-sm font-normal leading-none mb-0.5 text-secondary">
                    {unit}
                </span>
            </div>
            <div tw="mt-2 text-sm text-secondary">{title}</div>
        </div>
    );
};
