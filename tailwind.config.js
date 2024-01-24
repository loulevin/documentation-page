/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // light mode
        "color-bg-light": "#cce3de", // mint green 
        "color-text-light": "#151C19", // Eerie Black
        "color-nav-light": "#6b9080", // Viridian
        "color-accent-light": "#a4c3b2", // cambridge blue
  
        // dark mode
         "color-bg-dark": "#1a535c", // midnight green
         "color-text-dark": "#ebf5f7", // alice blue
         "color-nav-dark": "#2998a9", // blue(munsell)
        "color-accent-dark": "#6db9c4", // moonstone
      },
      fontFamily: {
        "font-header": ["Montserrat", "sans-serif"],
        "font-body": ["Poppins", "sans-serif"]
      }
    },
  },
  plugins: [],
}

