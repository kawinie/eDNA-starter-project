import { h, FunctionalComponent } from "preact";
import { useParams } from "react-router-dom";
import { Card } from "components/modules/Card";
export const TaskConfig: FunctionalComponent = () => {
    const { taskname } = useParams<{ taskname: string }>();
    return (
        <div className="w-full max-w-screen-xl mx-auto">
            <Card title={taskname} />
        </div>
    );
};
