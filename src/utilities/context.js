import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";

const table = {
  sports: 21,
  history: 23,
  politics: 24,
};

const initialState = {
  quizOptions: {
    amount: 10,
    category: "history",
    difficulty: "hard",
  },
  url: "",
  questions: [],
  currentQuestions: [],
  waitingForOptions: true,
  currentPage: 1,
  postsPerPage: 1,
  score: 0,
};

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    dispatch({ type: "HANDLE_CHANGE", payload: { name, value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: "HANDLE_SUBMIT", payload: { table } });
  };

  const nextQuestion = () => {
    dispatch({ type: "NEXT_QUESTION" });
  };

  const handleReset = () => {
    dispatch({ type: "HANDLE_RESET" });
  };

  const checkAnswer = (params) => {
    if (params) {
      dispatch({ type: "INCREASE_SCORE" });
    } else {
      dispatch({ type: "NEXT_QUESTION" });
    }
  };

  return (
    <AppContext.Provider
      value={{
        state,
        handleSubmit,
        handleChange,
        nextQuestion,
        handleReset,
        checkAnswer,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
