import { POSITIONING_STYLES } from "@/styles/positioning";

import { Survey } from "types/dataTypes";
import * as stylex from "@stylexjs/stylex";
import { BUTTON_STYLES } from "@/styles/button";
import Button from "./Button";

type DashboardProps = {
  surveys: Survey[];
};
//POSITIONING_STYLES

export const TABLE = stylex.create({
  head: {},
  row: {
    border: "1px solid black",
    display: "grid",
    gridTemplateColumns: `repeat(8, "1fr")`,
    width: "100",
  },
  value: {
    height: "100%",
    border: "1px solid black",
    // maxWidth: "12,5%",
    overflowX: "hidden",
  },
});
const Dashboard: React.FC<DashboardProps> = ({ surveys }) => {
  return (
    <div className="dashboard" style={{ width: "100%" }}>
      <h1>Survey Dashboard</h1>
      <table className="survey-table" style={{ width: "100%" }}>
        <thead
          className="survey-header"
          {...stylex.props(POSITIONING_STYLES.row)}
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
        {surveys.map((survey, index) => (
          <tr
            key={index}
            className="survey-row"
            {...stylex.props(POSITIONING_STYLES.row, )}
            style={{ width: "100%" }}
          >
            <td {...stylex.props(TABLE.value)}>{survey.Title}</td>
            <td {...stylex.props(TABLE.value)}>{survey.Description}</td>
            <td {...stylex.props(TABLE.value)}>{survey.author}</td>
            <td {...stylex.props(TABLE.value)}>{survey.views}</td>
            <td {...stylex.props(TABLE.value)}>{survey.completions}</td>
            <td {...stylex.props(TABLE.value)}>
              {survey.Language || "Not specified"}
            </td>
            <td {...stylex.props(TABLE.value)}>
              {survey.Tags ? survey.Tags.join(", ") : "None"}
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
        ))}
      </table>
    </div>
  );
};

export default Dashboard;
