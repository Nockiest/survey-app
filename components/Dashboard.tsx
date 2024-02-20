import { POSITIONING_STYLES } from "@/styles/positioning";

import { Survey } from "types/dataTypes";
import * as stylex from "@stylexjs/stylex";
import { BUTTON_STYLES } from "@/styles/button";
import Button from "./Button";

type DashboardProps = {
  surveys: Survey[];
};


export const TABLE = stylex.create({
  table: {
    borderCollapse: "collapse",
    tableLayout: "fixed",
    textAlign: "start",
    border: "1px solid black",
    width: "auto",
    margin: '1em'
  },
  head: {   backgroundColor: "white",},
  row: {
    backgroundColor: "lightgray",

  },
  value: {
    overflowX: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
    border : "1px solid black",
    padding: '0 1em'
  },
});
const Dashboard: React.FC<DashboardProps> = ({ surveys }) => {
  return (
    <div className="dashboard"  >
      <h1>Survey Dashboard</h1>
      <table className="survey-table" {...stylex.props(TABLE.table)}>
        <thead
          className="survey-header"
          {...stylex.props(TABLE.head)}
        >
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <th>Views</th>
          <th>Completions</th>
          <th>Language</th>
          <th>Tags</th>
          <th>Answer Statistics</th>
        </thead>
        {surveys.map((survey, index) => {
          const truncatedDescription =
            survey?.description?.length > 20
              ? survey.description.substring(0, 20) + "..."
              : survey.description;

          return (
            <tr
              key={index}
              className="survey-row"
              {...stylex.props(TABLE.row)}
            >
              <td {...stylex.props(TABLE.value)}>{survey.title}</td>
              <td {...stylex.props(TABLE.value)}>{truncatedDescription}</td>
              <td {...stylex.props(TABLE.value)}>{survey.author}</td>
              <td {...stylex.props(TABLE.value)}>{survey.views}</td>
              <td {...stylex.props(TABLE.value)}>{survey.completions}</td>
              <td {...stylex.props(TABLE.value)}>
                {survey.language || "Not specified"}
              </td>
              <td {...stylex.props(TABLE.value)}>
                {survey.tags ? survey.tags.join(", ") : "None"}
              </td>
              <td {...stylex.props(TABLE.value)}>
                <Button type={BUTTON_STYLES.primary}>Open Answers</Button>
                {/* <ul>
            {survey.answerStats.map((answer, answerIndex) => (
                <li key={answerIndex}>
                    {Object.entries(answer).map(([key, value]) => (
                        <span key={key}>{key}: {value}</span>
                    ))}
                </li>
            ))}
        </ul> */}
              </td>
            </tr>
          );
        })}
      </table>
    </div>
  );
};

export default Dashboard;
