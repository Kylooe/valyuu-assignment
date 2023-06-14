/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    colors: {
      'white': '#ffffff',
      'ultra-marine': '#3232fb',
      'jet-black': '#1a1a1a',
    },
    fontSize: {
      p1: ['20px', '30px'],
      p2: ['16px', '24px'],
      p3: ['14px', '21px'],
    },
    screens: {
      desktop: '768px',
    },
    // spacing: {
    //   module: '80px',
    //   card: '20px',
    // },
    extend: {},
  },
  plugins: [],
}

