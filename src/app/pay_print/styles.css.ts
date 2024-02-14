import { keyframes, style } from "@vanilla-extract/css";

const payPrintButtonKeyframes = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "70%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(1.15)",
  },
});

const printImageKeyframse = keyframes({
  "0%": {
    opacity: 0,
  },
  "70%": {
    opacity: 1,
  },
  "100%": {
    opacity: 1,
  },
});

export const payPrintDescriptionImage = style({
  position: "absolute",
  top: 1062,
  left: 114,
  animation: `${payPrintButtonKeyframes} 2s infinite alternate`,
});

export const printStepImageAnimation = style({
  animation: `${printImageKeyframse} 1s infinite alternate`,
});
