/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      width: {
        '100': '30rem',
        '128': '40rem',
      },
      height: {
        '100': '30rem',
        '128': '40rem',
      },
    },
  },
  plugins: [],
};
