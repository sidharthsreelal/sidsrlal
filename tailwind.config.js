/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          dark: '#3e4d19',
          darker: '#2c3711',
        },
        offwhite: '#e6daaa',
        text: '#333333', // Softened dark gray for body text
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        serif: ['"Times New Roman"', 'serif'],
        mono: ['"JetBrains Mono"', '"Fira Code"', 'monospace'],
      },
    },
  },
  plugins: [],
}