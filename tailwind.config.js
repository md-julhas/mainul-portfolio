/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        kodeMono: ["Kode Mono", "monospace"],
      },
      backgroundImage: {
        "hero-image": "url('/src/assets/hero.jpg')",
      },
      colors: {
        darkModePrimary: "#20232A",
        darkModeSecondary: "#33373E",
        darkModeThird: "#4E535D",
      },
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}
