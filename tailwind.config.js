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
			},
		},
	},
	variants: {},
	plugins: [],
	screens: {
		"2xl": false,
	},
};
