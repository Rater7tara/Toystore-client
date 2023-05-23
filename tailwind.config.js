/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'nav-img': "url('/src/assets/et_8.jpg')",
        
      }
    },
  },
  plugins: [require("daisyui"), ("tw-elements/dist/plugin.cjs")],
  darkMode: "class"
}

