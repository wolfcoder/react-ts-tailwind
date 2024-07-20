/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['"Proxima Nova"', 'sans-serif'],
      },
      colors: {
        VINBlue: "#002855",
        VINBlueLight: "#6CACE4",
        VINBlueLighter: "#eff5ff",
        VINGold: "#B3A369",
        VINYellowLight: "#F7F7F7",
        VINBrown: "#D7D2CB",
        VINRed: "#C54644",
        
      },

    },
  },
  // eslint-disable-next-line no-undef
  plugins: [require("@tailwindcss/forms")],
}

