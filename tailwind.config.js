/** @type {import('tailwindcss').Config} */
module.exports = {
   content: [
       "./resources/**/*.js",
   ],
   theme: {
       extend: {
           width: {
               128: "80rem",
           },
       },
   },
   plugins: [require('flowbite/plugin')],
   
};