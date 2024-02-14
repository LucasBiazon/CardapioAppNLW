/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: 'Inter_600semiBold',
        subtitle: 'Inter_500Medium',
        body: 'Inter_400Regular',
        bold: 'Inter_700Bold',
      },
    },
  },
  plugins: [],
}

