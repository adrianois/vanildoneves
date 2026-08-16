module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        azul: {
          DEFAULT: "#0066cc",
          soft: "#e6f0ff",
        },
        verde: {
          DEFAULT: "#00a651",
          soft: "#e6f5ed",
        },
        dourado: {
          DEFAULT: "#ffd700",
          dark: "#b89600",
          soft: "#fff8e6",
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
