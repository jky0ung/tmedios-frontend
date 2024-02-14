import { style } from "@vanilla-extract/css";

export const numpadContainer = style({
  padding: 12,
  display: "grid",
  gridTemplateColumns: "213px 213px 213px",
  justifyContent: "center",
  gap: 6,
});
