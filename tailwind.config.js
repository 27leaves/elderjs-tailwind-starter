module.exports = {
  content: ['./src/**/*.{svelte,html,md}'],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  theme: {
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        lg: '4rem',
        xl: '10rem',
        '2xl': '14rem',
      },
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography')
  ],
};
