import React from "react";

const Feed = (props) => {
  return (
    <div className="Feed">
      <div className="Feed-header">
        <p>{props.data.id}</p>
      </div>
      <div className="Feed-content">{props.data.content}</div>
      <div className="Feed-text">{props.data.text}</div>
      <div className="text-input"></div>
    </div>
  );
};

export default Feed;
