import { Geist, Inter, Lora, Pixelify_Sans } from "next/font/google";
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
        Geist: "Geist, 'sans-serif'",
        PixelifySans: "Pixelify Sans, 'sans-serif'",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      backdropBlur: {
        xs: 'px',
        md: '8px',
        lg: '10px',
      },
      spacing: {
        '1': '8px',
        '2': '12px',
        '3': '16px',
        '4': '24px',
        '5': '32px',
        '6': '48px',
      },
      blur: {
        'xs': '0.5px',
      },
      keyframes: {
        move: {
          to: {
            strokeDashoffset: '1000',
          },
        },
      }
    },
  },
  plugins: [],
} satisfies Config;
