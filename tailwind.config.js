/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Figtree"],
        serif: ["Cormorant"],
      },
      colors: {
        black: "#000011",
        white: "#ffffff",
        gray: {
          100: "#fcfffc",
          500: "#b5aeb1",
        },
        green: {
          100: "#c5dec5",
          300: "#9fb39f",
        },
      },
      spacing: {
        4: "1rem",
        8: "2rem",
      },
    },
  },
  plugins: [],
};
