import { keyframes, style } from "@vanilla-extract/css";

export const subjectSectionContainer = style({
  position: "absolute",
  top: 430,
  width: 1080,
});

export const descriptionImageKeyframes = keyframes({
  "0%": {
    opacity: 1,
  },
  "100%": {
    opacity: 0.5,
  },
});

export const descriptionImage = style({
  position: "relative",
  left: 114,
  top: 49,
  animation: `${descriptionImageKeyframes} 1s infinite alternate`,
});
