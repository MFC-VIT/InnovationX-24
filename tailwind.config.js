/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        back: "#04001e",
        secondary: "#3770ff",
        dark: "#12103e",
        bright: "#ff7a01",
        light: "#fac493",
        content: "#07061c",
        brightpurple: "#d3d3fc",
      },
      fontFamily: {
        grotesk: "grotesk",
        groteskb: "grotesk-blend",
      },
    },
  },
  plugins: [],
};
