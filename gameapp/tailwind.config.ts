import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "fight": "url('')",
      },
    },
    fontFamily: {
      PPMondwest: ['PPMondwest-Regular', 'sans-serif'],
      PPNeueBit: ['PPNeueBit-Bold', 'sans-serif'],
    },
    colors: {
      black: "#000",
      white: "#fff",
      brand: {
        blue: "#006d77",
        bluedark: "#006d77",
        neongreen: "#00ff66"
      }
    }
  },
  plugins: [
    require("@tailwindcss/forms"),
  ],
};
export default config;
