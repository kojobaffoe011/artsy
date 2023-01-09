/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js,jsx}", "./src/components/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      stix: '"STIX Two Text"',
      baker: "Baskervville",
      clash: ["'Clash Display'", "'sans-serif'"],
      satoshi: ["'Satoshi'", "'sans-serif'"],
    },
    extend: {},
  },
  plugins: [],
};
