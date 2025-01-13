/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      // keyframes: {
      //   scroll: {
      //     "0%": {
      //       transform: translateX(0)
      //     },
      //     "100%": {
      //       transform: translateX(-100)
      //     }
      //   }
      // },
      // animation: {
      //   scroll: "1s linear"
      // },
      backgroundImage: {
        "hero-bg": "url('./assets/bg.svg')" // Add your custom background image here
      }
    }
  },
  plugins: []
};
