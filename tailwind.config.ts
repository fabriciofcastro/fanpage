import type { Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import flattenColorPalette from "tailwindcss/lib/util/flattenColorPalette";

const config: Config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    gridAutoColumns: {
      'auto-fit': 'minmax(36rem, 1fr)',
    },
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      spacing: {
        "-0.1": "-0.1rem",
        "-0.2": "-0.2rem",
        "-0.3": "-0.3rem",
        "-0.4": "-0.4rem",
        "-0.5": "-0.5rem",
        'custom': 'calc(100vh - 96px)',
      },
      fontFamily: {
      
      },
      backgroundImage: {
        bgAvatar: "url('../../../assets/vector.png')", // Corrigido o path da URL
      },
      colors: {
        blueDark: {
          A1: '#004df2',
          A2: '#1166fb',
          A3: '#0077ff',
          A4: '#0075ff',
          A5: '#0081fd',
          A6: '#0f89fd',
          A7: '#2a91fe',
          A8: '#3094fe',
          A9: '#0090ff',
          A10: '#3b9eff',
          A11: '#70b8ff',
          A12: '#c2e6ff',
        },
        grayDark: {
          A1: 'hsla(0, 0%, 0%, 0)',
          A2: 'hsla(0, 0%, 100%, 0.04)',
          A3: 'hsla(0, 0%, 100%, 0.07)',
          A4: 'hsla(0, 0%, 100%, 0.11)',
          A5: 'hsla(0, 0%, 100%, 0.13)',
          A6: 'hsla(0, 0%, 100%, 0.17)',
          A7: 'hsla(0, 0%, 100%, 0.23)',
          A8: 'hsla(0, 0%, 100%, 0.33)',
          A9: 'hsla(0, 0%, 100%, 0.39)',
          A10: 'hsla(0, 0%, 100%, 0.45)',
          A11: 'hsla(0, 0%, 100%, 0.69)',
          A12: 'hsla(0, 0%, 100%, 0.93)',
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
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
        meteor: {
          "0%": { transform: "rotate(215deg) translateX(0)", opacity: "1" },
          "70%": { opacity: "1" },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "meteor-effect": "meteor 5s linear infinite",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require('@shrutibalasa/tailwind-grid-auto-fit'),
    require('tailwindcss-debug-screens'),
    addVariablesForColors,
  ],
}

// Função para adicionar variáveis para as cores
function addVariablesForColors({ addBase, theme }: any) {
  const allColors = flattenColorPalette(theme("colors"));
  const newVars = Object.fromEntries(
    Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
