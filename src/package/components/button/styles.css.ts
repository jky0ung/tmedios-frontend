import { style } from "@vanilla-extract/css";

export const button = style({
  borderRadius: "0.75rem",
  overflow: "hidden",
  transition: "all .1s",
  ":active": {
    transform: "scale(0.97)",
    opacity: 0.9,
  },
});
