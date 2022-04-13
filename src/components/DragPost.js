import React from "react";
import PostContents from "./PostContents";
import "./DragPost.scss";

const DragPost = (props) => {
  const dragOver = (e) => {
    e.preventDefault();
  };

  const dragEnter = (e) => {
    e.preventDefault();
  };

  const dragLeave = (e) => {
    e.preventDefault();
  };

  const fileDrop = (e) => {
    e.preventDefault();

    console.log(e);
  };

  return (
    <div
      className="Post"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      <PostContents upload={props.upload} setUpload={props.setUpload} />
    </div>
  );
};

export default DragPost;
