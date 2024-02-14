import { keyframes, style } from "@vanilla-extract/css";

const scale = keyframes({
  "0%": {
    transform: "scale(1)",
  },
  "70%": {
    transform: "scale(1)",
  },
  "100%": {
    transform: "scale(1.05)",
  },
});

export const mainTop = style({
  position: "absolute",
  top: 182,
  width: 1080,
});

export const mainTopImage = style({
  position: "relative",
  left: 92,
});

export const mainMid = style({
  position: "absolute",
  top: 507,
  height: 1000,
});

export const mainMidButton1 = style({
  position: "relative",
  width: 800,
  height: 300,
  left: 140,
  animation: `${scale} 3s 1s infinite alternate`,
});

export const mainMidButton2 = style({
  display: "block",
  position: "relative",
  width: 800,
  height: 300,
  top: 110,
  left: 140,
  animation: `${scale} 3s 2s infinite alternate`,
});

export const mainMidButton3 = style({
  display: "block",
  position: "relative",
  width: 800,
  height: 300,
  top: 220,
  left: 140,
  animation: `${scale} 3s 3s infinite alternate`,
});

export const mainBottom = style({
  position: "absolute",
  top: 1720,
  width: 1080,
  height: 200,
  backgroundColor: "transparent",
  display: "flex",
});

export const mainBottomButton = style({
  flex: 1,
});
