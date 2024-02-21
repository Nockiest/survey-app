"use client";
import { POSITIONING } from "@/styles/positioning";

import { Survey } from "types/dataTypes";
import * as stylex from "@stylexjs/stylex";
import { BUTTON_STYLES } from "@/styles/button";
import Button from "./Button";
import Mylink from "./Mylink";
import { useGlobal } from "Context";
import { useState } from "react";
import { deleteElementInArray, setElementInArray } from "utils/useState";
import { TABLE } from "@/styles/table";




const Dashboard  = () => {
  const { surveyData, setSurveyData } = useGlobal();
  const [deletingSurveyId, setDeletingSurveyId] = useState<string | null>(null);

  // const toggleUploadedStatus = (id: string) => {
  //   const survey = surveyData.find((survey) => {survey.id === id})
  //   setSurveyData(setElementInArray( { ...survey, uploaded: !survey.uploaded }, surveyData))
  // }

  const handleDelete = (id: string) => {
    setSurveyData(deleteElementInArray(id, surveyData));
    setDeletingSurveyId(null);
  };

  return (
    <div className="dashboard" {...stylex.props(POSITIONING.centered)}>
      <h1>Survey Dashboard</h1>
      <table
        className="survey-table"
        {...stylex.props(TABLE.table, POSITIONING.centeredSelf)}
      >
        <thead className="survey-header" {...stylex.props(TABLE.head)}>
          <th>Title</th>
          <th>Description</th>
          <th>Uploaded</th>
          <th>Author</th>
          <th>Views</th>
          <th>Completions</th>
          <th>Language</th>
          <th>Tags</th>
          <th>Answer Statistics</th>
          <th>Action</th>
        </thead>
        <tbody>
          {surveyData.map((survey, index) => {
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
                <td {...stylex.props(TABLE.value)}>
                <Button
                  type={BUTTON_STYLES.secondary}
                  onClick={() => {
                    setElementInArray(
                      { ...survey, uploaded: !survey.uploaded },
                      setSurveyData
                    );
                  }}
                >
                  {survey.uploaded ? "Yes" : "No"}
                </Button>
                </td>
                <td {...stylex.props(TABLE.value)}>{survey.author}</td>
                <td {...stylex.props(TABLE.value)}>{survey.views}</td>
                <td {...stylex.props(TABLE.value)}>{survey.completions}</td>
                <td {...stylex.props(TABLE.value)}>
                  {survey.language || "Not specified"}
                </td>
                <td {...stylex.props(TABLE.value)}>
                  {survey.tags ? survey.tags : "None"}
                </td>
                <td {...stylex.props(TABLE.value)}>
                  <Button type={BUTTON_STYLES.secondary}>Open Answers</Button>
                </td>
                <td {...stylex.props(TABLE.value)}>
                  {deletingSurveyId === survey.id ? (
                    <Button
                      type={BUTTON_STYLES.danger}
                      onClick={() => handleDelete(survey.id)}
                    >
                      Confirm Delete
                    </Button>
                  ) : (
                    <Button
                      type={BUTTON_STYLES.danger}
                      onClick={() => setDeletingSurveyId(survey.id)}
                    >
                      Delete
                    </Button>
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
