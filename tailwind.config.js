/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
       
      },
      fontFamily: {
        'din-round': ['din-round', 'sans-serif'],
        'din-round-light': ['din-round-light', 'sans-serif'],
      }
      
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        '.no-scrollbar': {
          '-ms-overflow-style': 'none', // IE and Edge
          'scrollbar-width': 'none',    // Firefox
        },
        '.no-scrollbar::-webkit-scrollbar': {
          display: 'none',              // Chrome, Safari, and Opera
        },
      };
      addUtilities(newUtilities);
    },
  ],
}

