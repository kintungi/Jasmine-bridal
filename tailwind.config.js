/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}',
  './components/**/*.{js,ts,jsx,tsx}',],
  theme: {
    extend: {
      colors: {
        "woody": "#8C6339",
        "white": "#ffffff",
        "yellow": "#D99959",
        "midnight": "#3A798C",
        "purple": "#9E86DA",
        "maroon": "#994B37",
        "defaultText": "#6E451B",
        "lightText": "#ffffff",
        "subtleText": "#D1B08F",
        "errorUI": "#F64B4B",
        "successUI": "#12CA50",
        "uiDark": "#1E1A15",
        "uiLight": "#F5F2EF"
      },
      fontFamily: {
        messina : ["messina"],
        walkingrush : ["walkingrush"]
      },
      spacing: {
        2: "0.125rem",
        4: "0.25rem",
        8: "0.5rem",
        12: "0.75rem",
        16: "1rem",
        24: "1.5rem",
        32: "2rem",
        36: "2.25rem",
        48: "3rem",
        64: "4rem",
        72: "4.5rem",
        96: "6rem",
        128: "8rem",
        144: "9rem",
        192: "12rem",
        256: "16rem"
      }
    },
  },
  plugins: [],
}
