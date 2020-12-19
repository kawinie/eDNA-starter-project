import { FC } from "react";
import "twin.macro";
export const Card: FC<{ title?: string }> = ({ title, children }) => {
    return (
        <div tw="grid gap-4 p-8 rounded-xl" css={"grid-template-rows: min-content;"}>
            {title && (
                <div tw="text-xl font-bold tracking-tight text-primary col-span-full">{title}</div>
            )}
            <div tw="content">{children}</div>
        </div>
    );
};
