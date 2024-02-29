/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#00ff",
        secondary: "#ff00ff",
        light: "#fff",
      },
      backgroundImage: {
        "join-page": "url('/assets/images/bgimage.jpg')",
      },
    },
  },
  plugins: [],
};
