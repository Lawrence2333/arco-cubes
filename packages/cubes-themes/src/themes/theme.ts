import type { Config } from "tailwindcss";

export const sharedThemeConfig = {
  colors: {
    surface: "rgb(var(--surface) / <alpha-value>)",
    "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
    primary: "rgb(var(--primary) / <alpha-value>)",
    "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
    secondary: "rgb(var(--secondary) / <alpha-value>)",
    "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
    tertiary: "rgb(var(--tertiary) / <alpha-value>)",
    "on-tertiary": "rgb(var(--on-tertiary) / <alpha-value>)",
    outline: "rgb(var(--outline) / <alpha-value>)",
    "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
  },
  backgroundColor: {
    surface: "rgb(var(--surface) / <alpha-value>)",
    primary: "rgb(var(--primary) / <alpha-value>)",
    secondary: "rgb(var(--secondary) / <alpha-value>)",
    tertiary: "rgb(var(--tertiary) / <alpha-value>)",
  },
  textColor: {
    "on-surface": "rgb(var(--on-surface) / <alpha-value>)",
    "on-primary": "rgb(var(--on-primary) / <alpha-value>)",
    "on-secondary": "rgb(var(--on-secondary) / <alpha-value>)",
    "on-tertiary": "rgb(var(--on-tertiary) / <alpha-value>)",
  },
  borderColor: {
    outline: "rgb(var(--outline) / <alpha-value>)",
    "outline-variant": "rgb(var(--outline-variant) / <alpha-value>)",
  },
  borderRadius: {
    DEFAULT: "var(--radius-default)",
    sm: "var(--radius-sm)",
    default: "var(--radius-default)",
    md: "var(--radius-md)",
    lg: "var(--radius-lg)",
    xl: "var(--radius-xl)",
    "2xl": "var(--radius-2xl)",
    "3xl": "var(--radius-3xl)",
  },
  borderWidth: {
    card: "var(--card-border)",
  },
  transitionProperty: {
    all: "var(--transition-all)",
    transform: "var(--transition-transform)",
    opacity: "var(--transition-opacity)",
  },
  fontFamily: {
    DEFAULT: "var(--font-family-primary)",
    default: "var(--font-family-primary)",
    primary: "var(--font-family-primary)",
    secondary: "var(--font-family-secondary)",
  },
  screens: {
    pc: "1280px",
  },
} satisfies Config["theme"];
