import * as stylex from "@stylexjs/stylex";

const DARK = "@media (prefers-color-scheme: dark)";

// export const colors = stylex.create({
//   text: "#1a1006",
//   background: "#fcf6f1",
//   primary: "#ff8b1f",
//   secondary: "#8be3c1",
//   accent: "#5cb5d8",
// });
// export const primaryText = "black";
// export const secondaryText = "#333";
// export const accent = "orange";
// export const background = "white";
// export const lineColor = "gray";

export const SPACING = stylex.create({
  none:{gap:"0px"},
  xs:{gap:"4px"},
  sm :{gap:"8px"},
  md:{gap:"12px"}  ,
  lg:{gap:"20px"}  ,
  xl :{gap:"32px"}  ,
  xxl :{gap:"48px"}  ,
  xxxl:{gap:"96px"}  ,
});

// export const borders = stylex.create({
//   borderWidthThin: "1px",
//   borderWidthMedium: "2px",
//   borderWidthThick: "3px",
//   borderStyleSolid: "solid",
//   borderStyleDashed: "dashed",
//   borderColorDefault: "#ccc",
// });

export const SHADOWS = stylex.create({
  sm: { boxShadow: "0 1px 2px rgba(0, 0, 0, 0.1)" },
  md: { boxShadow: "0 3px 6px rgba(0, 0, 0, 0.15)" } ,
  lg: { boxShadow: "0 5px 10px rgba(0, 0, 0, 0.2)"} ,
});

// export const fonts = stylex.create({
//   bodyFontFamily: "Arial, sans-serif",
//   headingFontFamily: "Helvetica, sans-serif",
//   fontSizeSmall: "14px",
//   fontSizeMedium: "16px",
//   fontSizeLarge: "20px",
//   fontWeightNormal: "400",
//   fontWeightBold: "700",
//   fontStyleItalic: "italic",
// });

// export const tokens = stylex.create({
//   primaryText: "black",
//   secondaryText: "#333",
//   accent: "blue",
//   background: "white",
//   lineColor: "gray",
//   borderRadius: "4px",
//   fontFamily: "system-ui, sans-serif",
//   fontSize: "16px",
// });
