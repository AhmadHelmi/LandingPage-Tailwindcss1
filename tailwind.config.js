// tailwind.config.js
module.exports = {
  purge: ['./public/**/*.html', './public/**/*.js'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      transparent: 'transparent',
      orange: '#FF7143',
      darkorange: '#9f3919',
      darkblue: '#5454D4',
      darkblue2: '#3f3f9f',
      black: '#19191B',
      black2: '#1d293f',
      gray: '#696871',
      graylight: '#e7e7e7',
      white: '#fff',
      whitelight: '#F7F7FB',
      whitelighter: '#f8f8f8',
    },
    fontSize: {
      xs: '.75rem',
      sm: '.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.5rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '5rem',
    },
    fontFamily: {
      body: ['DM Sans'],
      mulish: ['Mulish'],
    },
    extend: {},
  },
  variants: {},
  plugins: [],
};
