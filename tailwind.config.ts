import type { Config } from "tailwindcss";
// @ts-ignore
import daisyui from "daisyui";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [daisyui],
  // @ts-ignore
  daisyui: {
    themes: ["dark"],
  },
};

export default config;