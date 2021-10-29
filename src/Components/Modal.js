import React from "react";
import { useAppContext } from "../utilities/context";

const Modal = () => {
  const { handleReset, state } = useAppContext();
  return (
    <>
      <div className="modalContainer">
        <div className="modalBody text-center">
          <h2 className="text-info my-2 fs-1" style={{ letterSpacing: `1px` }}>
            Congrats!
          </h2>
          <p className="my-4 fs-4">
            You answered {((state.score / state.quizOptions.amount) * 100).toFixed(0)}% of
            questions correctly
          </p>
          <button
            className="btn btn-danger my-3 w-50"
            onClick={() => handleReset()}
          >
            Try Again
          </button>
        </div>
      </div>
    </>
  );
};

export default Modal;
