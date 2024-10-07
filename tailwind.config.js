/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}", "node_modules/preline/dist/*.js"],

  theme: {
    extend: {
      aria: {
        current: "current='page'",
      },

      fontSize: {
        xxs: "0.625rem",
      },

      // borderRadius: {},

      boxShadow: {
        modal: "0px 12px 32px rgba(99, 99, 99, 0.12)",
        card: "0px 2px 10px rgba(92, 92, 97, 0.02)",
        dropdown: "0px 4px 6px rgba(0, 0, 0, 0.09)"
      },

      transitionDuration: {
        DEFAULT: "250ms",
      },
    },

    container: {
      center: true,
      padding: "1.5rem",
    },

    fontFamily: {
      tajawal: ["Tajawal", "sans-serif"],
    },

    colors: {
      white: "#fff",
      transparent: "transparent",

      black: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#6d6d6d",
        600: "#5d5d5d",
        700: "#3F3F46",
        800: "#454545",
        900: "#3d3d3d",
        950: "#000000",

        DEFAULT: "#171717",
      },

      primary: {
        50: "#fdf5ef",
        100: "#fae7da",
        200: "#f3cdb5",
        300: "#ecab85",
        400: "#e38054",
        500: "#dd6438",
        600: "#ce4928",
        700: "#ab3823",
        800: "#892e23",
        900: "#6f291f",
        950: "#3b120f",

        DEFAULT: "#DD6438",
      },

      green: {
        50: "#f0fdf5",
        100: "#dcfce8",
        200: "#bbf7d1",
        300: "#86efad",
        400: "#4ade81",
        500: "#22c55e",
        600: "#16a34a",
        700: "#15803c",
        800: "#166533",
        900: "#14532b",
        950: "#052e14",

        DEFAULT: "#16a34a",
      },

      red: {
        50: "#fff2f1",
        100: "#ffe2e0",
        200: "#ffc8c5",
        300: "#ffa39d",
        400: "#ff6e65",
        500: "#fe4135",
        600: "#ed3024",
        700: "#c7190e",
        800: "#a41910",
        900: "#881b14",
        950: "#4a0905",

        DEFAULT: "#ed3024",
      },

      gray: {
        50: "#f6f6f6",
        100: "#e7e7e7",
        200: "#d1d1d1",
        300: "#b0b0b0",
        400: "#888888",
        500: "#737373",
        600: "#5d5d5d",
        700: "#4f4f4f",
        800: "#454545",
        900: "#3d3d3d",
        950: "#262626",

        DEFAULT: "#737373",
      },

      yellow: {
        50: "#fff4ed",
        100: "#ffe6d5",
        200: "#feccaa",
        300: "#fdac74",
        400: "#fb8a3c",
        500: "#f97316",
        600: "#ea670c",
        700: "#c2570c",
        800: "#9a4a12",
        900: "#7c3d12",
        950: "#432007",

        DEFAULT: "#f97316",
      },

      blue: {
        50: "#eff5ff",
        100: "#dbe8fe",
        200: "#bfd7fe",
        300: "#93bbfd",
        400: "#609afa",
        500: "#3b82f6",
        600: "#2570eb",
        700: "#1d64d8",
        800: "#1e55af",
        900: "#1e478a",
        950: "#172e54",

        DEFAULT: "#3b82f6",
      },
    },
  },

  plugins: [require("preline/plugin")],
};
