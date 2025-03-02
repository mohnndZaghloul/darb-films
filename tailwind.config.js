/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1200px",
        "2xl": "1440px",
      },
      padding: {
        DEFAULT: "1rem",
        sm: "1rem",
        lg: "1.5rem",
        xl: "2rem",
      },
    },
    extend: {
      colors: {
        primary: "#primary",
        Secondary: "#secondary",
        grayText: "#textColor",
      },
    },
  },
  plugins: [],
};
