/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f2cf74',
        secondary: '#24b243',
        dimWhite: '#fbf6f2',
        dimBlack: '#232323',
      },

      fontFamily: {
        Aclonica: ['Aclonica', 'sans-serif'],
        Qwigley: ['Qwigley', 'cursive'],
        DMSans: ['DM Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
