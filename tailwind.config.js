/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'white': '#ffffff',
        'ultra-marine': '#3232fb',
        'jet-black': '#1a1a1a',
        background: '#f4f4f4',
      },
      fontSize: {
        p1: ['20px', '30px'],
        p2: ['16px', '24px'],
        p3: ['14px', '21px'],
      },
      screens: {
        desktop: '1024px',
      },
      borderRadius: {
        small: '5px',
        large: '10px',
      },
      rotate: {
        '7': '7deg',
      },
      spacing: {
        module: '72px',
      },
    },
  },
  plugins: [],
}

