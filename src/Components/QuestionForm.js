import React from "react";
import useFetch from "../utilities/useFetch";
import { useAppContext } from "../utilities/context";
import Loading from "./Loading";
import Modal from "./Modal";

const QuestionForm = () => {
  const { state, nextQuestion, checkAnswer } = useAppContext();
  const { data, loading, progress } = useFetch(state.url);

  let questions = "";
  let correct_answer = "";

  if (data.hasOwnProperty("results")) {
    if (state.currentPage > data.results.length) {
      return <Modal />;
    }
    const indexOfLastPost = state.currentPage * state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - state.postsPerPage;
    questions = data.results.slice(indexOfFirstPost, indexOfLastPost);

    let id = new Date().getTime().toString();
    const tempIndex = Math.floor(Math.random() * 4);

    correct_answer = questions[0].correct_answer;

    let options = [...questions[0].incorrect_answers];

    if (tempIndex === 3) {
      options.push(correct_answer);
    } else {
      options.push(options[tempIndex]);
      options[tempIndex] = correct_answer;
    }
    
    questions = [{ ...questions[0], id, options }];
  }
  if (loading) {
    return <Loading progress={progress} />;
  }
  return (
    <>
      <div className="questionContent">
        <div className="quizScore">
          <p>
            Correct Answers : {state.score}/{state.currentPage - 1}
          </p>
        </div>
        {questions.map((question) => {
          return (
            <div key={question.id}>
              <div className="questionHeading">
                <h4>{question.question}</h4>
              </div>
              <div className="questionOptions">
                {question.options.map((option, i) => {
                  return (
                    <button
                      key={i}
                      className="btn btn-success w-100 mb-3"
                      onClick={() => {
                        checkAnswer(option === correct_answer);
                      }}
                    >
                      {option}
                    </button>
                  );
                })}
              </div>
            </div>
          );
        })}
        <div className="questionSkip">
          <button
            className="btn btn-sm btn-secondary"
            onClick={() => nextQuestion()}
          >
            Skip This Question
          </button>
        </div>
      </div>
    </>
  );
};

export default QuestionForm;
