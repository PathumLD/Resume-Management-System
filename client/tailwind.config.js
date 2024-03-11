/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-text" : "#313131",
        "blue" : "#2400FF",
        "blue-text" : "#000050",
        "background" : "#5F5FFF",
        "subheading" : "#5869FC",
      }
    },
    // borderRadius: {
    //   "curve" : "100px",
    // }
  },
  plugins: [],
}