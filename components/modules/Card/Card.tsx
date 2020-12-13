import { h, FunctionalComponent } from "preact";

export const Card: FunctionalComponent<{ title?: string; className?: string }> = ({
    title,
    className,
    children,
}) => {
    return (
        <div
            className={`grid gap-4 p-8 rounded-xl ${className}`}
            style="grid-template-rows: min-content;">
            {title && (
                <div className="text-xl font-bold tracking-tight text-primary col-span-full">
                    {title}
                </div>
            )}
            <div className="content">{children}</div>
        </div>
    );
};
