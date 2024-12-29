import type { Config } from 'tailwindcss';
import type { PluginAPI } from 'tailwindcss/types/config';

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx,css}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      // ... rest of your theme configuration
    },
  },
  plugins: [
    function ({ addBase, theme }: PluginAPI) {
      let allColors = flattenColorPalette(theme("colors"));
      let newVars = Object.fromEntries(
        Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
      );

      addBase({
        ":root": {
          "--background": "0 0% 100%",
          "--foreground": "0 0% 0%",
          "--tw-prose-body": theme('colors.foreground.light'),
          "--tw-prose-headings": theme('colors.foreground.light'),
          "--tw-prose-invert-body": theme('colors.foreground.dark'),
          "--tw-prose-invert-headings": theme('colors.foreground.dark'),
          "--tw-prose-quotes": "rgb(0 0 0 / 0.8)",
          "--tw-prose-quote-borders": "rgb(0 0 0 / 0.2)",
          "--tw-prose-pre-bg": "rgb(0 0 0 / 0.1)",
          ...newVars,
        },
        ".dark": {
          "--background": "0 0% 0%",
          "--foreground": "0 0% 100%",
          "--tw-prose-quotes": "rgb(255 255 255 / 0.8)",
          "--tw-prose-quote-borders": "rgb(255 255 255 / 0.2)",
          "--tw-prose-pre-bg": "rgb(255 255 255 / 0.1)",
        },
      });
    },
    require("tailwindcss-animate"),
    require('@tailwindcss/typography'),
  ],
} as const;

function flattenColorPalette(colors: any): { [key: string]: string } {
  let newColors: { [key: string]: string } = {};

  function traverse(tree: any, parent = "") {
    for (let key in tree) {
      let current = parent ? `${parent}-${key}` : key;
      if (typeof tree[key] === "object") {
        traverse(tree[key], current);
      } else {
        newColors[current] = tree[key];
      }
    }
  }

  traverse(colors);
  return newColors;
}

export default config;