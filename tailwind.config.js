module.exports = {
  mode: "jit",
  purge: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        body: ["Asap", "sans-serif"],
      },
      Height: {
        md: "16px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
 
  ],
};
