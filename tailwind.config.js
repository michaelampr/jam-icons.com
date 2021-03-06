module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    fontFamily: {
      body: [
        "Segoe UI",
        "-apple - system",
        "BlinkMacSystemFont",
        "Roboto",
        "Oxygen",
        "Ubuntu",
        "Cantarell",
        "Helvetica Neue",
        "Fira Sans",
        "Droid Sans",
        "Arial",
        "sans - serif",
        "Apple Color Emoji",
        "Segoe UI Emoji",
        "Segoe UI Symbol",
      ],
    },
    extend: {
      colors: {
        yellow: {
          500: "#f5c25a",
        },
        gray: {
          100: "#fff",
          200: "#f1f1f4",
          300: "#F7F7F8",
          400: "#CED1D3",
          500: "#9DA3A8",
          600: "#6C757C",
          700: "#4C5760",
          800: "#32363a",
          900: "#23282C",
        },
      },
      borderRadius: {
        xl: "20px",
      },
    },
  },
  variants: {},
  plugins: [],
}
