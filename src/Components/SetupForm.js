import React from "react";
import { useAppContext } from "../utilities/context";

const SetupForm = () => {
  const { state, handleSubmit, handleChange } = useAppContext();
  return (
    <>
      <div className="content">
        <div className="content_heading mb-5">
          <h4>Choose Options</h4>
        </div>
        <form action="" onSubmit={(e) => handleSubmit(e)}>
          <div className="form-floating my-3">
            <input
              type="number"
              className="form-control"
              id="floatingInput"
              name="amount"
              placeholder="Number Of Questions"
              value={state.quizOptions.amount}
              onChange={handleChange}
            />
            <label htmlFor="floatingInput">Number Of Questions</label>
          </div>
          <div className="form-floating my-3">
            <select
              className="form-select"
              id="floatingSelect"
              name="category"
              value={state.quizOptions.category}
              onChange={handleChange}
            >
              <option value="history">History</option>
              <option value="sports">Sports</option>
              <option value="politics">Politics</option>
            </select>
            <label htmlFor="floatingSelect">Category</label>
          </div>
          <div className="form-floating my-3">
            <select
              className="form-select"
              id="floatingSelect"
              name="difficulty"
              value={state.quizOptions.difficulty}
              onChange={handleChange}
            >
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="hard">Hard</option>
            </select>
            <label htmlFor="floatingSelect">Difficulty</label>
          </div>
          <button type="submit" className="btn btn-success my-3 w-100">
            Start
          </button>
        </form>
      </div>
    </>
  );
};

export default SetupForm;
