import type { Config } from "tailwindcss";

const config: Omit<Config, "content"> = {
  theme: {
    fontSize: {
      xxs: ["0.625rem", "1.25rem"],
      xs: ["0.75rem", "1.5rem"],
      sm: ["0.875rem", "1.5rem"],
      base: ["1rem", "1.5rem"],
      lg: ["1.125rem", "1.5rem"],
      xl: ["1.25rem", "1.5rem"],
      "2xl": ["1.5rem", "2rem"],
      "3xl": ["2rem", "2rem"],
      "4xl": ["2.5rem", "3rem"],
      "5xl": ["3rem", "3rem"],
      "6xl": ["4rem", "4rem"]
    },
    lineHeight: {
      none: 1,
      tight: 1.25,
      short: 1.4,
      base: 1.6
    },
    extend: {
      fontFamily: {
        brand: ['Merriweather', 'serif'],
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

export default config;
