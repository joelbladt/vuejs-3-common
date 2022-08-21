const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': {
          fontSize: '8vw',
          letterSpacing: '-5px',
          fontWeight: theme('fontWeight.bold')
        },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
}
