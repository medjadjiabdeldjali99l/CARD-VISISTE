/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#455F88',
        'primary-dim': '#39537C',
        surface: '#F7F9FB',
        'surface-container-low': '#F0F4F7',
        'surface-container-lowest': '#FFFFFF',
        'on-surface': '#2A3439',
        'on-surface-variant': '#566166',
        'outline-variant': 'rgba(169, 180, 185, 0.15)',
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        manrope: ["Manrope", "sans-serif"],
      },
      borderRadius: {
        'xl': '1.5rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
