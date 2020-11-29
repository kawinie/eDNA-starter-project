import { h, FunctionalComponent } from "preact";
import { Tile } from "components/units/Tile";
import { Sidebar } from "components/modules/Sidebar";
import { TileCollection } from "components/modules/TileCollection";
import { ValveStatus } from "components/modules/ValveStatus";
import { StateTable } from "components/modules/StateTable";
import { Breadcrumb } from "src/components/modules/Breadcrumb";

export const Monitoring: FunctionalComponent = () => {
	return (
		<div className="flex">
			<Sidebar />
			<div className="flex flex-col w-full bg-trueGray-100">
				<nav className="z-40 flex-shrink-0 w-full h-20 bg-white"></nav>
				<Breadcrumb />

				<div // Content Grid
					className="grid self-center w-full max-w-screen-xl gap-4 px-4"
					style="grid-template-columns: 1fr min-content;">
					<div>
						<ValveStatus />
						<StateTable />
					</div>
					<TileCollection>
						<Tile title="PRESSURE" value="10 PSI" />
						<Tile title="FLOW" value="30 MM/S" />
						<Tile title="TEMPERATURE" value="3C" />
						<Tile title="ATM" value="1 BAR" />
					</TileCollection>
				</div>
			</div>
		</div>
	);
};
