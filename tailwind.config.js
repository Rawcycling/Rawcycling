/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
      sm: { max: "650px" }, // Small devices (mobile phones, up to 639px)
      md: { min: "651px", max: "1024px" }, // Medium devices (tablets, up to 767px)
      xl: { max: "1279px" }, // Extra large devices (large desktops, up to 1279px)
      "2xl": { max: "1535px" }, // Custom breakpoint for larger screens (up to 1535px)
    },
    extend: {
      fontFamily: {
        inter: ["Inter"],
      },
    },
  },
  plugins: [],
};
