/** @type {import('tailwindcss').Config} */
module.exports = {
  
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/Components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['Gilroy-Regular', 'Gilroy-Medium', 'Gilroy-SemiBold', 'Gilroy-Bold', 'Gilroy-ExtraBold', 'Gilroy-ExtraBoldItalic'], // 'YourFontName' should match the font name from step 2
      },
    },
  },
  plugins: [],
}
