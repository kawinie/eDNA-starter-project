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
		<LeftPane
			className="flex flex-col w-full h-screen overflow-y-scroll bg-background"
			style="border-top-left-radius: 3rem; border-bottom-left-radius: 3rem">
			<ToolBar className="sticky top-0 z-40 grid items-center flex-shrink-0 w-full h-8">
				<div className="px-4 text-sm justify-self-end text-primary">{`V${__APPVERSION__}`}</div>
			</ToolBar>
			<Breadcrumb />

			<ContentGrid
				className="grid self-center w-full max-w-screen-xl gap-4"
				style="grid-template-columns: 1fr min-content;">
				<main>
					<ValveStatus />
					<StateTable />
				</main>
				<TileCollection>
					<Tile title="Presssure" value="10" unit="psi" />
					<Tile title="Flow" value="30" unit="mm/s" />
					<Tile title="Temperature" value="3" unit="°C" />
					<Tile title="Barometeric" value="1" unit="bar" />
					<Tile title="Volume" />
					<Tile title="Depth" />
				</TileCollection>
			</ContentGrid>
		</LeftPane>
	);
};
