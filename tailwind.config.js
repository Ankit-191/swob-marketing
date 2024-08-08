/** @type {import("tailwindcss").Config} */
const tailwind = {
  content: [
    "./app.vue",
    "./components/**/*.{vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./modules/**/*.{vue,ts}",
  ],

  theme: {
    fontFamily: {
      sans: ["Inter var", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    colors: ({ colors }) => ({
      transparent: "transparent",
      current: "currentColor",
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      cyan: {
        ["400"]: "#67e8f9",
        ["500"]: "#06b6d4",
        ["600"]: "#0e7490",
      },
      "black-light": "#404040",
      "black-gray": "#090914",
      "black-light-gray": "#18181B",
      yellow: "#FFC229",
      "gray-light": "#DEDEDE",
      "gray-dark": "#16151C",
      "white-light": "#F5F5F5",
      "black-dark": "#171717",
      "white-dark": "#646464",
      red: "#D80027",
    }),
    fontSize: {
      xs: "12px",
      sm: "14px",
      base: "16px",
      md: "17px",
      lg: "18px",
      xl: "20px",
      "2xxl": "27px",
      "3xl": "30px",
      "4xl": "36px",
      "4xxl": "40px",
      "5xl": "48px",
      "5xxl": "54px",
      "6xxl": "56px",
      "6xl": "60px",
    },
    lineHeight: {
      110: "110%",
      120: "120%",
      130: "130%",
      140: "140%",
      150: "150%",
    },
    boxShadow: {
      "nav-shadow": "0px 0px 15px 0px #00000012",
      "faqs-shadow": "0px 21px 15px -3px #0000001A",
    },
    backgroundImage:{
      "light-yellow": "linear-gradient(192.34deg, #FFD364 0%, #FFBB10 98.09%);",
    },
    maxWidth: ({ theme, breakpoints }) => ({
      none: "none",
      fit: "fit-content",
      full: "100%",
      max: "max-content",
      min: "min-content",
      ...breakpoints(theme("screens")),
    }),
    aspectRatio: {
      auto: "auto",
      ["1/1"]: "1/1",
      ["1/2"]: "1/2",
      ["2/1"]: "2/1",
      ["4/3"]: "4/3",
      ["3/4"]: "3/4",
      ["16/9"]: "16/9",
      ["9/16"]: "9/16",
    },
    extend: {
      borderColor: { DEFAULT: "currentColor" },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(300px, 1fr))",
      },
    },
  },

  plugins: [
    // polyfill for future pseudo selector :enter that combines :hover and :focus
    ({ addVariant }) => addVariant("enter", ["&:hover", "&:focus"]),
    // lowers specifity to allow overrides
    ({ addVariant }) => addVariant("base", "html :where(&)"),
    // style direct children
    ({ addVariant }) => addVariant("children", "& > *"),
  ],
}

module.exports = tailwind
