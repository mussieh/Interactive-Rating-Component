/** @type {import('tailwindcss').Config} */
import plugin from "tailwindcss/plugin";

export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            colors: {
                mainBackground: "#141518",
                cardBackground: "#222832",
                starBackground: "#282E38",
                headerText: "#ffffff",
                bodyText: "#949AA4",
                numText: "#A3ACB5",
                starColor: "#FF791D",
                buttonColor: "#FD7612",
            },
            fontFamily: {
                sans: ["Overpass", "sans-serif"],
            },
        },
    },
    plugins: [],
};
