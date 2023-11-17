/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#222230",
        "secondary": "#191927",
        "hijau": "#60FF70",
        "kuning": "#FCD465",
        "biru": "#68B3C8"
      },
      fontFamily: {
        "inter": "Inter"
      }
    },
  },
  plugins: [
    require("daisyui")
  ],
}