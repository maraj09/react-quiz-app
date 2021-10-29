import React from "react";

const Loading = ({ progress }) => {
  return (
    <>
      <div
        className="progress"
        style={{ margin: `25em auto`, maxWidth: `500px` }}
      >
        <div
          className="progress-bar bg-info text-black progress-bar-striped progress-bar-animated"
          style={{ width: `${progress}` }}
        >
          {progress}
        </div>
      </div>
    </>
  );
};

export default Loading;
