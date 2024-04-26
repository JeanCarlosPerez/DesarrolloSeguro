/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  daisyui: {
    themes: [
      {
        mytheme: {
        
"primary": "#00ceb4",
        
"secondary": "#007900",
        
"accent": "#00ec00",
        
"neutral": "#0e010a",
        
"base-100": "#242944",
        
"info": "#00e0ff",
        
"success": "#32b231",
        
"warning": "#b68f00",
        
"error": "#ef546e",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

