import { descriptionImageKeyframes } from "@/package/sections/subject_section/styles.css";
import { style } from "@vanilla-extract/css";

export const payCostInputImage = style({
  position: "fixed",
  top: 566,
  left: 127,
});

export const payCardDescriptionImage = style({
  position: "fixed",
  top: 1110,
  left: 114,
  animation: `${descriptionImageKeyframes} 1s infinite alternate`,
});

export const payCardBottomImage = style({
  position: "fixed",
  top: 1240,
  left: 91,
});
