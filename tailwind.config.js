/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'tile-green': {
          DEFAULT: 'var(--tile-green)',
          shadow: 'var(--tile-green-shadow)', 
        },
        'tile-purple': {
          DEFAULT: 'var(--tile-purple)',
          shadow: 'var(--tile-purple-shadow)',
        },
        'tile-caribbean-green': {
          DEFAULT: 'var(--tile-caribbean-green)',
          shadow: 'var(--tile-caribbean-green-shadow)',
        },
        'tile-pink': {
          DEFAULT: 'var(--tile-pink)',
          shadow: 'var(--tile-pink-shadow)',
        },
        'tile-orange': {
          DEFAULT: 'var(--tile-orange)',
          shadow: 'var(--tile-orange-shadow)',
        },
        'tile-red': {
          DEFAULT: 'var(--tile-red)',
          shadow: 'var(--tile-red-shadow)',
        },
        'tile-blue': {
          DEFAULT: 'var(--tile-blue)',
          shadow: 'var(--tile-blue-shadow)',
        },
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

