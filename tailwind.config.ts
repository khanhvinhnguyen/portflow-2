import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      screens: {
        'xl': '1440px',
        '2xl': '1536px',
      },
      colors: {
        background: "rgba(var(--background))",
        foreground: "rgba(var(--foreground))",

        primary: "rgba(var(--primary))",
        text_primary: "rgba(var(--text_primary))", 
        text_secondary: "rgba(var(--text_secondary))", 
      
        
        card: "rgba(var(--card))",
        button: "rgba(var(--button))", 
      },
      clipPath: {
        'custom-polygon': 'polygon(0 0, 100% 0, 100% 100%, 70% 95%, 0 100%)',
      },
    },
  },
  plugins: [],
};
export default config;
