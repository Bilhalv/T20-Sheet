/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
],
  theme: {
    extend: {
      backgroundImage: {
        'bgT20': "url('/src/img/bgT20.jpg')",
      }
    }
  },
  plugins: [],
}

