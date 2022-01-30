module.exports = {
  // mode: 'jit',
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {
      fontFamily: {
        display: ['BellTopo Sans'],
        body: ['work-sans'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: null,
          },
        },
      },
    },
  },

  plugins: [require('@tailwindcss/typography'), require('daisyui')],
}

// module.exports = config
