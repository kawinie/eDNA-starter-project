import { h, FunctionalComponent } from "preact";
import { Tile } from "components/units/Tile";
import { TileCollection } from "components/modules/TileCollection";
import { ValveStatus } from "components/modules/ValveStatus";
import { StateTable } from "components/modules/StateTable";

export const Monitoring: FunctionalComponent = () => {
	return (
		<div
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
		</div>
	);
};
