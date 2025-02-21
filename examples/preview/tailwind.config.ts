import type { Config } from "tailwindcss";
import { sharedThemeConfig } from "arco-cubes-themes";

export default {
  content: [
    "./src/**/*.{ts,tsx}",
    "./node_modules/arco-cubes-components/**/*.{ts,tsx}",
    "./node_modules/arco-cubes-basic/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      ...sharedThemeConfig,
    },
  },
} satisfies Config;
