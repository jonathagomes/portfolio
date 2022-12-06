import { globalCss } from "@stitches/react";

export const globalStyles = globalCss({
  "*": {
    margin: 0,
    padding: 0,
    boxSizing: "border-box",
    fontFamily: "Poppins, sans-serif",
  },

  html: {
    scrollBehavior: "smooth",
  },

  "body, button, input, textarea": {
    fontFamily: "Poppins, sans-serif",
    fontSize: "1rem",
  },

  body: {
    backgroundColor: "hsl(0, 0%, 98%)",
    color: "hsl(0, 0%, 46%)",
  },

  "h1,h2,h3": {
    color: "hsl(0, 0%, 20%)",
    fontWeight: "600",
  },

  ul: {
    listStyle: "none",
  },

  a: {
    color: "inherit",
    textDecoration: "none",
  },

  button: {
    cursor: "pointer",
    border: "none",
    outline: "none",
  },

  img: {
    maxWidth: "100%",
  },
});
