/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}", 
    "./components/**/*.{js,ts,jsx,tsx}", 
    "./styles/**/*.css", 
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  
  darkMode: 'class', // Enables dark mode via class switching
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#2563EB", 
          dark: "#60A5FA", 
        },
        background: {
          light: "#F9FAFB",
          dark: "#111827",
        },
        textPrimary: {
          light: "#111827",
          dark: "#F9FAFB",
        },
        textSecondary: {
          light: "#4B5563",
          dark: "#D1D5DB",
        },
      },
      fontFamily: {
        sans: ["Manrope", "sans-serif"],
        body: ["DM Sans", "sans-serif"],
        display: ["Space Grotesk", "sans-serif"],
      },
    },
  },
  plugins: [],
};

