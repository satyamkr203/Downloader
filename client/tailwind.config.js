
import  flowbite  from 'flowbite-react/tailwind'


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    flowbite.content(),
  ],
  theme: {
    extend: {
      colors:{
        'background_color':'#121212',
      },
      fontFamily:{
        'font_family':'Circular,custom-font,Helvetica Neue,Helvetica,Arial,sans-serif',
      }, 
      borderWidth:{
        'DEFAULT':'0.1px',
        '2': '2px',
        '3': '3px',
        '4': '4px',
        '6': '6px',
      }, 
      fontWeight:{
        'thin':'100',
        'hairline': '100',
        'extralight': '200',
        'light': '300',
        'normal': '350',
        'medium': '500',
        'semibold': '600',
        'bold': '700',
        'extrabold' : '800',
      },
      width:{
        '128':'32rem'
      },
      ringWidth:{
        '1':'0.1px',
        '2':'0.2px',
        '5':'0.5px',
        '10': '10px',
      },
    },
  },
  plugins: [
    flowbite.plugin(),
  ],
}

