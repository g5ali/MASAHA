/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gold: {
          900: '#D4AF37', // Primary gold
          800: '#E5C25B', // Lighter gold
          700: '#F2D57E', // Even lighter gold
          600: '#F7E3A3', // Very light gold
          500: '#FAF0C8', // Almost white gold
        },
        black: {
          900: '#0A0A0A', // Primary black
          800: '#121212', // Slightly lighter black
          700: '#1A1A1A', // Even lighter black
          600: '#222222', // Almost dark gray
          500: '#2A2A2A', // Dark gray
        },
      },
      fontFamily: {
        sans: ['Poppins', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      animation: {
        'pulse-gold': 'pulse-gold 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        'pulse-gold': {
          '0%, 100%': {
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.2)',
          },
          '50%': {
            boxShadow: '0 0 12px rgba(212, 175, 55, 0.6)',
          },
        },
      },
    },
  },
  plugins: [],
};