import * as stylex from "@stylexjs/stylex";
// import { accent, background, colors, primaryText } from './Variables';
const DARK = "@media (prefers-color-scheme: dark)";

export const POSITIONING_STYLES = stylex.create({
    row: {
      display: "flex",
      flexDirection: "row",
      justifyContent: "space-around",
    },
    column: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-around",
    },
    centered: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    absolute: {
      position: "absolute",
    },
    relative: {
      position: "relative",
    },
    fixed: {
      position: "fixed",
    },
    sticky: {
      position: "sticky",
      top: 0,
    },
  });
