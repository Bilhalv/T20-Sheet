/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      mobile: "320px",
      laptop: "1800px",
      desktop: "1366px",
    },
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0, 1fr))',
      },
      backgroundImage: {
        bgT20: "url('/public/img/bgT20.jpg')",
        d20: "url('/public/img/d20.png')",
      },
    },
    fontFamily: {
      tormenta: ["tormenta","sans-serif" ],
      serif: ['ui-serif', 'Georgia'],
    }
  },
  plugins: [],
};
