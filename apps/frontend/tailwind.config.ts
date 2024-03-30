import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#412D26",
        "secondary-dark": "#735749",
        "primary-light": "#D9BFB0",
        "secondary-light": "#C0A18F",
        "primary-bg": "#F2F5EA"
      },
      container: {
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1160px"
        }
      }
    }
  },
  plugins: []
};
export default config;