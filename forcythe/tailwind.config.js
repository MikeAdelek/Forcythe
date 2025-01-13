/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        "border-light": {
          "0%": { backgroundPosition: "0% 50%" },
          "100%": { backgroundPosition: "100% 50%" }
        }
      },
      animation: { "border-slide": "border-slide 3s linear infinite" },
      backgroundImage: {
        "hero-bg": "url('./assets/bg.svg')" // Add your custom background image here
      }
    }
  },
  variants: {},
  plugins: []
};
