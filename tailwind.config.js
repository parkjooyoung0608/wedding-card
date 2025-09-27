/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        birthstone: ['"Birthstone"', "cursive"],
        body: ["system-ui", "Avenir", "Helvetica", "Arial", "sans-serif"],
      },
      keyframes: {
        slideUpFade: {
          "0%": { opacity: "1", transform: "translateY(0)" },
          "100%": { opacity: "0", transform: "translateY(-10px)" },
        },
        twinkle: {
          "0%, 100%": { opacity: "0", transform: "translateY(0) scale(0.5)" },
          "50%": { opacity: "1", transform: "translateY(-10px) scale(1)" },
        },
        barMove: {
          "0%": { transform: "scaleY(1)" },
          "50%": { transform: "scaleY(2)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        slideUpFade: "slideUpFade 1.5s ease-out forwards",
        twinkle: "twinkle 1.5s ease-in-out infinite",
        barMove: "barMove 2s ease-in-out infinite alternate",
      },
    },
  },
};
