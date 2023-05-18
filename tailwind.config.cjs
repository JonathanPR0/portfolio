// @type {import('tailwindcss').Config}
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#152340',
        backgroundVariant: '#1B3059',
        primary: '#4371CC',
        primaryVariant: 'rgba(67, 113, 204,0.4)',
        colorLight: 'rgba(244,235,255,0.6)',
        white: '#fff',
        blackNavBar: 'rgba(0,0,0, 0.3)',
        transparentColor: 'rgba(255,255,255,0)',
        feedback: '#7FAA32',
      },
    },
  },
  plugins: [],
};
