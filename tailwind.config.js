const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

module.exports = {
  darkMode: "class", // or 'media' or 'class'
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        trueGray: colors.trueGray,
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        lato: ["Lato", "sans-serif"],
        sourcesans: ["Source Sans Pro", "sans-serif"],
        leaguespartan: ["League Spartan", "sans-serif"],
        poppins: ["Poppins", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
        worksans: ["Work Sans", "sans-serif"],
        hindsiliguri: ["Hind Siliguri", "sans-serif"],
      },
      colors: {
        "sidebar-text": "#E3E3E3",
        "sidebar-background": "#0C1E2E",
        "sidebar-hover": "#000022",
      },
      screens: {
        vsm: "400px",
        lgphone: "550px",
        tablet: "750px",
        lgtablet: "900px",
      },
    },
  },
  plugins: [require("@tailwindcss/aspect-ratio")],
};
