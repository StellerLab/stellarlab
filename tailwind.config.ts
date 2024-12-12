import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
    keyframes: {
      twinkle: {
        '0%': { opacity: '0' },
        '50%': { opacity: '1' },
        '100%': { opacity: '0' }
      },
      flowingLine: {
        '0%': { backgroundPosition: '0 0' },
        '100%': { backgroundPosition: '0 16px' }
      }
    },
    animation: {
      twinkle: 'twinkle 2s infinite',
      'flowing-line': 'flowingLine 1s linear infinite'
    }
  },
  plugins: [],
} satisfies Config;
