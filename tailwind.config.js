/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './public/index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  darkMode: 'class',
  theme: {
    screens: {
      // /*
      sm: '480px', //*/ sm: '640px', /*
      md: '640px', //*/ md: '768px', /*
      lg: '768px', //*/ lg: '1024px', /*
      xl: '1024px', //*/ xl: '1280px', /*
      '2xl': '1280px', //*/ '2xl': '1536px', /*
      '3xl': '1536px', //*/
    },
    extend: {},
  },
  plugins: [],
};

