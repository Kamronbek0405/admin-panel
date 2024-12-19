/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bground: 'rgba(1, 56, 77, 1)',
        bgactive: 'rgba(234, 191, 159, 1)'
      },
    },
  },
  plugins: [],
}