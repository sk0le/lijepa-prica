/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    colors: {
      coffeeDark: "#1C0C01",
      coffee: "#603322",
      coffeeLight: "#fce5b8",
      coffeeWhite: "#fafafa",
    },
    extend: {
      fontFamily: {
        sans: "Poppins",
        playfair: "Playfair Display",
      },
      keyframes: {
        "slide-in": {
          "0%": {
            transform: "translateX(300px)",
          },
          "100%": {
            transform: "translateX(0px)",
          },
        },
      },
      animation: {
        slide: "slide-in 1s ease-in-out",
      },
    },
  },
  plugins: [],
};
