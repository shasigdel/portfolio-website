/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        bodyFont: ["Poppins", "san-serif"],
        titleFont: ["Montserrat", "sans-serif"],
      },
      colors: {
        bodyColor: "#0c1321",
        lightText: "#CCD7D0",
        boxBg: "linear-gradient(145deg, #1e2024, #23272b)",
        designColor: "#77B255",  // Soft Gold (Elegant and modern)
      },
        
      boxShadow: {
        shadowOne: "10px 10px 19px #1c1e22, -10px -10px 19px #262a2e",
      },
    },
  },
  plugins: [],
}
