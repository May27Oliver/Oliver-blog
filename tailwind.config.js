process.env.NODE_ENV === "production";
module.exports = {
  mode: "jit",
  purge: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/pages/*.{js,ts,jsx,tsx}",
    "./src/components/*.{js,ts,jsx,tsx}",
  ],
  content: [],
  theme: {
    extend: {
      colors: {
        "lime-hover": "#25c2a0",
        "normal-color": "#4A4A4A",
      },
      transitionProperty: {
        "font-hover": "all .8s ease-in",
        "blog-left-side": "all 500ms ease-in-out",
      },
      height: {
        "nav-height": "calc( 100% - 60px )",
      },
      flex: {
        "blog-right-side": "0 0 15%",
        "blog-center-side": "1",
      },
      fontSize: {
        "title-size": "2.5rem",
      },
    },
  },
  plugins: [],
};
