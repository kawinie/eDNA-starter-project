import { FunctionalComponent } from "preact";
import { useParams } from "react-router-dom";
import { Card } from "components/modules/Card";
import "twin.macro";
export const TaskConfig: FunctionalComponent = () => {
    const { taskname } = useParams<{ taskname: string }>();
    return (
        <div tw="w-full max-w-screen-xl mx-auto">
            <Card title={taskname} />
        </div>
    );
};
