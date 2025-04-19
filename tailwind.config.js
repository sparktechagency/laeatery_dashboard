/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0A0A0A",
        secondary: "#DC4600",
        fieldColor: "#333333",
        edit: "#0064DA"
      }
    },
  },
  plugins: [],
}