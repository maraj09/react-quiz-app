import React from "react";
import QuestionForm from "./QuestionForm";
import { useAppContext } from "../utilities/context";
import SetupForm from "./SetupForm";

const Forms = () => {
  const { state } = useAppContext();
  
  if (state.waitingForOptions) {
    return (
      <>
        <SetupForm />
      </>
    );
  }

  return (
    <>
      <QuestionForm />
    </>
  );
};

export default Forms;
