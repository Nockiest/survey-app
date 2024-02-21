
import * as stylex from "@stylexjs/stylex";
export const TABLE = stylex.create({
    table: {
      borderCollapse: "collapse",
      tableLayout: "fixed",
      textAlign: "start",
      border: "1px solid black",
      width: "auto",
      margin: "1em 5px",
    },
    head: { backgroundColor: "white" },
    row: {
      backgroundColor: "lightgray",
    },
    value: {
      overflow: "hidden",
      textOverflow: "ellipsis",
      whiteSpace: "nowrap",
      border: "1px solid black",
      padding: "0 1em",
    },
  });