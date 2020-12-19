import tw from "twin.macro";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";

import { Monitoring } from "pages/Monitoring";
import { Tasks } from "pages/Tasks";
import { TaskConfig } from "pages/TaskConfig";

import { Sidebar } from "components/modules/Sidebar";
import { Breadcrumb } from "components/modules/Breadcrumb";

const LeftPane = tw.div`flex flex-col w-full h-screen overflow-y-scroll bg-background
`;
const Toolbar = tw.div`sticky top-0 z-40 grid items-center flex-shrink-0 w-full h-8`;

export const Application = () => (
    <Router>
        <div tw="flex h-full overflow-hidden bg-white">
            <Sidebar />

            <LeftPane>
                <Toolbar>
                    <div tw="px-4 text-sm justify-self-end text-primary">{`V${__APPVERSION__}`}</div>
                </Toolbar>
                <Breadcrumb />

                <Switch>
                    <Route exact path="/" render={() => <Redirect to="/monitoring" />} />
                    <Route exact path="/404" render={() => <div>404 Error</div>} />

                    <Route path="/monitoring" render={() => <Monitoring />} />
                    <Route path="/tasks/:taskname" render={() => <TaskConfig />} />
                    <Route path="/tasks" render={() => <Tasks />} />
                    <Route path="*" render={() => <Redirect to="/404" />} />
                </Switch>
            </LeftPane>
        </div>
    </Router>
);
