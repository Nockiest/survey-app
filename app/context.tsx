'use client'
import { ReactNode, useContext, useEffect, useState } from "react";
import { createContext } from "react";
import { Survey } from "types/dataTypes";
import { mockSurveys } from "../mockData/dashboardData";
import { v4 as uuidv4 } from 'uuid';
import { auth } from "./firebase";
type GlobalContextType = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
  surveyData:  Survey[],
  setSurveyData: React.Dispatch<React.SetStateAction<Survey[]>>,
  editedSurveyId: string|null,
  setEditedSurveyId: React.Dispatch<React.SetStateAction<string|null>>
  isAuth: boolean;
  setIsAuth: React.Dispatch<React.SetStateAction<boolean>>;
};




export const GlobalContext = createContext<GlobalContextType | undefined>(
  undefined
);

export const GlobalContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [query, setQuery] = useState<string>("");
  const [isAuth, setIsAuth] = useState<boolean>(false);
useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });

    return () => unsubscribe();
  }, []);
  const [surveyData, setSurveyData] = useState<Survey[]>(() => {
    // Add an id to each survey if it doesn't have one initially
    const surveysWithIds = mockSurveys.map((survey, index) => ({
      ...survey,
      id:  survey?.id || uuidv4(), //
    }));
    return surveysWithIds;
  });
const [editedSurveyId, setEditedSurveyId] = useState<string|null>(null);

  let globalContextValue:GlobalContextType = {
    query,
    setQuery,
    surveyData,
    setSurveyData,
    editedSurveyId,
    setEditedSurveyId,
    isAuth,
    setIsAuth
  };




  return (
    <GlobalContext.Provider value={globalContextValue}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);

  if (!context) {
    throw new Error("useQuery must be used within a GlobalContextProvider");
  }

  return context;
};