/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // watches all your React files
  ],
  theme: {
    extend: {
      fontFamily: {
        georgia: ['Georgia', 'serif'], // 👈 you can now use `font-georgia`
      },
      colors: {
        primary: '#2a2a72',
        secondary: '#009ffd',
        neuroPurple: '#6b21a8',
      },
      keyframes: {
        zoom: {
          '0%': { transform: 'scale(0.6)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      animation: {
        zoomIn: 'zoom 3s ease-out forwards',
      },
    },
  },
  plugins: [],
};
