import { Survey } from "types/dataTypes";

 
export const mockSurveys: (Omit<Survey, 'id'> & { id?: string })[] = [
  {
    author: "John Doe",
    views: 100,
    completions:  50 ,
    questions: [ ],
    language: "English",
    tags:  "tag1 tag2 tag3", // Assuming tags should be an array
    description: "This is the description of Survey 1",
    title: "Survey 1",
  },
  {
    author: "Jane Smith",
    views:  200 ,
    completions:  80,
    questions: [ ],
    language: "Spanish",
    description: "This is the description of Survey 2",
    title: "Survey 2",
  },
];