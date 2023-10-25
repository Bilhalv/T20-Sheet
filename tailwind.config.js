/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "640px",
      laptop: "1700px",
      desktop: "1366px",
    },
    extend: {
      backgroundImage: {
        bgT20: "url('/public/img/bgT20.jpg')",
      },
    },
  },
  plugins: [],
};
