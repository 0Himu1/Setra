/* eslint-disable import/no-import-module-exports */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
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
