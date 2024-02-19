import { Answer, Survey } from "types/dataTypes";

const answer1: Answer = {
    optionA: 10,
    optionB: 15,
    optionC: 20,
  };

  const answer2: Answer = {
    optionX: 5,
    optionY: 8,
    optionZ: 12,
  };

  // Mock data for Survey
 export  const mockSurveys: Survey[] = [
    {
      author: "John Doe",
      views: "100",
      completions: "50",
      answerStats: [answer1, answer2],
      Language: "English",
      Tags: ["tag1", "tag2", "tag3"],
      Description: "This is the description of Survey 1",
      Title: "Survey 1",
    },
    {
      author: "Jane Smith",
      views: "200",
      completions: "80",
      answerStats: [answer2],
      Language: "Spanish",
      Description: "This is the description of Survey 2",
      Title: "Survey 2",
    },
  ];

  // Dashboard component with mock data
