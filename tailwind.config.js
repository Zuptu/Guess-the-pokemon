/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        'primary-color': '#141414',
        'secondary-color': '#F2F3F3',
        'dark-custom': '#000000f0'
      },
    },
  },
  plugins: [],
};
