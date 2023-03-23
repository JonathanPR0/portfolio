// @type {import('tailwindcss').Config}
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      background: '#1f1f38',
      backgroundVariant: '#2c2c6c',
      primary: '#4db5ff',
      primaryVariant: 'rgba(77,181,255,0.4)',
      colorLight: 'rgba(255,255,255,0.6)',
      white: '#fff',
      blackNavBar: 'rgba(0,0,0, 0.3)',
      transparentColor: 'rgba(255,255,255,0)',
    },
  },
  plugins: [],
};
