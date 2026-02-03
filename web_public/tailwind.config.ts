import type { Config } from 'tailwindcss';

export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'Noto Sans JP', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        dark: {
          900: '#1a1a1a',
          800: '#2a2a2a',
          700: '#3a3a3a',
        },
        beige: {
          50: '#faf9f7',
          100: '#f5f3f0',
          200: '#ebe8e3',
        },
        vibrant: {
          pink: '#FF6B9D',
          orange: '#FF8C42',
          yellow: '#FFD93D',
          green: '#6BCF7F',
          cyan: '#4ECDC4',
          purple: '#A78BFA',
        },
        brand: {
          yellow: '#FFD700',
          'yellow-light': '#FFED4E',
          'yellow-dark': '#FFC700',
          black: '#000000',
          red: '#FF4444',
        },
      },
      letterSpacing: {
        'wider-xl': '0.15em',
      },
    },
  },
  plugins: [],
} satisfies Config;
