import React from "react";
import Forms from "./Components/Forms";
import "./style.css";

function App() {
  return (
    <>
      <div className="container">
        <div className="body">
          <div className="heading">
            <h1>Simple Quiz</h1>
            <div className="underline"></div>
          </div>
          <Forms />
        </div>
      </div>
    </>
  );
}

export default App;
