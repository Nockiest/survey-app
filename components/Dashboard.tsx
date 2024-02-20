"use client";
import { POSITIONING } from "@/styles/positioning";

import { Survey } from "types/dataTypes";
import * as stylex from "@stylexjs/stylex";
import { BUTTON_STYLES } from "@/styles/button";
import Button from "./Button";
import Mylink from "./Mylink";
import { useGlobal } from "app/Context";
import { useState } from "react";

type DashboardProps = {
  // surveys: Survey[];
};

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


const Dashboard: React.FC<DashboardProps> = () => {
  const { surveyData, setSurveyData } = useGlobal();
  const [deletingSurveyId, setDeletingSurveyId] = useState<string | null>(null);

  const handleDelete = (id: string) => {
    setSurveyData(prevData => prevData.filter(survey => survey.id !== id));
    setDeletingSurveyId(null);
  };

  return (
    <div className="dashboard" {...stylex.props(POSITIONING.centered)}>
      <h1>Survey Dashboard</h1>
      <table className="survey-table" {...stylex.props(TABLE.table, POSITIONING.centeredSelf)}>
        <thead className="survey-header" {...stylex.props(TABLE.head)}>
          <th>Title</th>
          <th>Description</th>
          <th>Author</th>
          <th>Views</th>
          <th>Completions</th>
          <th>Language</th>
          <th>Tags</th>
          <th>Answer Statistics</th>
          <th>Action</th> {/* New column for delete button */}
        </thead>
        <tbody>
          {surveyData.map((survey, index) => {
            const truncatedDescription = survey?.description?.length > 20
              ? survey.description.substring(0, 20) + "..."
              : survey.description;

            return (
              <tr key={index} className="survey-row" {...stylex.props(TABLE.row)}>
                <td {...stylex.props(TABLE.value)}>{survey.title}</td>
                <td {...stylex.props(TABLE.value)}>{truncatedDescription}</td>
                <td {...stylex.props(TABLE.value)}>{survey.author}</td>
                <td {...stylex.props(TABLE.value)}>{survey.views}</td>
                <td {...stylex.props(TABLE.value)}>{survey.completions}</td>
                <td {...stylex.props(TABLE.value)}>{survey.language || "Not specified"}</td>
                <td {...stylex.props(TABLE.value)}>{survey.tags ? survey.tags : "None"}</td>
                <td {...stylex.props(TABLE.value)}>
                  <Button type={BUTTON_STYLES.secondary}>Open Answers</Button>
                </td>
                <td {...stylex.props(TABLE.value)}>
                  {deletingSurveyId === survey.id ? (
                    <Button type={BUTTON_STYLES.danger} onClick={() => handleDelete(survey.id)}>Confirm Delete</Button>
                  ) : (
                    <Button type={BUTTON_STYLES.danger} onClick={() => setDeletingSurveyId(survey.id)}>Delete</Button>
                  )}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div>
        <Button type={BUTTON_STYLES.primary}>
          <Mylink href="/editor">Create New Survey</Mylink>
        </Button>
      </div>
    </div>
  );
};

export default Dashboard;
