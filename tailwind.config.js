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
        7: "repeat(7, minmax(0, 1fr))",
      },
      backgroundImage: {
        bgT20: "url('/public/img/bgT20.jpg')",
        d20: "url('/public/img/d20.svg')",
        arcana: "url('/public/img/magias/classificacao/arcana.png')",
        divina: "url('/public/img/magias/classificacao/divina.png')",
        universal: "url('/public/img/magias/classificacao/universal.png')",
      },
      keyframes: {
        "fade-in-left": {
          "0%": { opacity: "0", transform: "translateX(-100%)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        "fade-out-left": {
          "0%": { opacity: "1", transform: "translateX(0)" },
          "100%": { opacity: "0", transform: "translateX(-100%)" },
        },
      },
      animation: {
        "fade-in-left": "fade-in-left 0.2s ease-in",
        "fade-out-left": "fade-out-left 0.2s ease-out",
      },
    },
    fontFamily: {
      tormenta: ["tormenta", "sans-serif"],
      serif: ["ui-serif", "Georgia"],
    },
  },
  plugins: [],
};
