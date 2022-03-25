module.exports = {
   content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
   
    
    extend: { 
      fontSize:{
        '4xl': ['40px', {
          lineHeight: '50px',
        }],
        '22l': ['22px', {
          lineHeight: '25px',
        }],
      },
      borderRadius:{
          lg:'10px',
          md:'5px',
          mmd:'7px'
      },
      colors:{
        grey:'#24343f',
        lightGrey:'#c4c4c4',
        darkGrey:'#7d7d7d',
        blue:'#0054a6',
        yellow:'#FFC20E',
        shadaw:"#00000029",
        cardTopYellow:'#FFC22E',
        offWhite:'#f3f3f3',
        offWhite2:'#f4f4f4',
        borderGrey:"#EBEBEB",
        bababa:'#bababa5c',
        black:'#1c1c1c',
        white40Opa:"#ffffff40",
        grey50Opa:"#24343f80",
        dividerColor:"#70707030",
        dividerColor2:"#24343f12",
        overlayBackground:'#000000BE'

      },
      boxShadow: {
        'map': '17px 0px 10px #6D8DAD26',
        'mapAr': '-17px 0px 10px #6D8DAD26',
      }

    },
  },
  plugins: [],
}
