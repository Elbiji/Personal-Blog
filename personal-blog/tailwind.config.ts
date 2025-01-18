import { Inter, Lora } from "next/font/google";
import { title } from "process";
import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: "Inter, 'sans-serif'",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        xs: '1.5px',
        md: '8px',
        lg: '10px',
      },
    },
  },
  plugins: [],
} satisfies Config;
