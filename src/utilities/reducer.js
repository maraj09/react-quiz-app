export const reducer = (state, action) => {
  if (action.type === "HANDLE_CHANGE") {
    let newQuizOptions = {
      ...state.quizOptions,
      [action.payload.name]: action.payload.value,
    };
    return { ...state, quizOptions: newQuizOptions };
  }
  if (action.type === "HANDLE_SUBMIT") {
    return {
      ...state,
      waitingForOptions: false,
      url: `https://opentdb.com/api.php?amount=${
        state.quizOptions.amount
      }&category=${
        action.payload.table[state.quizOptions.category]
      }&difficulty=${state.quizOptions.difficulty}&type=multiple`,
    };
  }
  if (action.type === "NEXT_QUESTION") {
    let newCurrentPage = state.currentPage + 1;
    return { ...state, currentPage: newCurrentPage };
  }
  if (action.type === "HANDLE_RESET") {
    return {
      ...state,
      url: "",
      questions: [],
      currentQuestions: [],
      waitingForOptions: true,
      currentPage: 1,
      score: 0,
    };
  }
  if (action.type === "INCREASE_SCORE") {
    let newScore = state.score + 1;
    let newCurrentPage = state.currentPage + 1;
    return { ...state, score: newScore, currentPage: newCurrentPage };
  }
};
