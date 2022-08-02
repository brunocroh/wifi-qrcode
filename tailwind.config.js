/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Rubik', 'sans-serif'],
        karla: ['Karla', 'sans-serif']
      },
      colors: {
        primary: {
          50: '#effdf6',
          100: '#defbee',
          200: '#cef8e5',
          300: '#bdf6dc',
          400: '#adf4d4',
          500: '#9df2cb',
          600: '#8cf0c2',
          700: '#7cedb9',
          800: '#6bebb1',
          900: '#5be9a8',
        },
        offblack: {
          50: '#212122'
        }
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}
