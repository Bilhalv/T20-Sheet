/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      desktop: "1280px",
    },
    extend: {
      backgroundImage: {
        bgT20: "url('/public/img/bgT20.jpg')",
      },
    },
  },
  plugins: [],
};
