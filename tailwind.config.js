/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'ant-primary': '#1a5632',
        'ant-secondary': '#8b5a2b',
      }
    },
  },
  plugins: [],
}
