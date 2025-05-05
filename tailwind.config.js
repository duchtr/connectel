

module.exports = {

  content: ["./public/**/*.{html,js}"],

  theme: {

    extend: {

      fontFamily: {

        'Manrope': ['"Manrope"'],

        'Poppins':['"Poppins"'],
   

      },

      screens: {

        "sm": "576px",

        "md": "768px",

        "lg": "1024px",

        "xl": "1280px",

        "2xl": "1534px",

      },

      container: {

        center: true,

      },

 

    },

  },

  plugins: [

    require('@tailwindcss/line-clamp'),

  ],

}

