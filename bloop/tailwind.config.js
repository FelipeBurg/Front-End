export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'bp1': '400px',
        'bp2': '689px',
        'bp3': '948px',
        'bp4': '1200px',
      },
      colors: {
        textColor: "#505050",
        'amber-custom': '#FFC65B',
        'orange-custom': '#F38425',
        'customBlue': '#0070C0',
        'customGreen': '#01a982',
      },
      fontFamily: {
        'irish-grover': ['"Irish Grover"', 'cursive'],
        'inria': ['"Inria Sans"', 'sans-serif'],
        
      },
    },
  },
  plugins: [],
}
