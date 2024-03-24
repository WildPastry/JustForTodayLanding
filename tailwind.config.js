/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        spotBlue: 'var(--spotBlue)',
        text: 'var(--text)'
      },
      fontFamily: {
        display: ['SpaceMonoRegular'],
        displayBold: ['SpaceMonoBold']
      }
    }
  },
  plugins: []
};
