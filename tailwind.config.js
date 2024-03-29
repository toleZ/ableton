/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        ableton: {
          fbffa7: "#fbffa7",
          ff764d: "#ff764d",
          b1c5ff: "#b1c5ff",
          d5b3ff: "#d5b3ff",
          b6ffc0: "#b6ffc0",
          "0000ff": "#0000ff",
          fdf900: "#fdf900",
          "00ffff": "#00ffff",
          fed134: "#fed134",
        },
        brands: {
          facebook: "#3477f2",
          twitter: "#1da1f2",
          youtube: "#ff001d",
          instagram: "#f77737",
        },
      },
      fontFamily: {
        "futura-pt": [
          "FuturaPT",
          "Avenir",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Helvetica",
          "Arial",
          "sans-serif",
        ],
      },
    },
  },
  plugins: [],
};
