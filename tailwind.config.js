/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        customGreen: 'rgba(190, 239, 84, 1)',
        customBlack: 'rgba(21, 21, 24, 1)',
        customPurple: 'rgba(129, 118, 255, 1)',
        dashboardCustomPurple: 'rgba(17, 14, 34, 1)'
      },
    },
  },
  plugins: [],
}

