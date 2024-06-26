import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-dark": "#06202E",
        "secondary-dark": "#004A5A",
        "primary-light": "#31A87D",
        "secondary-light": "#007976",
        "primary-bg": "#FFFFFF",
      },
      container: {
        screens: {
          desktop: "1160px",
          tablet: "1000px",
          mobile: "1000зx",
          xs: "300px",
        },
      },
    },
    screens: {
      desktop: "1600px",
      laptop: "1360px",
      tablet: "1000px",
      mobile: "660px",
      xs: "480px",
    },
  },
  plugins: [],
};
export default config;
