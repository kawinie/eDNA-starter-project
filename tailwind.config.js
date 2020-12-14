const colors = require("tailwindcss/colors");

module.exports = {
    theme: {
        extend: {
            colors: colors,
            textColor: {
                primary: colors.trueGray["900"],
                secondary: colors.trueGray["500"],
            },
            borderColor: {
                DEFAULT: colors.trueGray["200"],
            },
            backgroundColor: {
                background: colors.trueGray["100"],
            },
            letterSpacing: {
                logo: "1rem",
            },
            fontFamiliy: {
                sans: [
                    "ui-sans-serif",
                    "system-ui",
                    "-apple-system",
                    "BlinkMacSystemFont",
                    "Segoe UI",
                    "Roboto",
                    "Helvetica Neue",
                    "Arial",
                    "Noto Sans",
                    "sans-serif",
                    "Apple Color Emoji",
                    "Segoe UI Emoji",
                    "Segoe UI Symbol",
                    "Noto Color Emoji",
                ],
                logo: ["Verdana"],
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
