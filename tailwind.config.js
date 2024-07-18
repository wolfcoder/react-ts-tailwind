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
        VINRed: "#C54644",
        
      },

    },
  },
  plugins: [],
}

