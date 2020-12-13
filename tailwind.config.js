const colors = require("tailwindcss/colors");

module.exports = {
    purge: {
        content: ["./**/*.tsx", "./**/*.html"],
    },
    theme: {
        extend: {
            colors: {
                gray: colors.blueGray,
                trueGray: colors.trueGray,
                teal: colors.teal,
                "teal-accent": colors.teal["500"],
                "purple-accent": colors.purple["500"],
            },
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
