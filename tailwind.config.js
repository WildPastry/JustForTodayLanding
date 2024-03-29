/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background)',
        darkBlue: 'var(--darkBlue)',
        midBlue: 'var(--midBlue)',
        spotBlue: 'var(--spotBlue)',
        text: 'var(--text)'
      },
      fontFamily: {
        InterBold: ['InterBold'],
        InterLight: ['InterLight'],
        InterRegular: ['InterRegular'],
        SpaceMonoBold: ['SpaceMonoBold'],
        SpaceMonoRegular: ['SpaceMonoRegular']
      },
      width: {
        700: '700px'
      }
    }
  },
  plugins: []
};
