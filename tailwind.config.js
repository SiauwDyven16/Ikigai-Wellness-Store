/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#162648",
        secondary: "#1945A4",
        dark: "#000000",
        text: "#ffffff",
        border: "#ffffff20",
      },
      fontFamily: {
        'zen': ['"Zen Maru Gothic"', 'sans-serif'],
        'impact': ['"Impact"', 'sans-serif'],
      },
      fontSize: {
        'display': '4rem',
        'heading': '2rem',
        'subheading': '1.25rem',
        'body': '1rem',
        'small': '0.875rem',
      },
    },
  },
  plugins: [],
}
