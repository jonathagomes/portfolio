import { styled } from "stitches/stitches.config";

export const Header = styled("header", {
  height: "4rem",
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",

  ul: {
    display: "flex",
    gap: "1rem",

    a: {
      fontWeight: "bold",
      transition: "color 0.3s",

      "&:hover": {
        color: "#000",
      },
    },
  },
});
