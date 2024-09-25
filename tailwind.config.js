const withMT = require("@material-tailwind/react/utils/withMT");


module.exports =withMT({
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      colors: {
        primary: '#f97316', 
      },
      keyframes: {
        wave: {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        move: {
          '30%': { transform: 'translateY(20px)' },
          '0%': { transform: 'translateX(0, 0)' },
          '50%': { transform: 'translate(20px, 0)' },
          '90%': { transform: 'translate(0, 0)' },
        },
        moveLR: {
          '0%, 100%': { transform: 'translateY(10px)' }, // Original position
          '50%': { transform: 'translateY(-10px)' },   // Move up by 20px

        },

      },
      animation: {
        'bounce-slow': 'bounce 5s infinite',
        'spin-slow': 'spin 7s linear infinite',
        'pulse-fast': 'pulse 5s infinite',
        'move-up-down': 'moveLR 3s ease-in-out infinite',
         move: 'move 10s ease-in-out infinite',
        wave: 'wave 2s ease-in-out infinite', // Color wave animation (extended time for smooth motion)
      },
      backgroundImage: {
        'gradient-wave': 'linear-gradient(220deg, #F97316, #FB923C, #EA580C, #F97316)', // Corresponding colors for orange-500, orange-400, and orange-700
      },
      backgroundSize: {
        '200%': '20% 200%', // Makes the background bigger than the container to move
      },

      
    },
  },
  plugins: [],
})
