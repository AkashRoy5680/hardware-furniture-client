module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          primary: "#D926A9",
          secondary: "#380209",
          accent: "#3A4256",
          neutral: "#191D24",
          "base-100": "#ffffff",
        },
      },
      "dark",
    ],
  },
  plugins: [require("daisyui")],
}
