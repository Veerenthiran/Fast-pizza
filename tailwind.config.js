/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans:"Roboto mono, monospace",
    },
  
    extend: {
      colors: {
        pizza:"#123456"
    },
  },
},  
  plugins: [],
};
