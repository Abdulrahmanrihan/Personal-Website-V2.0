/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        hero: '#080e1a',
      },
      animation: {
        'aurora-1': 'aurora1 9s ease-in-out infinite',
        'aurora-2': 'aurora2 13s ease-in-out infinite',
        'aurora-3': 'aurora3 17s ease-in-out infinite',
        'marquee': 'marquee 35s linear infinite',
        'blink': 'blink 1s step-end infinite',
        'fadeUp': 'fadeUp 0.6s ease-out both',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        aurora1: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.6' },
          '33%': { transform: 'translate(80px, -60px) scale(1.2)', opacity: '0.85' },
          '66%': { transform: 'translate(-40px, 40px) scale(0.85)', opacity: '0.5' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.4' },
          '50%': { transform: 'translate(-80px, -60px) scale(1.3)', opacity: '0.7' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate(0, 0) scale(1)', opacity: '0.3' },
          '25%': { transform: 'translate(40px, 60px) scale(1.1)', opacity: '0.5' },
          '75%': { transform: 'translate(-60px, -30px) scale(0.9)', opacity: '0.4' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        blink: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0' },
        },
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(24px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
