module.exports = {
  purge: [
    './src/**/*.vue',
    './src/**/*.js',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        default: '2rem',
        lg: '6rem',
        xxl: '12rem'
      },
    },
    screens: {
      xs: '480px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
      xxl: '1980px'
    },
    spacing: {
      '0': '0',
      '6': '.375rem',
      '8': '.5rem',
      '10': '.625rem',
      '14': '.875rem',
      '16': '1rem',
      '18': '1.125rem',
      '32': '2rem',
      '48': '3rem',
      '64': '4rem',
      '80': '5rem',
      '96': '6rem',
      '112': '7rem',
      '128': '8rem',
      '192': '12rem',
      '256': '16rem',
      '384': '24rem',
      '448': '28rem',
      '1/20': '5%',
      '1/2': '50%',
      '3/5': '60%',
      'minus20': '-20%',
      '140': '140%'
    },
    minHeight: {
      '512': '32rem',
      'screen': '100vh'
    },
    maxWidth: {
      '384': '16rem',
      '512': '32rem',
      '672': '42rem',
      '768': '48rem',
      '896': '56rem',
      '960': '60rem',
      '1200': '75rem',
      '3/5': '60%',
      'full': '100%',
      '140': '140%'
    },
    fontSize: {
      xxxs: ['.875rem', '1.142857143'],
      xxs: ['1rem', '1'],
      xs: ['1.125rem', '1.777777778'],
      base: ['1.25rem', '1.6'],
      sm: ['1.5rem', '1.333333333'],
      md: ['1.75rem', '1.142857143'],
      lg: ['2.625rem', '1.142857143'],
      xl: ['3.75rem', '1.066666667'],
      xxl: ['5rem', '1.2'],
      xxxl: ['6rem', '1.166666667']
    },
    lineHeight: {
      '48': '3rem',
      '32': '2rem',
      '16': '1rem',
    },
    fontFamily: {
      sans: ['canada-type-gibson, sans-serif'],
      mono: [
        'Menlo',
        'Monaco',
        'Consolas',
        'Liberation Mono',
        'Courier New',
        'monospace'
      ]
    },
    colors: {
      'light': '#ffffff',
      'dark': '#1C2024',
      'transparent': 'transparent',
      'primary': 'var(--primary)',
      'seconday': 'var(--seconday)',
      'complementary': 'var(--complementary)',
      'complementary-5': 'var(--complementary-5)',
      'complementary-10': 'var(--complementary-10)'
    },
    extend: {

    }
  },
  variants: {
    translate: ['responsive', 'hover', 'focus', 'group-hover']
  }
}
