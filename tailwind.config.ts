const path = require('path');

module.exports = {
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
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: {
          DEFAULT: "hsl(var(--background))",
          dark: "#000000",
          light: "#ffffff"
        },
        foreground: {
          DEFAULT: "hsl(var(--foreground))",
          dark: "#ffffff",
          light: "#000000"
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      fontFamily: {
        sans: ['Helvetica Now Text', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      typography: {
        DEFAULT: {
          css: {
            maxWidth: '65ch',
            color: 'var(--tw-prose-body)',
            '[class~="dark"] &': {
              color: 'var(--tw-prose-invert-body)',
            },
            a: {
              color: '#3182ce',
              '&:hover': {
                color: '#2c5282',
              },
            },
            strong: {
              color: 'var(--tw-prose-body)',
              '[class~="dark"] &': {
                color: 'var(--tw-prose-invert-body)',
              },
              fontFamily: 'Helvetica Now Text, sans-serif',
              fontWeight: 'bold',
            },
            h1: {
              color: 'var(--tw-prose-body)',
              '[class~="dark"] &': {
                color: 'var(--tw-prose-invert-body)',
              },
              fontFamily: 'Helvetica Now Text, sans-serif',
              fontWeight: 'normal',
            },
            h2: {
              color: 'var(--tw-prose-body)',
              '[class~="dark"] &': {
                color: 'var(--tw-prose-invert-body)',
              },
              fontFamily: 'Helvetica Now Text, sans-serif',
              fontWeight: 'normal',
              marginTop: '2em',
              marginBottom: '1em',
            },
            h3: {
              color: 'var(--tw-prose-body)',
              '[class~="dark"] &': {
                color: 'var(--tw-prose-invert-body)',
              },
              fontFamily: 'Helvetica Now Text, sans-serif',
              fontWeight: 'normal',
              marginTop: '1.5em',
              marginBottom: '0.75em',
            },
            code: {
              color: 'var(--tw-prose-body)',
              '[class~="dark"] &': {
                color: 'var(--tw-prose-invert-body)',
              },
              background: 'var(--tw-prose-pre-bg)',
              padding: '0.2em 0.4em',
              borderRadius: '0.25em',
              fontFamily: 'Graebenbach-Mono-Regular, monospace',
            },
            'code::before': {
              content: '""',
            },
            'code::after': {
              content: '""',
            },
            blockquote: {
              color: 'var(--tw-prose-quotes)',
              borderLeftColor: 'var(--tw-prose-quote-borders)',
              fontStyle: 'italic',
            },
          },
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [
    function ({ addBase, theme }) {
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
};

function flattenColorPalette(colors) {
  let newColors = {};

  function traverse(tree, parent = "") {
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