import { nextui } from "@nextui-org/react"

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <-- оставь только эту строку
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'xxs': '320px', // кастомний брейкпоінт
      },
      animation: {
        'spin-slow': 'spin 12s linear infinite',
      },
      backgroundImage: {
        'custom-image': "url('/src/assets/1.jpg')",
      },
      animation: {
        'pulse-ring': 'pulse-ring 0.8s ease-out forwards',
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(0)', opacity: '0.5' },
          '100%': { transform: 'scale(2)', opacity: '0' },
        },
      },
    },
  },
  plugins: [nextui()],
}
