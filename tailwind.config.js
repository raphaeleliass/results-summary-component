/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primarylightred: 'hsl(0, 100%, 67%)',
        primaryorangeyyellow: 'hsl(39, 100%, ,56%)',
        primarygreenteal: 'hsl(166, 100%, 37%)',
        primarycobaltblue: 'hsl(234, 85%, 45%)',
        gradientLightslateblue: 'hsl(252, 100%, 67%)',
        gradientLightroyalblue: 'hsl(241, 81%, 54%)',
        circleVioletblue: 'hsla(256, 72%, 46%, 1)',
        circlePersianblue: 'hsla(241, 72%, 46%, 0)',
        neutralWhite: 'hsl(0, 0%, 100%)',
        neutralPaleblue: 'hsl(221, 100%, 96%)',
        neutralLightlavender: 'hsl(241, 100%, 89%)',
        neutralDarkgrayblue: 'hsl(224, 30%, 27%)'
      },
      fontSize: {
        paragraph: '18px'
      },
      fontFamily: {
        Hanken: ['Hanken Grotesk', 'sans-serif']
      },
      width: {
        card: '732px'
      },
      height: {
        card: '512px'
      }
    },
  },
  plugins: [],
}

