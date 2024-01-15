/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#32375C',
        '2nd': '#222',
      },
    },
    fontFamily: {
      'inter': ['Inter']
    },
    maxWidth: {
      'container': '1200px',
    },
  },
  plugins: [],
}

