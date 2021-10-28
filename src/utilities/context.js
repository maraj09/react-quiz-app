import React, { useContext, useReducer } from "react";
import { reducer } from "./reducer";
import { fetchData } from "./fetch";

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
  questions: [],
  loading: false,
  waitingForOptions: true,
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
    let url = `https://opentdb.com/api.php?amount=${
      state.quizOptions.amount
    }&category=${table[state.quizOptions.category]}&difficulty=${
      state.quizOptions.difficulty
    }&type=multiple`;
    fetchData(url).then((response) => {
      state.questions = response.results;
    });
  };

  return (
    <AppContext.Provider value={{ state, handleSubmit, handleChange }}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
