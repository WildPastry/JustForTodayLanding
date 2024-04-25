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
        '150': '150px',
        '200': '200px',
        '250': '250px',
        '300': '300px',
      },
      screens: {
        'max460': {'max': '460px'},
        'max674': {'max': '674px'},
        'max783': {'max': '783px'},
        'min1120': {'min': '1120px'},
        'min460': {'min': '460px'},
        'min460max674': {'min': '460px','max': '674px'},
        'min674': {'min': '674px'},
        'min674max790': {'min': '674px','max': '790px'},
        'min790max850': {'min': '790px', 'max': '850px'},
        'min850max935': {'min': '850px', 'max': '935px'},
        'min935max1120': {'min': '935px', 'max': '1120px'}
      },
      width: {
        700: '700px'
      }
    }
  },
  plugins: []
};
