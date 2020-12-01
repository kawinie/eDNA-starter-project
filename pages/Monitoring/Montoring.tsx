import { h, FunctionalComponent, JSX } from "preact";
import { Tile } from "components/units/Tile";
import { Sidebar } from "components/modules/Sidebar";
import { TileCollection } from "components/modules/TileCollection";
import { ValveStatus } from "components/modules/ValveStatus";
import { StateTable } from "components/modules/StateTable";
import { Breadcrumb } from "components/modules/Breadcrumb";

const Div: FunctionalComponent<JSX.HTMLAttributes<HTMLDivElement>> = (props) => (
	<div {...props}>{props.children}</div>
);

const LeftPane = Div,
	ContentGrid = Div,
	ToolBar = Div;

export const Monitoring: FunctionalComponent = () => {
	return (
		<div className="flex h-full overflow-hidden">
			<Sidebar />
			<LeftPane className="flex flex-col w-full h-screen overflow-y-scroll bg-trueGray-100">
				<ToolBar className="sticky top-0 z-40 flex-shrink-0 w-full h-8 bg-white"></ToolBar>
				<Breadcrumb />

				<ContentGrid
					className="grid self-center w-full max-w-screen-xl gap-4 px-4"
					style="grid-template-columns: 1fr min-content;">
					<main>
						<ValveStatus />
						<StateTable />
					</main>
					<TileCollection>
						<Tile title="PRESSURE" value="10 PSI" />
						<Tile title="FLOW" value="30 MM/S" />
						<Tile title="TEMPERATURE" value="3C" />
						<Tile title="ATM" value="1 BAR" />
					</TileCollection>
				</ContentGrid>
			</LeftPane>
		</div>
	);
};
