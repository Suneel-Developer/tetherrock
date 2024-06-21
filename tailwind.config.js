/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "sky-blue": "#7c8389",
        "blue_100": "#1aa0ee",
        "gray-100": "rgb(224, 224, 224)",
        "gray-300": "rgba(124,131,137,.6)",
        "black-100": "#212529",
      },
      maxWidth: {
        xlg: "1305px"
      },
      screens: {
        "xlg": "1205px",
        "slg": "992px",
        "xsm": "524px",
        "xxsm": "380px"
      },
      boxShadow: {
        "thumbnailshadow": "-15px 20px 40px 0 rgba(193,193,193,.25)"
      }
    },
  },
  plugins: [],
};
