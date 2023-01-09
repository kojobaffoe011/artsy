/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/pages/*.{html,js,jsx}", "./src/components/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      stix: '"STIX Two Text"',
      baker: "Baskervville",
      clash: ["'Clash Display'", "'sans-serif'"],
      satoshi: ["'Satoshi'", "'sans-serif'"],
      belle: ["'Bellefair'", "'serif'"],
      pop: ["'Poppins'", "'sans-serif'"],
    },
    extend: {
      backgroundImage: {
        "gradient-0deg":
          "linear-gradient(0deg, rgba(0, 0, 0, 0.52), rgba(0, 0, 0, 0.52)), linear-gradient(104.57deg, rgba(0, 0, 0, 0) 21.03%, rgba(0, 0, 0, 0.2) 56.5%, rgba(0, 0, 0, 0.2) 93.84%)",
        upcome:
          "linear-gradient(99.99deg, #4693ED -26.21%, #79C2D2 22.16%, rgba(192, 86, 9, 0.49) 111.62%)",
        babe: "linear-gradient(0deg, rgba(0, 0, 0, 0.04), rgba(0, 0, 0, 0.04))",
      },
    },
  },
  plugins: [],
};
