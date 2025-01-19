/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      Plus: ['Plus Jakarta Sans', 'serif'],
    },
    extend: {
      screens: {
        '2md': '960px',
      },colors:{
        primary:'#4318FF',
        secandaryText:'#1B2559',
        mainText:'#68769F',
        Secondarybg:'#F6F8FD',
        SecondaryGrey:'#707EAE',
            },
          
          },
    },
  plugins: [],
};

