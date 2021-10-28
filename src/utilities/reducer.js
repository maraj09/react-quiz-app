export const reducer = (state, action) => {
  if (action.type === "HANDLE_CHANGE") {
    let newQuizOptions = {
      ...state.quizOptions,
      [action.payload.name]: action.payload.value,
    };
    return { ...state, quizOptions: newQuizOptions };
  }
};
