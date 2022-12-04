import { createStitches } from "@stitches/react";

export const {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config,
} = createStitches({
  theme: {
    colors: {
      titleColor: "hsl(0, 0%, 20%)",
      titleColorDark: "hsl(0, 0%, 0%)",
      textColor: "hsl(0, 0%, 46%)",
      bodyColor: "hsl(0, 0%, 98%)",
      containerColor: "#fff",
    },
  },
});
