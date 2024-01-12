/** @type {import('tailwindcss').Config} */
module.exports = {
  // We don't need vue, jsx, ts, or tsx, but if we add it later, it'll just owrk
  content: ["./src/**/*.{astro,html,svelte,vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },

  plugins: [require("@tailwindcss/typography"), require("daisyui")],
  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    themes: [
      {
        darktheme: {
          "primary": "#661AE6",
          "secondary": "#D926AA",
          "accent": "#1FB2A5",
          "neutral": "#333333",
          "base-100": "#1F232D",
          "info": "#3ABFF8",
          "success": "#36D399",
          "warning": "#FBBD23",
          "error": "#F87272",
          "neutral-content": "#FAFAFA",
          "base-content": "#FAFAFA",
        },
      },
    ],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    darkTheme: "dark",
  },
};
