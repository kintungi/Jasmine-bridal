/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        "primaryWoody": "#8C6339",
        "primaryWhite": "#ffffff",
        "secondaryYellow": "#D99959",
        "secondaryMidnight": "#3A798C",
        "secondaryPurple": "#9E86DA",
        "secondaryMaroon": "#994B37",
        "dark-text": "#6E451B",
        "light-text": "#ffffff",
        "subtle-text": "#D1B08F",
        "errorUI": "#F64B4B",
        "successUI": "#12CA50",
      },
      fontFamily: {
        messina : ["messina"],
        walkingrush : ["walkingrush"]
      }
    },
  },
  plugins: [],
}
