module.exports = {
  mode: 'jit',
  content: ['./src/**/*.{js,jsx,ts,html}', './public/index.html'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    screens:{//customised screens
      'xsm':'200px',
      'smx': '280px',
      'sm':'320px',
      '2sm':'450px',
      '3sm':'550px',
      '4sm':'603px',
      'md': '640px',
      '1md': '725px',
      '2md': '768px',
      '3md': '800px',
      '4md': '900px',
      'lg':'960px',
      'xl': '1024px',
      '2xl': '1280px',
      '3xl': '1536px',
      '4xl': '2560px',
    },
    extend: {
      fontSize:{
        'xxs': '.575rem'
      },
      fontFamily:{
        serif_display: ['DM Serif Display', 'serif'],
        monteserrat: ['Montserrat', 'sans-serif'],
      },
      colors:{
        'clr-1': '#090602',
        'clr-2': '#161859',
        'clr-3': '#BFC1FD',
        'clr-4': '#D39E2A',
        'clr-5': '#F7F7FD',
      },
      backgroundImage:{
        'bg1': "url('./src/tailwind/newsletter.svg')"
      //   'bg2': "url('./images/bg-2.jpg')",
      //   'bg3': "url('./images/bg-3.jpg')"
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: ["postcss"]
};
