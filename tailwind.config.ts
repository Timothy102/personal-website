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
      typography: {
        DEFAULT: {
          css: {
            color: '#000000', // Pure black text
            fontWeight: 600, // Semibold for all text
            fontSize: '1.125rem', // Slightly larger base font size
            lineHeight: '1.75',
            p: {
              fontWeight: 600,
              color: '#000000',
            },
            'h1, h2, h3, h4, h5, h6': {
              fontWeight: 800, // Extra bold for headings
              color: '#000000',
            },
            'ul > li': {
              fontWeight: 600,
              color: '#000000',
            },
            'ol > li': {
              fontWeight: 600,
              color: '#000000',
            },
            a: {
              fontWeight: 600,
              color: '#000000',
              '&:hover': {
                color: '#404040',
              },
            },
          },
        },
        // Dark mode specific styles
        invert: {
          css: {
            color: '#ffffff', // Pure white text in dark mode
            'h1, h2, h3, h4, h5, h6': {
              color: '#ffffff',
            },
            p: {
              color: '#ffffff',
            },
            'ul > li': {
              color: '#ffffff',
            },
            'ol > li': {
              color: '#ffffff',
            },
            a: {
              color: '#ffffff',
              '&:hover': {
                color: '#e5e5e5',
              },
            },
          },
        },
      },
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