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
      },fontSize: {
        '100': '100px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      screens: {
        'xtraLarge': {'min': '1120px'},
        'large': {'min': '935px', 'max': '1120px'},
        'medium': {'min': '850px', 'max': '935px'},
        'small': {'min': '790px', 'max': '850px'},
        'xtraSmall': {'max': '790px'},
      },
      width: {
        700: '700px'
      }
    }
  },
  plugins: []
};
