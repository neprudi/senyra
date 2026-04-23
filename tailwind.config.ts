import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}', './lib/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        cream: {
          50: '#fcfaf6',
          100: '#f6efe4',
          200: '#eadcc9',
          300: '#d8c2ab',
          400: '#bda27f',
          500: '#9f825d',
          600: '#806645',
          700: '#624d34',
          800: '#463626',
          900: '#2e241c'
        },
        olive: {
          100: '#e8eee1',
          200: '#cfd8bf',
          300: '#afbe93',
          400: '#8d9d69',
          500: '#6f7f4f',
          600: '#55603d'
        },
        graphite: '#2a2622',
        mocha: '#7b5b45',
        blush: '#d9b7a3'
      },
      boxShadow: {
        soft: '0 20px 60px rgba(58, 41, 29, 0.12)',
        glow: '0 16px 40px rgba(94, 72, 45, 0.18)'
      },
      keyframes: {
        rise: {
          '0%': { opacity: '0', transform: 'translateY(14px) scale(0.98)' },
          '100%': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        breathe: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-5px)' }
        }
      },
      animation: {
        rise: 'rise 0.55s ease-out both',
        breathe: 'breathe 6s ease-in-out infinite'
      }
    }
  },
  plugins: []
};

export default config;
