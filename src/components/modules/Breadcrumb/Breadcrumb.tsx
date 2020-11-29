import { h, FunctionalComponent, Fragment } from "preact";
import { Link, useLocation } from "react-router-dom";

function titleCase(str: string) {
	return str
		.toLowerCase()
		.split(" ")
		.map((word) => word.replace(word[0], word[0].toUpperCase()))
		.join(" ");
}

export const Breadcrumb: FunctionalComponent<{}> = () => {
	const location = useLocation();
	const paths = location.pathname.split("/").slice(1);

	console.log(paths);
	return (
		<div className="grid items-center flex-shrink-0 w-full h-20 grid-flow-col gap-4 px-8 auto-cols-max">
			{paths.map((p, index) => (
				<>
					<Link to={paths.slice(0, index).join("/")} className="hover:underline">
						{titleCase(p)}
					</Link>
					{index < paths.length - 1 && (
						<svg
							width="24"
							height="24"
							viewBox="0 0 24 24"
							xmlns="http://www.w3.org/2000/svg">
							<path
								d="M15.713 12L9.70202 5.99001L8.28802 7.40401L12.888 12.004L8.28802 16.597L9.70202 18.011L15.713 12Z"
								fill="#2E3A59"
							/>
						</svg>
					)}
				</>
			))}
		</div>
	);
};
