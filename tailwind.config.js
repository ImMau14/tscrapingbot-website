/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        purple: {
          1: '#401892',
          2: '#0a0217',
          3: '#05010b',
          4: '#020005'
        },
        silver: {
          1: '#dee6ff'
        },
        blue: {
          1: '#14569d'
        },
        green: {
          1: '#0ac66b'
        }
      },
      fontFamily: {
        heading: ['Montserrat Variable'],
        body: ['Inter Variable']
      }
    }
  },
  plugins: [],
}
