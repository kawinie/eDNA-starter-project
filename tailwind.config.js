const colors = require("tailwindcss/colors");

module.exports = {
	future: {
		// removeDeprecatedGapUtilities: true,
		// purgeLayersByDefault: true,
	},
	purge: {
		content: ["./src/**/*.tsx", "./src/**/*.html"],
	},
	theme: {
		extend: {
			colors: {
				gray: colors.blueGray,
				trueGray: colors.trueGray,
				teal: colors.teal,
			},
			textColor: {
				primary: colors.blueGray["700"],
				secondary: colors.blueGray["200"],
			},
		},
		screens: {
			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }
		},
	},
	variants: {},
	plugins: [require("tailwindcss-debug-screens")],
};
