/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        'light-lavender': '#f6e8ff',
        'lavender-mist': '#f7e8ff',
        'white': '#ffffff',
        'dark-charcoal': '#090211',
        'deep-charcoal': '#090212',
        'charcoal-black': '#080110',
        'midnight-purple': '#251739',
        'charcoal-gray': '#080111',
        'light-purple': '#42315a',
      },
    },
  },
  plugins: [],
}

