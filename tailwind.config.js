/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundSize: {
        "200%": "200%",
      },
      colors: {
        gold: "#C9973A",
        "gold-light": "#E8B84B",
        navy: "#1A2540",
        cream: "#F9F7F2",
      },
      fontFamily: {
        outfit: ["Outfit", "sans-serif"],
        playfair: ["Playfair Display", "serif"],
      },
      animation: {
        "shimmer": "shimmer 3s linear infinite",
        "float": "float 4s ease-in-out infinite",
        "pulse-gold": "pulse-gold 2s ease-in-out infinite",
        "fade-up": "fadeInUp 0.7s ease forwards",
        "fade-left": "fadeInLeft 0.7s ease forwards",
        "fade-right": "fadeInRight 0.7s ease forwards",
      },
    },
  },
  plugins: [],
}