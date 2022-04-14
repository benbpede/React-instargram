import React, { useState } from "react";
import PostContents from "./PostContents";
import View from "./View";
import "./DragPost.scss";

const DragPost = (props) => {
  let [미리보기, 미리보기변경] = useState(false);

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
    const files = e.dataTransfer.files;
    미리보기변경(true);
    console.log(files);
  };

  return (
    <div
      className="Post"
      onDragOver={dragOver}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={fileDrop}
    >
      {미리보기 === false ? (
        <PostContents upload={props.upload} setUpload={props.setUpload} />
      ) : null}

      {미리보기 === true ? <View /> : null}
      <button className="close" onClick={() => props.setUpload(!props.upload)}>
        <i className="bi bi-x-lg"></i>
      </button>
    </div>
  );
};

export default DragPost;
