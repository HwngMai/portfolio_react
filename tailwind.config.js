/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    letterSpacing: {
      widest: ".5em",
      wider: ".3em",
    },
    screens: {
      sm: "300px",
      md: "540px",
      lg: "760px",
      xl: "1440px",
    },
    extend: {},
  },
  plugins: [],
};
