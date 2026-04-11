/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#e50914",
        secondary: "#ffffff",
        dark: "#000000",
        text: "#ffffff",
        border: "#ffffff20",
      },
      fontFamily: {
        'netflix': ['"Netflix Sans"', 'sans-serif'],
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
